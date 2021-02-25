import React from 'react'
import './Following.css'



const Following = ({ following }) => {
    return(
        <div>
        {
            following.map((user, index) => {
            return(
                <div key={index} className='displayFollowing'>
                <img alt="" src={user.avatar_url} className='followingPersonImg' />
                <a href={user.html_url} className='followingPerson_login' target='_blank'>{user.login}</a>
                </div>
            )
            })
        }
        </div> 
    )
}


export default Following