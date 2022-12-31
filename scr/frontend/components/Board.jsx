import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet } from 'react-native';

const NUMBERS_PER_ROW = 5;
const MAX_VALUE = 12;

const Board = () => {
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [jokerMarked, setJokerMarked] = useState(false);

  const handleNumberPress = number => {
    if (selectedNumbers.includes(number)) {
      setSelectedNumbers(selectedNumbers.filter(n => n !== number));
    } else {
      setSelectedNumbers([...selectedNumbers, number]);
    }
  };

  const handleJokerPress = () => {
    setJokerMarked(!jokerMarked);
  };

  return (
    <View style={styles.container}>
      {[...Array(MAX_VALUE + 1).keys()].map(number => (
        <TouchableOpacity
          key={number}
          style={[
            styles.number,
            selectedNumbers.includes(number) && styles.selectedNumber,
          ]}
          onPress={() => handleNumberPress(number)}
        >
          <Text style={styles.numberText}>{number}</Text>
        </TouchableOpacity>
      ))}
      <TouchableOpacity
        style={[styles.joker, jokerMarked && styles.markedJoker]}
        onPress={handleJokerPress}
      >
        <Text style={styles.jokerText}>JOKER</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    flexWrap: 'wrap',
  },
  number: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  selectedNumber: {
    backgroundColor: 'red',
  },
  numberText: {
    fontSize: 20,
  },
  joker: {
    width: 60,
    height: 60,
    borderWidth: 1,
    borderColor: 'black',
    alignItems: 'center',
    justifyContent: 'center',
  },
  markedJoker: {
    backgroundColor: 'red',
  },
  jokerText: {
    fontSize: 20,
  },
});

export default Board;
