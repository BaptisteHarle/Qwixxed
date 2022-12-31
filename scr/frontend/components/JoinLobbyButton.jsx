import React, { useState } from 'react';
import { View, Text, Button, TextInput } from 'react-native';
import { findLobbyByCode } from '../utils';

const JoinLobbyButton = ({ onLobbyCreated }) => {
  const [playerCount, setPlayerCount] = useState(0);
  const [playerNames, setPlayerNames] = useState([]);
  const [lobbyCode, setLobbyCode] = useState('');

  const joinLobby = () => {
    const lobby = findLobbyByCode(lobbyCode);
    onLobbyCreated(lobby);
  };

  return (
    <View>
      <Text>Enter number of players:</Text>
      <TextInput
        keyboardType="numeric"
        value={playerCount}
        onChangeText={setPlayerCount}
      />
      {Array(playerCount)
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
      <Text>Enter lobby code:</Text>
      <TextInput
        value={lobbyCode}
        onChangeText={setLobbyCode}
      />
      <Button title="Join Lobby" onPress={joinLobby} />
    </View>
  );
};

export default JoinLobbyButton;
