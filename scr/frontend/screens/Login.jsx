import React from 'react';
import { View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import CreateLobbyButton from '../components/CreateLobbyButton';
import JoinLobbyButton from '../components/JoinLobbyButton';

const Login = () => {
  const navigation = useNavigation();

  const onLobbyCreated = (lobby) => {
    navigation.navigate('Game', { lobby });
  };

  const onLobbyJoined = (lobby) => {
    navigation.navigate('Game', { lobby });
  };

  return (
    <View>
      <CreateLobbyButton onLobbyCreated={onLobbyCreated} />
      <JoinLobbyButton onLobbyCreated={onLobbyJoined} />
    </View>
  );
};

export default Login;