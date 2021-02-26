import React from 'react'
import './PersonProfile.css'
import Followers from './Followers/Followers'
import Following from './Following/Following'
import Starred from './Starred/Starred'
import Repositories from './Repositories/Repositories'
import Organizations from './Organizations/Organizations'


const PersonProfile = ({ state, goToMainPage, display_followers_following_starred }) => {
    return (
        <div><button className="button" onClick={goToMainPage}><span>Go Back </span></button>
            <div className='wholeinfo'>
              <div>
                <img className='profilePicture' alt='' title='user profile picture' src={state.userProfile.avatar_url} />
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
                  state.displayFollowers ? <Followers  followers={state.followers} /> :  <p></p>
                }
                {
                  state.displayFollowing ? <Following  following={state.following} /> : <p></p>
                }
                {
                  state.displaystarred ? <Starred starred={state.starred} /> : <p></p>
                }
                {
                  state.displayRepositories ? <Repositories repositories={state.repositories} /> : <p></p>
                }
            </div>
          </div>
    )
}


export default PersonProfile