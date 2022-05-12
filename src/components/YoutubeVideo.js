import React, { useState, useEffect, useCallback } from "react";
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

  const togglePlaying = useCallback(() => {
    setPlaying((prev) => !prev);
  }, []);

  return (
    <YoutubePlayer
      height={300}
      play={playing}
      videoId={youtubeLink}
      onChangeState={onStateChange}
    />
  );
}
