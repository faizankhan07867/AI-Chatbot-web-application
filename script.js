const chatBox = document.getElementById("chat-box");

function sendMessage() {
    const input = document.getElementById("user-input");
    const userText = input.value.trim();
    if (userText === "") return;

    addMessage(userText, "user");
    input.value = "";

    setTimeout(() => {
        const botReply = getBotResponse(userText);
        addMessage(botReply, "bot");
    }, 800);
}

function addMessage(text, sender) {
    const messageDiv = document.createElement("div");
    messageDiv.classList.add("message", sender);
    messageDiv.innerText = text;
    chatBox.appendChild(messageDiv);
    chatBox.scrollTop = chatBox.scrollHeight;
}

function getBotResponse(input) {
    input = input.toLowerCase();

    if (input.includes("hello") || input.includes("hi")) {
        return "Hello! How can I help you today?";
    }
    else if (input.includes("your name")) {
        return "I am your AI assistant.";
    }
    else if (input.includes("course")) {
        return "We offer Web Development, AI, and Data Science courses.";
    }
    else if (input.includes("bye")) {
        return "Goodbye! Have a great day.";
    }
    else {
        return "Sorry, I didn't understand that. Please try again.";
    }
}
