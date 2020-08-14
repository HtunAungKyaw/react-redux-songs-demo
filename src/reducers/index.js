import { SONG_SELECTED } from "../actions/actiontypes";
import { combineReducers } from "redux";
const songsReducer = () => {
  return [
    {
      title: "Rain On Me",
      duration: "3:08",
      artists: "Lady Gaga,Ariana Grande",
    },
    {
      title: "In Your Eyes",
      duration: "4:00",
      artists: "The Weeknd",
    },
    {
      title: "Give Me Everything",
      duration: "4:12",
      artists: "Pitbull, Ne-Yo",
    },
    {
      title: "Heartche Mediaction",
      duration: "3:30",
      artists: "Jon Pardi",
    },
  ];
};

const initialSelectedSong = null;
const selectedSongReducer = (selectedSong = initialSelectedSong, action) => {
  const { type, payload } = action;
  switch (type) {
    case SONG_SELECTED:
      return {
        ...payload,
      };
    default:
      return selectedSong;
  }
};
export default combineReducers({
  songs: songsReducer,
  selectedSong: selectedSongReducer,
});
