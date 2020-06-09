import React from "react";

function ListItem({ descriptions, deleteSong }) {
  return (
    <tr>
      <td className="name">{descriptions.name}</td>
      <td className="artist">{descriptions.artist}</td>
      <td className="genre">{descriptions.genre}</td>
      <td className="rating">{descriptions.rating}</td>{" "}
      <td className="delete">
        <button onClick={() => deleteSong(descriptions.id)}>del</button>
      </td>
    </tr>
  );
}

export default ListItem;
