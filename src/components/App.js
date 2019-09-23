import React from "react";
import "../stylesheets/App.scss";
import logo from "../images/logo.png";
import getDataFromApi from "../services/Api";
import CharacterList from "./CharacterList";

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      characters: []
      // filterInputValue:""
    };
  }

  componentDidMount() {
    getDataFromApi().then(characters => this.setState({ characters }));
  }

  // filterByName(id){

  // }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <CharacterList
          characters={this.state.characters}
          // action={this.filterByName}
        />
      </div>
    );
  }
}

export default App;
