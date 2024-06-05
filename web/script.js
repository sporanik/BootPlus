// document.getElementById('chatbotButton').addEventListener('click', function() {
//     document.getElementById('chatbot').style.display = 'flex';
// });

// document.getElementById('closeButton').addEventListener('click', function() {
//     document.getElementById('chatbot').style.display = 'none';
// });

document.getElementById('sendButton').addEventListener('click', function() {
    const userInput = document.getElementById('userInput').value;
    if (userInput.trim() !== "") {
        displayMessage(userInput, 'user-message');
        getBotResponse(userInput);
        document.getElementById('userInput').value = '';
    }
});

// document.getElementById('userInput').addEventListener('keypress', function(e) {
//     if (e.key === 'Enter') {
//         document.getElementById('sendButton').click();
//     }
// });

function displayMessage(message, className) {
    const messageContainer = document.getElementById('messages');
    const messageElement = document.createElement('p');
    messageElement.textContent = message;
    messageElement.className = className;
    messageContainer.appendChild(messageElement);
    messageContainer.scrollTop = messageContainer.scrollHeight;
}

async function getBotResponse(userInput) {
    // Placeholder for future integration with Microsoft AI services
    // For now, we will use a simple keyword-based response
    let response = "I'm sorry, I don't understand that.";

    // Simple keyword-based responses
    if (userInput.toLowerCase().includes('hello') || userInput.toLowerCase().includes('hi')) {
        response = "Hello! How can I assist you?";
    } else if (userInput.toLowerCase().includes('help')) {
        response = "Sure, I'm here to help! What do you need assistance with?";
    } else if (userInput.toLowerCase().includes('price')) {
        response = "Our prices vary depending on the product. Can you specify which product you're interested in?";
    } else if (userInput.toLowerCase().includes('bye')) {
        response = "Goodbye! Have a great day!";
    }

    // Simulating an API call
    await new Promise(resolve => setTimeout(resolve, 500)); // Simulate a delay

    displayMessage(response, 'bot-message');
}
