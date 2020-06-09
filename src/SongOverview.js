import React from "react";
import SongForm from "./components/SongForm";
import SongList from "./components/SongList";

class SongOverview extends React.Component {
  constructor() {
    super();
    this.state = {
      songs: [],
    };
  }

  addSong = async (song) => {
    try {
      const postRes = await fetch(
        "https://lil-playlist-emma.firebaseio.com/database/songs.json",
        {
          method: "POST",
          body: JSON.stringify(song),
        }
      )
        .then((results) => results.json())
        .then((results) => console.log(results));
      return postRes;
    } catch (error) {
      console.log(error);
    }
  };

  componentDidMount() {
    fetch("https://lil-playlist-emma.firebaseio.com/database/songs.json")
      .then((Response) => Response.json())
      .then((data) =>
        Object.keys(data).map((key) => ({
          id: key,
          name: data[key].name,
          artist: data[key].artist,
          genre: data[key].genre,
          rating: data[key].rating,
        }))
      )
      .then((data) => {
        const newList = data.map((song) => song);
        console.log("songsList", newList);
        return this.setState({ songs: newList });
      });
  }

  deleteSong = async (id) => {
    try {
      const response = await fetch(
        `https://lil-playlist-emma.firebaseio.com/database/songs/${id}.json`,
        {
          method: "DELETE",
          redirect: "follow",
        }
      );
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <div>
        <SongForm addSong={this.addSong} />
        <SongList songs={this.state.songs} deleteSong={this.deleteSong} />
      </div>
    );
  }
}

export default SongOverview;
