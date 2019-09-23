import React from "react";
import "../stylesheets/App.scss";
import logo from "../images/logo.png";
import getDataFromApi from "../services/Api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      filterValue: ""
    };
    this.filterByName = this.filterByName.bind(this);
  }

  componentDidMount() {
    getDataFromApi().then(characters => this.setState({ characters }));
  }

  filterByName(value) {
    this.setState({ filterValue: value });
  }

  render() {
    const filteredCharacters = this.state.characters.filter(character => character.name.toLowerCase().includes(this.state.filterValue.toLowerCase()));
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Filters action={this.filterByName} />
        <CharacterList characters={filteredCharacters} />
      </div>
    );
  }
}

export default App;
