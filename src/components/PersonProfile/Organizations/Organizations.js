import React from 'react'
import './Organizations.css'


const Organizations = ({ organizations }) => {
    return(
        <div className='orgWholeInfo'>
            {
                organizations.map((org, index) => {
                    return(
                        <a key={index} href={`https://github.com/${org.login}`} title={org.login} target='_blank'>
                            <img className='organizationImg' src={org.avatar_url} size='32' width='32' height='32' />
                        </a>
                    )
                })
            }
        </div>
    )
}


export default Organizations