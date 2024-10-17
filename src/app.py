from flask import Flask, jsonify
app = Flask(__name__)
@app.route('/api/mensaje', methods=['GET'])
def get_message():
    return jsonify({"message": "¡Bienvenido a la Pagina UAC!"})
if __name__ == '__main__':

    app.run(debug=True)