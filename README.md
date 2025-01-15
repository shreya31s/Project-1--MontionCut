# Project-1

# Random Username Generator

The Random Username Generator is a web-based application that allows users to create unique usernames for social media platforms, gaming profiles, or other online accounts. This tool is highly customizable, letting users set parameters such as the number of usernames, their length, and whether to include special characters and numbers. The application is built using Flask for the backend and HTML, CSS, and JavaScript for the frontend.

### Project overview

The project aims to simplify the process of generating creative usernames that suit different platforms. Instead of brainstorming or relying on generic tools, users can customize their username preferences and generate multiple options instantly.

### Features

- Customizable Parameters: Users can define:
  - The number of usernames to generate.
  - The length of each username.
  - Whether to include numbers or special characters.
- User-Friendly Interface: The web interface is clean, responsive, and easy to navigate.
- Real-Time Output: Users receive their generated usernames instantly upon submission.
- Cross-Origin Support: The backend supports API requests across different origins using Flask-CORS.

### Project structure

``` Random-Username-Generator/
├── static/                 # Static assets (CSS, JS, Images)
│   ├── styles.css          # Styling for the frontend
│   ├── script.js           # Frontend logic for username generation
├── templates/              # HTML templates for the Flask app
│   ├── index.html          # The main webpage
├── app.py                  # Flask backend
├── requirements.txt        # Python dependencies
├── README.md               # Project documentation
└── .gitignore              # Ignore unnecessary files in Git
```

### Screenshots


### How it works

1. Frontend:
   - Users interact with a simple webpage where they specify parameters for generating usernames.
   - JavaScript captures these inputs and sends them to the Flask backend.

2. Backend:
   - The Flask server processes the request, generates usernames based on the parameters, and returns the results as a JSON response.

3. Display:
   - The frontend displays the generated usernames in a user-friendly list format.


### Technologies Used


