import React from "react";
import './EveryPerson.css'

const EveryPerson = ({ onSearchChange, filteredusers, viewProfile, inputOnClick }) => {
    return (
        <div className='tc'>
            <h1 style={{"marginTop": "0"}}>Github Users</h1>
            <p>Here is displayed some profiles but you can search for any github user, if you search for someone who is not displayed here you need to type whole name</p>
            <input 
                style={{margin: '16px',
                      padding: '16px',
                      boxSizing: 'border-radius',
                      borderRadius: '5px',
                      boxShadow: '0 2px 5px #000'
                    }}
              id='userName'
              className='pa3 ba b--green bg-lighest-blue' 
              type='search' 
              placeholder='search user' 
              onChange={onSearchChange}
              onClick={inputOnClick}
          />
          <br />
          <div className='container'>
            {
              filteredusers.map((user, index) => {
                return(
                  <div key={user.login} className='eachPerson'>
                    <img className='everyPersonImg' alt='' src={user.avatar_url} /><br />
                    <a className='everyPersonLogin' href={user.html_url} target='_blank' >{user.login}</a>
                    <br />
                    <button className='openProfile' value={user.login} onClick={viewProfile}>view profile</button>
                  </div>
                )
              })
            }
            </div>
          </div>
    )
}


export default EveryPerson