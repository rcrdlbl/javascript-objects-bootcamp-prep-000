var playlist = {
  deafheaven : 'Baby Blue'
};

function updatePlaylist(playlist, artist, title) {
  playlist[artist] = title;
  return playlist;
}