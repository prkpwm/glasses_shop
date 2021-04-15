from flask import Flask,render_template, request
from werkzeug.utils import secure_filename
import AI.faceshape
face_shapes = ['squared shape.','round shape.','triangle shape.','diamond shape.','rectangular.','oval.']
glasses_recomments = ["Oval, Round and Large","Rectangle, Square and Oval","Rectangle, Oval and Horn","Rectangle, Oval and Horn","Rectangle, Square and Oval","Rectangle, Oval, Square, Round, Large and Horn"]

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html") 

@app.route('/upload')
def upload():
   return render_template('upload.html')
	
@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
   if request.method == 'POST':
      f = request.files['file']
      f.save(secure_filename("img.png"))
      fs = AI.faceshape.process()
      for i,face_shape in enumerate(face_shapes):
         if fs==face_shape:
            return "<h1> Your face shape is "+face_shape+"</h1></br><h3> Glasses recommended for you is  "+glasses_recomments[i]+"</h3>"


if __name__ == '__main__':
    app.run(host='0.0.0.0',port=8080)