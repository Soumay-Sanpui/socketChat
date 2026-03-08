# Real-Time Chat Application 🚀

This is a simple real-time chat application built using Express.js, Socket.IO, and React. The application allows users to join chat rooms and exchange messages in real-time.

## Features ✨

- **Joining Rooms**: Users can join different chat rooms by entering a room ID.
- **Real-Time Communication**: Messages sent by users are immediately broadcasted to other users in the same room.
- **Live Updates**: The chat interface automatically updates with new messages without needing to refresh the page.
- **User Identification**: Each message includes the username of the sender and a timestamp.

## Technologies Used 💻

- **Frontend**: React for the user interface.
- **Backend**: Express.js for the server-side logic.
- **Real-Time Communication**: Socket.IO for real-time bidirectional communication.
- **Styling**: CSS for basic styling.
- **Environment Variables**: dotenv for managing environment variables.

## Backend Implementation 🛠️

The backend server is implemented using Express.js and Socket.IO. It handles WebSocket connections, manages chat rooms, and broadcasts messages to users.

- **Express Setup**: Configures an Express application and sets up CORS to allow cross-origin requests.
- **Socket.IO Integration**: Initializes a Socket.IO server instance and handles various events such as user connection, joining rooms, sending messages, and disconnection.

## Frontend Implementation 🎨

The frontend is built using React and communicates with the backend server via WebSocket connections.

- **Component Structure**: The main App component manages the UI state and handles user interactions.
- **Chat Component**: Displays the chat interface, allows users to send messages, and renders received messages in real-time using the ScrollToBottom component.
- **State Management**: Utilizes React hooks (useState, useEffect) for managing state and handling side effects.
