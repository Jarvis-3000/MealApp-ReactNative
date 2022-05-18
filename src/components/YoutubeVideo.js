import React, { useState, useCallback } from "react";
import YoutubePlayer from "react-native-youtube-iframe";

export default function YoutubeVideo({ link }) {
  const [playing, setPlaying] = useState(false);
  const youtubeLink = link.split("=")[1];

  const onStateChange = useCallback((state) => {
    if (state === "ended") {
      setPlaying(false);
      Alert.alert("video has finished playing!");
    }
  }, []);

  return (
    <YoutubePlayer
      height={220}
      play={playing}
      videoId={youtubeLink}
      onChangeState={onStateChange}
    />
  );
}
