import React from 'react'
import './Followers.css'



const Followers = ({ followers, viewProfile }) => {
    return(
        <div>
            <h1>Followers</h1>
            <div>
            {
                followers.map((user, index) => {
                return(
                    <div key={index} className='displayFollowers'>
                        <img alt="" src={user.avatar_url} className='followersImg' />
                        <button value={user.login} onClick={viewProfile} >{user.login}</button>
                    </div>
                )
                })
            }
            </div>
        </div>
    )
}


export default Followers