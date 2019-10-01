import React from 'react';
import './App.css';
import GitUserCard from './GitUserCard';
// import axios from 'axios';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    this.fetchUsers();
  }

  fetchUsers = () => {
    fetch('https://api.github.com/users/Tai510')
      .then(res => {
        this.setState({
          cards: res.json()
        });
        console.log(this.state.cards)
      })
      .catch(err => console.log(err))
  }

  render() {
    return (
      <div>
        <GitUserCard cards={this.state.cards} />
      </div>
    );
  }
}





export default App;
