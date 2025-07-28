from flask import Flask, jsonify, request
from flask_cors import CORS
from models.services import get_db, init_db
import os
from dotenv import load_dotenv

load_dotenv()
app = Flask(__name__)
CORS(app)

# Initialize DB with sample data
init_db()

@app.route("/api/services", methods=["GET"])
def get_services():
    db = get_db()
    services = list(db.services.find({}, {"_id": 0}))
    return jsonify(services)

@app.route("/api/contact", methods=["POST"])
def contact():
    db = get_db()
    data = request.json
    db.contacts.insert_one({
        "name": data.get("name"),
        "email": data.get("email"),
        "message": data.get("message")
    })
    return jsonify({"message": "Contact form submitted!"})

if __name__ == "__main__":
    app.run(host="0.0.0.0", port=int(os.getenv("PORT", 5000)), debug=True)