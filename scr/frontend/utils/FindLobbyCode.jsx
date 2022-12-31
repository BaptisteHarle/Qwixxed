const lobbies = [];

export const findLobbyByCode = (code) => {
  return lobbies.find((lobby) => lobby.code === code);
};