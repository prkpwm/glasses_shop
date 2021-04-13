from flask import Flask,render_template, request
from werkzeug.utils import secure_filename
#import AI.faceshape

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html") 

"""
@app.route('/upload')
def upload():
   return render_template('upload.html')
	
@app.route('/uploader', methods = ['GET', 'POST'])
def upload_file():
   if request.method == 'POST':
      f = request.files['file']
      f.save(secure_filename("img.png"))
      return AI.faceshape.process()
"""

if __name__ == '__main__':
    app.run()