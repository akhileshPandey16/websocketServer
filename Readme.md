# WebSocket Chat Server with AWS Deployment

## Overview
Create a WebSocket-based chat server that supports reading and writing messages in a chat room. The server should initialize the chat room with pre-existing static JSON data representing messages. This project should be deployed to AWS, and the deployment process should be automated.

## Assets

Preload the Chatroom with this data
```json
[
  { "username": "Alice", "message": "Hello!", "timestamp": "2024-10-20T12:30:00Z" },
  { "username": "Bob", "message": "Hi Alice!", "timestamp": "2024-10-20T12:31:00Z" }
]

```

## Deliverables
- Repo should contain a README with the URL to the websocket API and instructions on how a client app can connect and send/read messages from the API
- URL: {{}} -- In progress
- On initial client connection, the server should send the current list of messages ✅
- Server should be able to listen to new messages and append then to the existing message list ✅
- Server should broadcast new messages to any listeners ✅
- Multiple clients can connect to the chat server ✅
- Include Infrastructure as Code (IaC) scripts or step by step instruction you used for deploying your service to AWS -- In progress
- Prioritize code readability and maintainability.✅