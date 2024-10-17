from flask import Flask, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "http://localhost:5173"}})

@app.route('/api/mensaje', methods=['GET'])
def get_message():
    return jsonify({"message": "¡Bienvenido a mi servicio web!"})

if __name__ == '__main__':
    app.run(debug=True)
