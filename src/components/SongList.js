import React from "react";
import ListItem from "./ListItem";

function SongList(props) {
  const listItems = props.songs.map((song) => (
    <ListItem
      key={song.id}
      descriptions={song}
      className="list-item"
      deleteSong={props.deleteSong}
    />
  ));

  return (
    <table style={{ width: "90%" }}>
      <tr className="song-header">
        <th className="song-row__item">Song</th>
        <th className="song-row__item">Artist</th>
        <th className="song-row__item">Genre</th>
        <th className="song-row__item">Rating</th>
        <th className="song-row__item"></th>
      </tr>
      {listItems}
    </table>
  );
}
export default SongList;
