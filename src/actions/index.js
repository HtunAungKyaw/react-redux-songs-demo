import { SONG_SELECTED } from "./actiontypes";

//action creator
export const selectSong = (song) => {
  // Return an action
  return {
    type: SONG_SELECTED,
    payload: song,
  };
};
