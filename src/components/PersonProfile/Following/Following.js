import React from 'react'
import './Following.css'



const Following = ({ following, viewProfile }) => {
    return(
        <div>
            <h1>Following</h1>
            <div>
            {
                following.map((user, index) => {
                return(
                    <div key={index} className='displayFollowing'>
                    <img alt="" src={user.avatar_url} className='followingPersonImg' />
                    <button className='followingPerson_login' value={user.login} onClick={viewProfile} >{user.login}</button>
                    </div>
                )
                })
            }
            </div> 
        </div>
    )
}


export default Following