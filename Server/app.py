from flask import Flask,render_template, request
from werkzeug.utils import secure_filename
import AI.faceshape
import mysql.connector
import json

face_shapes = ['squared shape.','round shape.','triangle shape.','diamond shape.','rectangular.','oval.']
glasses_recomments = ["Oval, Round and Large","Rectangle, Square and Oval","Rectangle, Oval and Horn","Rectangle, Oval and Horn","Rectangle, Square and Oval","Rectangle, Oval, Square, Round, Large and Horn"]
con = mysql.connector.connect(user='root', password='',host='127.0.0.1',database='glasses_shop')
cursor = con.cursor()

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("login.html") 

@app.route("/adduser")
def adduser():
    return render_template("adduser.html") 

@app.route('/upload')
def upload():
   return render_template('upload.html')
	
@app.route('/uploader/', methods = ['GET', 'POST'])
def upload_file():
   if request.method == 'POST':
      f = request.files['file']
      f.save("static/img.png")
      fs = AI.faceshape.process()
      for i,face_shape in enumerate(face_shapes):
         if fs==face_shape:
            return """
            <head>
               <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Sofia">
               <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Audiowide">
               <style>
                  h1 {
                     font-family: "Sofia", sans-serif;
                     text-shadow: 3px 3px 3px #ababab;
                  }            
                  h3 {
                     font-family: "Audiowide", sans-serif;
                     text-shadow: 1px 1px 1px #ababab;
                  }
                  img {
                     max-width: 15%;
                     min-width: 7%;
                     height: auto;
                  }
               </style>
            </head>
            <img src="/static/img.png" alt="img">
            <h1> Your face shape is """+face_shape+"""</h1><h3> Glasses recommended for you is  """+glasses_recomments[i]  #+"""</h3> <iframe width="1820" height="400" scrolling="off" src="http://localhost:3000/GlassesShop/Shopping"> </iframe>"""

@app.route('/getinfo/<table>')
def getinfo(table):
   sql = ("select * from " + str(table))
   cursor.execute(sql)
   data = cursor.fetchall() 
   return str(data)

@app.route('/verify/', methods=['GET', 'POST'])
def verify():
   if request.method == "POST":
      details = request.form
      cursor.execute("select COUNT(id) from userinfo where username=\"" + details['username']+"\"and pwd=\""+ details['pwd']+"\"")
      confirm = cursor.fetchone() 
      if confirm[0]:
         return "correct"
      else:
         return "incorrect"
   return "Error"


@app.route('/insert_userinfo/', methods=['GET', 'POST'])
def insert_userinfo():
   if request.method == "POST":
      details = request.form
      cursor.execute("""SELECT COUNT(id) FROM userinfo""")
      maxid = cursor.fetchone() 
      sql = "INSERT INTO userinfo (id, username, pwd, firstname, lastname, email, phone, address) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
      val = (maxid[0], details['username'], details['pwd'], details['firstname'], details['lastname'], details['email'], details['phone'], details['address'])
      cursor.execute(sql, val)
      con.commit()
      return "Success"
   else:
      return "Unsuccess"
      
@app.route('/insert_orderinfo/', methods=['GET', 'POST'])
def insert_orderinfo():
   if request.method == "POST":
      details = request.form
      cursor.execute("""SELECT COUNT(id) FROM orderinfo""")
      maxid = cursor.fetchone() 
      sql = "INSERT INTO userinfo (orderid, date, status, tracking, userid) VALUES (%s, %s, %s, %s, %s)"
      val = (maxid[0], details['date'], details['status'], details['tracking'], details['userid'])
      cursor.execute(sql, val)
      con.commit()
      return "Success"
   else:
      return "Unsuccess"

@app.route('/insert_iteminfo/', methods=['GET', 'POST'])
def insert_iteminfo():
   if request.method == "POST":
      details = request.form
      cursor.execute("""SELECT COUNT(id) FROM iteminfo""")
      maxid = cursor.fetchone() 
      sql = "INSERT INTO userinfo (GID, name, price, path, typeid) VALUES (%s, %s, %s, %s, %s)"
      val = (maxid[0], details['name'], details['price'], details['path'], details['typeid'])
      cursor.execute(sql, val)
      con.commit()
      return "Success"
   else:
      return "Unsuccess"

      
if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8080)