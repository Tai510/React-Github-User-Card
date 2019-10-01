import React from 'react';

function GitUserCard(props) {
    return (
<div className='user-card'>
    <div className='gh-Header'>
      <h1>Git Hub Profile</h1>
      <img src={props.cards.avatar_url}></img>
    </div>
    <div className='info-section'>
      <h2>User Name: <span>{props.cards.login}</span></h2>
      <h3>Git Hub Link: <span className='gh-link'>{props.cards.url}</span></h3>
      <h3>Followers: <span className='follows'>{props.cards.followers}</span></h3>
      <h3>Following: <span className='follows'>{props.cards.following}</span></h3>
    </div> {/* info-section end */}
</div> /* user-card end */
    )
}

export default GitUserCard
 