import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import logo from "../images/logo.png";
import getDataFromApi from "../services/Api";
import CharacterList from "./CharacterList";
import Filters from "./Filters";
import CharacterDetail from "./CharacterDetail";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: [],
      filterValue: ""
    };
    this.filterByName = this.filterByName.bind(this);
    this.renderHome = this.renderHome.bind(this);
    this.renderCharacter = this.renderCharacter.bind(this);
  }

  componentDidMount() {
    getDataFromApi().then(characters => this.setState({ characters }));
  }

  filterByName(value) {
    this.setState({ filterValue: value });
  }

  renderHome() {
    const filteredCharacters = this.state.characters.filter(character => character.name.toLowerCase().includes(this.state.filterValue.toLowerCase()));
    return (
      <main className="main">
        <Filters action={this.filterByName} />
        <CharacterList characters={filteredCharacters} />
      </main>
    );
  }

  renderCharacter(props) {
    let selectedCharacter;
    for (const character of this.state.characters) {
      if (character.id === parseInt(props.match.params.id)) {
        selectedCharacter = character;
      }
    }
    return <CharacterDetail character={selectedCharacter} />;
  }

  render() {
    if (this.state.characters === []) {
      return <p>"Loading"</p>;
    } else {
      return (
        <div className="App">
          <header className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
          </header>
          <Switch>
            <Route exact path="/" render={this.renderHome} />
            <Route path="/character/:id" render={this.renderCharacter} />
          </Switch>
        </div>
      );
    }
  }
}

export default App;
