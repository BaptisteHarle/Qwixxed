const express = require('express');
const app = express();
const port = 3000;

app.listen(port, () => {
  console.log(`Server listening on port ${port}`);
});

const io = require('socket.io')(app);

io.on('connection', (socket) => {
  console.log('A user connected');
});

app.post('/lobbies', (req, res) => {
  // Generate a unique code for the lobby
  const code = generateLobbyCode();

  // Store the lobby data in memory
  lobbies[code] = {
    code: code,
    players: [],
  };

  res.send({ code: code });
});

app.post('/lobbies/:code/join', (req, res) => {
  const code = req.params.code;
  const lobby = lobbies[code];

  if (!lobby) {
    return res.status(404).send({ error: 'Lobby not found' });
  }

  // Add the player to the lobby
  lobby.players.push(req.body.player);

  res.send({ players: lobby.players });
});

