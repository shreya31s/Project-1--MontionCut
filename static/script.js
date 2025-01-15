// script.js
async function generateUsernames() {
    const numUsernames = document.getElementById('numUsernames').value;
    const usernameLength = document.getElementById('usernameLength').value;
    const includeNumbers = document.getElementById('includeNumbers').checked;
    const includeSpecialChars = document.getElementById('includeSpecialChars').checked;

    // Clear output
    const outputDiv = document.getElementById('output');
    outputDiv.innerHTML = "<p>Generating usernames...</p>";

    try {
        const response = await fetch('/generate', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
                num_usernames: parseInt(numUsernames),
                include_numbers: includeNumbers,
                include_special_chars: includeSpecialChars,
                username_length: parseInt(usernameLength),
            }),
        });

        if (!response.ok) throw new Error("Error generating usernames.");

        const data = await response.json();
        const usernames = data.usernames;

        // Display usernames
        outputDiv.innerHTML = `
            <h3>Generated Usernames:</h3>
            <pre>${usernames.join('\n')}</pre>
        `;
    } catch (error) {
        outputDiv.innerHTML = `<p style="color: red;">Error: ${error.message}</p>`;
    }
}




// Event listener for saving username
saveBtn.addEventListener("click", () => {
    fetch('/save', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username: currentUsername })
    })
        .then(response => response.json())
        .then(data => {
            alert(data.message);
            saveBtn.disabled = true; // Disable save button after saving
        })
        .catch(error => console.error("Error:", error));
});

