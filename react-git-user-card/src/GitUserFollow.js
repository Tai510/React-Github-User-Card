import React from 'react';
import axios from 'axios';
import GitList from './GitList';


class GitUserFollow extends React.Component {
    constructor() {
        super();
        this.state = {
            squad: [],
        }
    }

    componentDidMount() {
        axios
        .get('https://api.github.com/users/Tai510/followers') 
        .then(res => {
          this.setState({
            squad: res.data
          });
          console.log('Squad Value', this.state.squad)
        })
        .catch(err => console.log(err))
    }

    render() {
            return (
            <div>
                {this.state.squad.map(team => (
                    <GitList team={team} />
                ))}
            </div>
            )
    }
}

export default GitUserFollow;