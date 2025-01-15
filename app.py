from flask import Flask, render_template, request, jsonify
from flask_cors import CORS
import random
import string

app = Flask(__name__)
CORS(app)

# Serve the frontend
@app.route('/')
def home():
    return render_template('index.html')

# API endpoint for generating usernames
@app.route('/generate', methods=['POST'])
def generate():
    try:
        data = request.json
        include_numbers = data.get('include_numbers', True)
        include_special_chars = data.get('include_special_chars', True)
        username_length = data.get('username_length', 8)
        num_usernames = data.get('num_usernames', 1)

        def generate_username(include_numbers, include_special_chars, username_length):
            adjectives = ["Cool", "Happy", "Brave", "Shiny"]
            nouns = ["Tiger", "Dragon", "Eagle", "Wolf"]
            special_chars = "!@#$%^&*"
            username = random.choice(adjectives) + random.choice(nouns)

            if include_numbers:
                username += str(random.randint(10, 99))
            if include_special_chars:
                username += random.choice(special_chars)
            while len(username) < username_length:
                username += random.choice(string.ascii_letters)
            return username

        usernames = [
            generate_username(include_numbers, include_special_chars, username_length)
            for _ in range(num_usernames)
        ]

        return jsonify({"usernames": usernames}), 200
    except Exception as e:
        return jsonify({"error": str(e)}), 400

if __name__ == '__main__':
    app.run(debug=True)



