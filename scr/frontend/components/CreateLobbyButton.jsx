import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { generateLobbyCode } from '../utils';

const CreateLobbyButton = ({ onLobbyCreated }) => {
  const [players, setPlayers] = useState(0);
  const [playerNames, setPlayerNames] = useState([]);

  const createLobby = () => {
    const lobbyCode = generateLobbyCode();
    const lobby = {
      code: lobbyCode,
      players,
      playerNames,
    };
    onLobbyCreated(lobby);
  };

  return (
    <View>
      <Text>Enter number of players:</Text>
      <TextInput
        keyboardType="numeric"
        value={players}
        onChangeText={setPlayers}
      />
      {Array(players)
        .fill(null)
        .map((_, index) => (
          <View key={index}>
            <Text>Enter player name:</Text>
            <TextInput
              value={playerNames[index]}
              onChangeText={(text) => setPlayerNames((prev) => [
                ...prev.slice(0, index),
                text,
                ...prev.slice(index + 1),
              ])}
            />
          </View>
        ))}
      <Button title="Create Lobby" onPress={createLobby} />
    </View>
  );
};

export default CreateLobbyButton;
