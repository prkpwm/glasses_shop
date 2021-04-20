from flask import Flask,render_template, request
from werkzeug.utils import secure_filename
import AI.det
import mysql.connector
import json
from flask import jsonify
import time
from flask_cors import CORS,cross_origin


app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={
    r"/*": {
       "origins": "*"
    }
})

face_shapes = ['square','round','heart','oblong','oval']
glasses_recomments = ["Oval, Round and Large","Rectangle, Square and Oval","Rectangle, Oval and Horn","Rectangle, Square and Oval","Rectangle, Oval, Square, Round, Large and Horn"]
con = mysql.connector.connect(user='sql6406291', password='Aq4R8lC4Ae',host='sql6.freemysqlhosting.net',database='sql6406291')
cursor = con.cursor()

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
      path_name = time.time()
      f.save("static/%s.png"%path_name)
      fs = AI.det.process(path_name)
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
            <img src="/static/"""+str(path_name)+""".png" alt="img">
            <h1> Your face shape is """+face_shape+"""</h1><h3> Glasses recommended for you is  """+glasses_recomments[i]  #+"""</h3> <iframe width="1820" height="400" scrolling="off" src="http://localhost:3000/GlassesShop/Shopping"> </iframe>"""

@app.route('/getinfo/<table>')
def getinfo(table):
   sql = ("select * from " + str(table))
   cursor.execute(sql)
   data = cursor.fetchall() 
   return jsonify(data)

@app.route('/verify/', methods=['GET', 'POST'])
def verify():
   massage = "404"
   
   if request.method == "GET":
      body = json.loads(request.args.get('body'))
      cursor.execute("select COUNT(id) from userinfo where username=\"" + body.get('username')+"\"and pwd=\""+ body.get('pwd')+"\"")
      confirm = cursor.fetchone() 
      if confirm[0]:
         massage =  "correct"
      else:
         massage = "incorrect"
   elif request.method == "POST":
      details = request.form
      cursor.execute("select COUNT(id) from userinfo where username=\"" + details['username']+"\"and pwd=\""+ details['pwd']+"\"")
      confirm = cursor.fetchone() 
      if confirm[0]:
         massage =  "correct"
      else:
         massage = "incorrect"

   return jsonify(massage)

@app.route('/insert_userinfo/', methods=['GET', 'POST'])
def insert_userinfo():
   massage = ""
   if request.method == "POST":
      details = request.form
      cursor.execute("""SELECT COUNT(id) FROM userinfo""")
      maxid = cursor.fetchone() 
      sql = "INSERT INTO userinfo (id, username, pwd, firstname, lastname, email, phone, address) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
      val = (maxid[0], details['username'], details['pwd'], details['firstname'], details['lastname'], details['email'], details['phone'], details['address'])
      cursor.execute(sql, val)
      con.commit()
      massage = "Success"
   elif request.method == "GET":
      body = json.loads(request.args.get('body'))
      print(body)
      cursor.execute("""SELECT COUNT(id) FROM userinfo""")
      maxid = cursor.fetchone() 
      sql = "INSERT INTO userinfo (id, username, pwd, firstname, lastname, email, phone, address) VALUES (%s, %s, %s, %s, %s, %s, %s, %s)"
      val = (maxid[0]+1, body.get('username'), body.get('pwd'), body.get('firstname'), body.get('lastname'), body.get('email'), body.get('phone'), body.get('address'))
      cursor.execute(sql, val)
      con.commit()
      massage = "Success"
   else:
      massage = "Unsuccess"
   return jsonify(massage)
   
@app.route('/insert_orderinfo/', methods=['GET', 'POST'])
def insert_orderinfo():
   massage = ""
   if request.method == "POST":
      details = request.form
      cursor.execute("""SELECT COUNT(id) FROM orderinfo""")
      maxid = cursor.fetchone() 
      sql = "INSERT INTO userinfo (orderid, date, status, tracking, userid) VALUES (%s, %s, %s, %s, %s)"
      val = (maxid[0], details['date'], details['status'], details['tracking'], details['userid'])
      cursor.execute(sql, val)
      con.commit()
      massage = "Success"
   else:
      massage = "Unsuccess"
   return jsonify(massage)

@app.route('/insert_iteminfo/', methods=['GET', 'POST'])
def insert_iteminfo():
   massage = ""
   if request.method == "POST":
      details = request.form
      cursor.execute("""SELECT COUNT(id) FROM iteminfo""")
      maxid = cursor.fetchone() 
      sql = "INSERT INTO userinfo (GID, name, price, path, typeid) VALUES (%s, %s, %s, %s, %s)"
      val = (maxid[0], details['name'], details['price'], details['path'], details['typeid'])
      cursor.execute(sql, val)
      con.commit()
      massage = "Success"
   else:
      massage = "Unsuccess"
   return jsonify(massage)

      
if __name__ == '__main__':
    app.run(host="0.0.0.0",port=8080)