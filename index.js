const express = require('express');
const WebSocket = require('ws');
const fs = require('fs');
const Joi = require('joi');

// Define the message schema
const messageSchema = Joi.object({
    username: Joi.string().min(1).max(30).required(),
    message: Joi.string().min(1).max(500).required(),
});

// Load initial chat messages
const messages = JSON.parse(fs.readFileSync('./data/messages.json', 'utf8'));

const app = express();

const server = require('http').createServer(app);
const wss = new WebSocket.Server({ server });

app.get('/', (req, res) => {
    res.send('WebSocket Chat Server is running');
});

wss.on('connection', (ws) => {
    console.log('New client connected');

    // Send the current messages to the newly connected client
    ws.send(JSON.stringify({ type: 'history', data: messages }));

    ws.on('message', (message) => {
        let newMessage;

        try {
            newMessage = JSON.parse(message);
        } catch (err) {
            ws.send(JSON.stringify({ type: 'error', message: 'Invalid JSON format.' }));
            return;
        }

        // Validate the message
        const { error } = messageSchema.validate(newMessage);
        if (error) {
            ws.send(JSON.stringify({ type: 'error', message: `Validation error: ${error.details[0].message}` }));
            return;
        }

        newMessage.timestamp = new Date().toISOString();
        messages.push(newMessage);

        wss.clients.forEach((client) => {
            if (client.readyState === WebSocket.OPEN) {
                client.send(JSON.stringify({ type: 'message', data: newMessage }));
            }
        });
    });

    ws.on('close', () => {
        console.log('Client disconnected');
    });
    ws.on
});

const PORT = process.env.PORT || 8085;
server.listen(PORT, () => {
    console.log(`Server is listening on port ${PORT}`);
});
