import cv2
import numpy as np
import dlib
import pickle
face_detector = cv2.CascadeClassifier('AI/haarcascade_frontalface_default.xml')
detector = dlib.get_frontal_face_detector()
sp = dlib.shape_predictor('AI/shape_predictor_68_face_landmarks.dat')
model = dlib.face_recognition_model_v1('AI/dlib_face_recognition_resnet_model_v1.dat')
FACE_DESC, FACE_NAME = pickle.load(open('AI/trainset.pk', 'rb'))

def process(path_name):
    img = cv2.imread("static/%s.png"%path_name)
    dets = detector(img, 1)
    for k, d in enumerate(dets):
        shape = sp(img, d)
        face_desc0 = model.compute_face_descriptor(img, shape, 1)
        d = []
        for face_desc in FACE_DESC:
            d.append(np.linalg.norm(np.array(face_desc)-np.array(face_desc0)))
        d = np.array(d)
        idx = np.argmin(d)
        if d[idx] < 0.9:
            name = FACE_NAME[idx]
            print(name)
            return name
    return "Can't detection"