import React from "react";

class SongForm extends React.Component {
  constructor() {
    super();
    this.state = {
      id: 5,
      name: "",
      artist: "",
      genre: "",
      rating: 5,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleClick = this.handleClick.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  }

  handleClick() {
    this.props.addSong(this.state);
  }

  render() {
    return (
      <div className="form">
        <input
          name="name"
          placeholder="name"
          value={this.state.name}
          onChange={this.handleChange}
        ></input>
        <input
          name="artist"
          placeholder="Artist"
          value={this.state.artist}
          onChange={this.handleChange}
        ></input>
        <label>Genre:</label>
        <select
          value={this.state.genre}
          onChange={this.handleChange}
          name="genre"
        >
          <option value="">Pick one</option>
          <option value="Rock">Rock</option>
          <option value="Indie">Indie</option>
          <option value="Punk">Punk</option>
          <option value="Pop">Pop</option>
          <option value="Blues">Blues</option>
          <option value="Reggae">Reggae</option>
          <option value="Jazz">Jazz</option>
          <option value="Classic">Classic</option>
        </select>
        <label>Rating:</label>
        <select
          value={this.state.rating}
          onChange={this.handleChange}
          name="rating"
        >
          <option value={1}>1</option>
          <option value={2}>2</option>
          <option value={3}>3</option>
          <option value={4}>4</option>
          <option value={5}>5</option>
        </select>
        <button onClick={this.handleClick}>Request song</button>
      </div>
    );
  }
}

export default SongForm;
