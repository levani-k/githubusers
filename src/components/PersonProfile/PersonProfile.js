import React from 'react'
import './PersonProfile.css'
import Followers from './Followers/Followers'
import Following from './Following/Following'
import Starred from './Starred/Starred'
import Repositories from './Repositories/Repositories'
import Organizations from './Organizations/Organizations'


const PersonProfile = ({ state, goToMainPage, display_followers_following_starred, viewProfile }) => {
    return (
        <div>
          <button className="button" onClick={goToMainPage}><span>Go Back </span></button>
          <div className='wholeinfo'>
            <div>
              <img className='profilePicture' alt='' title='user profile picture' src={state.userProfilePic} />
              <div className='buttonsOf_follower_following_starred_repos'>
                <p className='personInfo' onClick={() => display_followers_following_starred('followers')}>{state.followers.length} followers</p>
                <p className='personInfo' onClick={() => display_followers_following_starred('following')}>{state.following.length} following</p>
                <p className='personInfo' onClick={() => display_followers_following_starred('starred')}>✩ {state.starred.length}</p>
                <p className='personInfo' onClick={() => display_followers_following_starred('repositories')}>{state.repositories.length} repositories</p>
              </div>
              <h1>Organizations</h1>
              <Organizations organizations={state.organizations}/>
            </div>
              {
                state.displayFollowers ? <Followers  followers={state.followers} viewProfile={viewProfile}/> 
                : state.displayFollowing ? <Following  following={state.following} viewProfile={viewProfile}/> 
                : state.displaystarred ? <Starred starred={state.starred} /> 
                : state.displayRepositories ? <Repositories repositories={state.repositories} /> 
                : <Repositories repositories={state.repositories} />
              }
            </div>
        </div>
    )
}


export default PersonProfile