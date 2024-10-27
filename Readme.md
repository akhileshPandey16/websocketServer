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
- URL: [Websocket Server Chat](http://54.166.119.29:8085/)
- On initial client connection, the server should send the current list of messages ✅
- Server should be able to listen to new messages and append then to the existing message list ✅
- Server should broadcast new messages to any listeners ✅
- Multiple clients can connect to the chat server ✅
- Include Infrastructure as Code (IaC) scripts or step by step instruction you used for deploying your service to AWS ✅
  - We're using a combination of github actions and ec2 server
  - [Attached an image of architecture below.](https://github.com/akhileshPandey16/websocketServer/edit/main/Readme.md#architecture)
- Prioritize code readability and maintainability.✅

## Instructions to run:

```
// To connect from terminal or client, multiple clients can connect to server at the same time, I do this using split terminal windows.
wscat -c ws://54.166.119.29:8085
```

<img width="1262" alt="image" src="https://github.com/user-attachments/assets/efbb75c3-df43-4589-9cd1-e2213ef0506e">




```
// Validation added so each message should contain a username and password
// Upon connection, user can try sending messages in the following format.
{
  "username" : "john_doe",
  "message": "hello, world!"
}

// Exmaples of incorrect message,
> foo
< {"type":"error","message":"Invalid JSON format."}

> { "username": "john"}
< {"type":"error","message":"Validation error: \"message\" is required"}

```

## Architecture
<img width="1374" alt="image" src="https://github.com/user-attachments/assets/d2e0a817-14c4-4e73-99f6-8b8ec6783a73">


