import React, { Component } from "react";
import "./App.css";

import { CardList } from './components/card-list/card-list.component';
import { SearchBox } from './components/search-box/search-box.component';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { monsters: [], searchField: '' };
  }
  componentWillMount(){
    fetch('https://jsonplaceholder.typicode.com/users')
        .then( response => { return response.json() } )
        .then( users => { this.setState({monsters: users })} );
  }

  handleChange = (e) => {
    this.setState({searchField: e.target.value});
  }

  render() {
    const { monsters, searchField } = this.state;
    let FilteredMonsters = monsters.filter(monster => monster.name.toLowerCase().includes(searchField.toLowerCase()));
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox placeholder='Search Monsters' handleChange={this.handleChange} />
        <CardList monsters={FilteredMonsters} />
      </div>
    );
  }
}

export default App;
