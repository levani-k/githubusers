import React from 'react'
import './Followers.css'



const Followers = ({ followers }) => {
    return(
        <div>
            <h1>Followers</h1>
            <div>
            {
                followers.map((user, index) => {
                return(
                    <div key={index} className='displayFollowers'>
                        <img alt="" src={user.avatar_url} className='followersImg' />
                        <a href={user.html_url} className='followers_login' target='_blank'>{user.login}</a>
                    </div>
                )
                })
            }
            </div>
        </div>
    )
}


export default Followers