# from flask import Flask, request
# from flask_cors import CORS
# import pandas as pd
# import os

# app = Flask(__name__)

# CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

# app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB

# @app.route('/xls_data', methods=['POST'])
# def upload_file():

#     if 'file' not in request.files:
#         errorMsg = "No file found !"
#         return request

#     file = request.files['file']

#     if file.filename == '':
#         errorMsg = "No selected file !"
#         return request
    
#     if file:
#         file_path = os.path.join('uploads', file.filename)
#         file.save(file_path)

#         # Extract data from Excel file
#         df = pd.read_excel(file_path)
#         data = df.to_dict()

#         return data
#         # return jsonify({'data': data})

# if __name__ == '__main__':
#     app.run(debug=True)

from flask import Flask, request, jsonify
from flask_cors import CORS
from werkzeug.utils import secure_filename
import pandas as pd

app = Flask(__name__)

CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

app.config['MAX_CONTENT_LENGTH'] = 16 * 1024 * 1024  # 16MB
ALLOWED_EXTENSIONS = {'csv'}

def allowed_file(filename):
    return '.' in filename and filename.rsplit('.', 1)[1].lower() in ALLOWED_EXTENSIONS

@app.route('/xls_data', methods=['POST'])
def upload_file():
    if 'file' not in request.files:
        return jsonify({'error': 'No file part'}), 400

    file = request.files['file']

    if file.filename == '':
        return jsonify({'error': 'No selected file'}), 400

    if file and allowed_file(file.filename):
        filename = secure_filename(file.filename)
        file.save(filename)

        # Read the CSV file content using pandas
        try:
            df = pd.read_csv(filename)
            data = df.to_dict(orient='records')
            return jsonify({'data': data})
        except Exception as e:
            return jsonify({'error': str(e)}), 500
    else:
        return jsonify({'error': 'Invalid file type'}), 400

if __name__ == '__main__':
    app.run(debug=True)