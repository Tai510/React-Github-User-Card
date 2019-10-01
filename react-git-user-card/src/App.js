import React from 'react';
import './App.css';
import GitUserCard from './GitUserCard';
import axios from 'axios';
import GitUserFollow from './GitUserFollow';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      cards: []
    }
  }

  componentDidMount() {
    axios
    .get('https://api.github.com/users/Tai510') 
    .then(res => {
      this.setState({
        cards: res.data
      });
      console.log('Cards Value', this.state.cards)
    })
    .catch(err => console.log(err))
}
 

  render() {
    return (
      <div>
            <GitUserCard cards={this.state.cards} />
            <GitUserFollow />
      </div>
    );
  }
}





export default App;
