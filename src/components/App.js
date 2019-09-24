import React from "react";
import { Route, Switch } from "react-router-dom";
import "../stylesheets/App.scss";
import getDataFromApi from "../services/Api";
import Header from "./Header";
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
    this.filterBySpecie = this.filterBySpecie.bind(this);
  }

  componentDidMount() {
    getDataFromApi().then(characters => this.setState({ characters }));
  }

  filterByName(inputValue) {
    this.setState({ filterValue: inputValue });
  }

  filterBySpecie(radioValue) {
    const characters = this.state.characters.map(character => {
      character.checked = true;
      return { ...character, checked: character.species.toLowerCase() === radioValue.toLowerCase() ? character.checked : !character.checked };
    });
    this.setState({ characters });
  }

  renderHome() {
    const filteredCharacters = this.state.characters.filter(character => character.name.toLowerCase().includes(this.state.filterValue.toLowerCase())).filter(character => character.checked === true);

    return (
      <main className="main">
        <Filters actionInput={this.filterByName} actionCheckbox={this.filterBySpecie} />
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
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path="/" render={this.renderHome} />
          <Route path="/character/:id" render={this.renderCharacter} />
        </Switch>
      </div>
    );
  }
}

export default App;
