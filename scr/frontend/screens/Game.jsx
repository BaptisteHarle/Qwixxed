import React from 'react';
import { View } from 'react-native';
import { useRoute } from '@react-navigation/native';
import Board from '../components/Board';

const Game = () => {
  const route = useRoute();
  const lobby = route.params.lobby;
  const { playerCount, playerNames } = lobby;

  // Render the game boards for each player
  return (
    <View>
      {playerNames.map((playerName, index) => (
        <Board key={index} playerName={playerName} />
      ))}
    </View>
  );
};

export default Game;