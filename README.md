# AI Chat Assistant with Email Summary

## Project Overview
This project is an AI-powered chat assistant that allows users to interact with an AI model and receive a summary of their conversation via email. It incorporates authentication, speech-to-text functionality, and a clean UI for a seamless user experience.

## Features
- **AI Chat Assistant**: Uses OpenAI API to generate responses.
- **User Authentication**: Secure login required before chatting.
- **Email Summary**: Users can email themselves a summary of their chat via Email.js.
- **Speech-to-Text**: Allows users to speak instead of typing messages.
- **Responsive UI**: Simple and intuitive chat interface.

## Tech Stack
- **Frontend**: HTML, CSS, JavaScript
- **APIs**: OpenAI API, Email.js
- **Authentication**: Firebase (or localStorage-based auth)

##  How to Test the Chat Assistant
### 1 Access the Application
If testing locally, follow the instructions below.

### 2️ Clone the Repository
If you wish to test the project locally, clone it using:
```bash
git clone https://github.com/YOUR_USERNAME/ai-chat-assistant.git
cd ai-chat-assistant
```

### 3️ Open the Application
Simply open `index.html` in a browser or start a local server:
```bash
npx live-server
```
Alternatively, you can open the `index.html` file directly in your browser.

### 4️ Sign In to Access the Chat
- If authentication is enabled, sign in using demo credentials:
  ```
  Username: testuser
  Password: test1234
  ```
- If Firebase authentication is used, create an account to log in.

### 5️ Interact with the AI Chat
- Type a message in the input field and press **Enter** or click **Send**.
- The AI will generate a response.

### 6️ Test the Speech-to-Text Feature
- Click the **microphone** button.
- Speak into your microphone.
- Your speech will be converted into text in the input field.

### 7️ Email the Chat Summary
- Click the **"Email Chat"** button.
- Enter your email address and send the summary.
- Check your inbox for the conversation summary.

## Future Enhancements
- Add voice responses for a more interactive experience.
- Improve AI response handling and contextual memory.
- Deploy the project online for public access.

## Contributors
- **Larry**
- **Wanjiru** 

## License
This project is licensed under the MIT License.

 **Happy Testing!**

