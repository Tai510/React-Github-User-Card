import React from 'react';

function GitList(props) {
    return (
    <div className='user-card'>

                    <div className='gh-Header'>
                    <h1>Git Hub Profile</h1>
                    <img src={props.team.avatar_url}></img>
                    </div>
                    <div className='info-section'>
                    <h2>User Name: <span>{props.team.login}</span></h2>
                    <h3>Git Hub Link: <span className='gh-link'>{props.team.url}</span></h3>
                    <h3>Followers: <span className='follows'>{props.team.followers}</span></h3>
                    <h3>Following: <span className='follows'>{props.team.following}</span></h3>
                    </div> {/* info-section end */}
    </div> /* user-card end */
)
}

export default GitList;