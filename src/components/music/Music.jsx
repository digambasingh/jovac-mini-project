import React, { useRef, useState } from 'react';
import './music.css';

const Music = () => {
  const audioPlayer = useRef(null);
  const [currentSong, setCurrentSong] = useState('../public/songs/Baby doll.mp3');
  const [volume, setVolume] = useState(0.5);

  const songs = [
    { label: 'Athens', value: '../public/songs/Baby doll.mp3' },
    { label: 'Berlin', value: '../public/songs/Memories-of-Spring.mp3' },
    { label: 'Brussels', value: '../public/songs/Ghostrifter-Official-Purple-Dream.mp3' },
    { label: 'Mint', value: '../public/songs/Kaanta Laga.mp3' }
  ];

  const playAudio = () => {
    audioPlayer.current.play();
  };

  const pauseAudio = () => {
    audioPlayer.current.pause();
  };

  const volumeUp = () => {
    setVolume(Math.min(volume + 0.1, 1));
    audioPlayer.current.volume = volume;
  };

  const volumeDown = () => {
    setVolume(Math.max(volume - 0.1, 0));
    audioPlayer.current.volume = volume;
  };

  const selectSong = (song) => {
    setCurrentSong(song);
    audioPlayer.current.src = song;
    playAudio();
  };

  const nextSong = () => {
    const currentIndex = songs.findIndex((song) => song.value === currentSong);
    const nextIndex = (currentIndex + 1) % songs.length;
    selectSong(songs[nextIndex].value);
  };

  const previousSong = () => {
    const currentIndex = songs.findIndex((song) => song.value === currentSong);
    const previousIndex = (currentIndex - 1 + songs.length) % songs.length;
    selectSong(songs[previousIndex].value);
  };

  return (
    <div className="audio-player-area">
      <header className="section-header">
        <h2>Focus Sounds</h2>
      </header>

      <div className="audio-player">
        <audio ref={audioPlayer} src={currentSong} controls  />
        <button onClick={playAudio} className="control-button">Play</button>
        <button onClick={pauseAudio} className="control-button">Pause</button>
        <button onClick={volumeUp} className="control-button">Volume Up</button>
        <button onClick={volumeDown} className="control-button">Volume Down</button>
        <button onClick={previousSong} className="control-button">Previous</button>
        <button onClick={nextSong} className="control-button">Next</button>
      </div>
      <div className="song-selector">
        <select onChange={(e) => selectSong(e.target.value)} aria-label="Select focus sound">
          <option value="" disabled>Select a song</option>
          {songs.map((song, index) => (
            <option key={index} value={song.value}>{song.label}</option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default Music;
