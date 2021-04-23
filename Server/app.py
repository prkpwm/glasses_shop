from flask import Flask, render_template, request
from werkzeug.utils import secure_filename
import AI.det
import mysql.connector
import json
from flask import jsonify,send_file,redirect
import time
from flask_cors import CORS, cross_origin
from mysql.connector import errors 
import os

app = Flask(__name__)
CORS(app)
cors = CORS(app, resources={
    r"/*": {
        "origins": "*"
    }
})

face_shapes = ['square', 'round', 'heart', 'oblong', 'oval']
glasses_recomments = ["Oval, Round and Large", "Rectangle, Square and Oval", "Rectangle, Oval and Horn",
                      "Rectangle, Square and Oval", "Rectangle, Oval, Square, Round, Large and Horn"]
con = mysql.connector.connect(user='sql6406291', password='Aq4R8lC4Ae',
                              host='sql6.freemysqlhosting.net', database='sql6406291')
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


@app.route('/uploader/', methods=['GET', 'POST'])
def upload_file():
    if request.method == 'POST':
        f = request.files['file']
        path_name = time.time()
        f.save("static/pred/%s.png" % path_name)
        fs = AI.det.process(path_name)
        for i, face_shape in enumerate(face_shapes):
            if fs == face_shape:
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
            <img src="/static/pred/"""+str(path_name)+""".png" alt="img">
            <h1> Your face shape is """+face_shape+"""</h1><h3> Glasses recommended for you is  """+glasses_recomments[i]  # +"""</h3> <iframe width="1820" height="400" scrolling="off" src="http://localhost:3000/GlassesShop/Shopping"> </iframe>"""


@app.route('/getinfo/<table>')
def getinfo(table):
    sql = ("select * from " + str(table))
    cursor.execute(sql)
    data = cursor.fetchall()
    return jsonify(data)


@app.route('/getinfobyid/<table>/<column>/<value>')
def getinfobyid(table, column, value):
    sql = ("select * from " + str(table) + " where " + column + " = " + value)
    cursor.execute(sql)
    data = cursor.fetchall()
    return jsonify(data)


@app.route('/getpopulate')
def getpopulate():
    sql = ("""SELECT *, COUNT(s.iid) as val from statistics s 
    JOIN iteminfo i on i.GID = s.iid 
    JOIN itemtype ii on ii.TID = i.typeid 
    GROUP by i.GID 
    ORDER by val DESC 
    LIMIT 3""")
    try:
        time.sleep(1)
        cursor.execute(sql)
        data = cursor.fetchall()
        return jsonify(data)
    except (errors.DatabaseError,mysql.connector.Error,mysql.connector.errors.IntegrityError) as e:
        return jsonify(e)
    

@app.route('/sortitem/<table>/<column>/<order>')
def sortitem(table, column, order):  # order(ASC,DESC)
    sql = ("select * from " + str(table) + " ORDER BY " + column + " " + order)
    cursor.execute(sql)
    data = cursor.fetchall()
    return jsonify(data)


@app.route('/sortitem2/<table>/<column>/<order>')
def sortitem2(table, column, order):  # order(ASC,DESC)
    sql = ("select * from " + str(table) +
           " left join itemtype on itemtype.TID = iteminfo.typeid ORDER BY " + column + " " + order)
    cursor.execute(sql)
    data = cursor.fetchall()
    return jsonify(data)


@app.route('/loadimages/<image_path>')
def loadimages(image_path):  # order(ASC,DESC)
    return send_file("static/StockImage/"+image_path+".png", mimetype='image/png')

@app.route('/saveimages/<uid>', methods=['GET', 'POST'])
def saveimages(uid):
    if request.method == 'POST':
        f = request.files['file']
        path = time.time()
        f.save("static/StockImage/%s.png" % path)
        sql = cursor.execute("UPDATE userinfo SET path = "+str(path)+" WHERE id = " +uid)
        cursor.execute(sql)
        con.commit()
        return redirect("http://localhost:3000/GlassesShop/Profile", code=302)

@app.route('/get_image_path/', methods=['GET', 'POST'])
def getimagepath():
    body = json.loads(request.args.get('body'))
    sql = ("select path from userinfo where id = " + body.get('uid'))
    cursor.execute(sql)
    data = cursor.fetchone()
    return jsonify(data)


@app.route('/verify/', methods=['GET', 'POST'])
def verify():
    massage = "404"
    if request.method == "GET":
        body = json.loads(request.args.get('body'))
        cursor.execute("select id,path,role from userinfo where username=\"" +body.get('username')+"\"and pwd=\"" + body.get('pwd')+"\"")
        confirm = cursor.fetchone()
        if confirm is not None:
            massage = confirm
        else:
            massage = "404"
    elif request.method == "POST":
        details = request.form
        cursor.execute("select id,path,role from userinfo where username=\"" +
                       details['username']+"\"and pwd=\"" + details['pwd']+"\"")
        confirm = cursor.fetchone()
        if confirm is not None:
            massage = confirm
        else:
            massage = "404"
    print(massage)
    return jsonify(massage)


@app.route('/insert_userinfo/', methods=['GET', 'POST'])
def insert_userinfo():
    massage = ""
    if request.method == "POST":
        details = request.form
        sql = "INSERT INTO userinfo ( username, pwd, firstname, lastname, email, phone, address ,sex ,dob) VALUES (%s, %s, %s, %s, %s, %s, %s, %s, %s)"
        val = (details['username'], details['pwd'], details['firstname'],
               details['lastname'], details['email'], details['phone'], details['address'], details['sex'])
        cursor.execute(sql, val)
        try:
            cursor.execute(sql, val)
            con.commit()
        except (errors.DatabaseError,mysql.connector.Error,mysql.connector.errors.IntegrityError) as e:
            return jsonify(e)
        
        massage = "Success"
    elif request.method == "GET":
        body = json.loads(request.args.get('body'))
        sql = "INSERT INTO userinfo (username, pwd, firstname, lastname, email, phone, address ,sex,dob) VALUES ( %s, %s, %s, %s, %s, %s, %s, %s, %s)"
        val = (body.get('username'), body.get('pwd'), body.get('firstname'),
               body.get('lastname'), body.get('email'), body.get('phone'), body.get('address'), body.get('sex'), body.get('dob'))
        cursor.execute(sql, val)
        try:
            cursor.execute(sql, val)
            con.commit()
        except (errors.DatabaseError,mysql.connector.Error,mysql.connector.errors.IntegrityError) as e:
            return jsonify(e)
        
        massage = "Success"
    else:
        massage = "Unsuccess"
    return jsonify(massage)


@app.route('/insert_orderinfo/', methods=['GET', 'POST'])
def insert_orderinfo():
    massage = ""
    if request.method == "POST":
        details = request.form
        sql = "INSERT INTO userinfo (status, tracking, userid) VALUES (%s, %s, %s)"
        val = (details['status'], details['tracking'], details['userid'])
        cursor.execute(sql, val)
        con.commit()
        massage = "Success"
    elif request.method == "GET":
        body = json.loads(request.args.get('body'))
        sql = "INSERT INTO userinfo (status, tracking, userid) VALUES ( %s, %s, %s)"
        val = (body.get('status'), body.get('tracking'), body.get('userid'))
        cursor.execute(sql, val)
        con.commit()
        massage = "Success"
    else:
        massage = "Unsuccess"
    return jsonify(massage)


@app.route('/insert_history/', methods=['GET', 'POST'])
def insert_history():
    massage = ""
    if request.method == "POST":
        details = request.form
        sql = "INSERT INTO history (item,price,oderid,GID) VALUES (%s, %s, %s, %s)"
        val = (details['item'], details['price'],
               details['oderid'], details['GID'])
        cursor.execute(sql, val)
        con.commit()
        massage = "Success"
    elif request.method == "GET":
        body = json.loads(request.args.get('body'))
        sql = "INSERT INTO history (item,price,oderid,GID) VALUES ( %s, %s, %s, %s)"
        val = (body.get('id'), body.get(
            'item'), body.get('oderid'), body.get('GID'))
        cursor.execute(sql, val)
        con.commit()
        massage = "Success"
    else:
        massage = "Unsuccess"
    return jsonify(massage)


@app.route('/insert_statistics/', methods=['GET', 'POST'])
def insert_statistics():
    massage = ""
    if request.method == "POST":
        details = request.form
        sql = "INSERT INTO statistics (iid,uid) VALUES (%s, %s)"
        val = (details['iid'], details['uid'])
        cursor.execute(sql, val)
        con.commit()
        massage = "Success"
    elif request.method == "GET":
        body = json.loads(request.args.get('body'))
        sql = "INSERT INTO statistics (iid,uid) VALUES (%s, %s)"
        val = (body.get('iid'), body.get('uid'))
        cursor.execute(sql, val)
        con.commit()
        massage = "Success"
    else:
        massage = "Unsuccess"
    return jsonify(massage)


if __name__ == '__main__':
    app.run(host="0.0.0.0", port=8080)
