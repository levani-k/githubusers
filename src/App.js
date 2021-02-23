import React from 'react'
import './App.css';

class App extends React.Component { 
  constructor() {
    super()
    this.state = {
      users: [],
      searchfield: '',
      personProfile: false,
      userProfile: {},
      followers: [],
      following: [],
      starred: [],
      repositories: []
    }
    
  }

  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
  }

  componentDidMount() {
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(data => this.setState({ users: data }))
  }

  viewProfile = (event) => {
    const userIndex = event.target.value
    this.setState({
      personProfile: true,
      userProfile: this.state.users[userIndex]
    })

    fetch(this.state.users[userIndex].followers_url)
    .then(response => response.json())
    .then(data => this.setState({ followers: data }))

    const following_users = this.state.users[userIndex].following_url.slice(0, this.state.users[userIndex].following_url.length - 13)
    fetch(following_users)
    .then(response => response.json())
    .then(data => this.setState({ following: data }))

    const starred_url = this.state.users[userIndex].starred_url.slice(0, this.state.users[userIndex].starred_url.length - 15)
    fetch(starred_url)
    .then(response => response.json())
    .then(data => this.setState({ starred: data }))

    fetch(this.state.users[userIndex].repos_url)
    .then(response => response.json())
    .then(data => this.setState({ repositories: data }))
  }
  
  render() {
    const { users, searchfield} = this.state
    const filteredusers = users.filter(user =>{
      return user.login.toLowerCase().includes(searchfield.toLowerCase())
    })
    return (
      <div className='tc'>
        { this.state.personProfile ? 
          <div>
            <button onClick={() => this.setState({personProfile: false})}>Go Back</button>
            <br />
            <div>
              <img alt='' src={this.state.userProfile.avatar_url} />
              <p>{this.state.followers.length} followers</p>
              <p>{this.state.following.length} following</p>
              <p>✩ {this.state.starred.length}</p>
            </div>
            <div>
              <p>repositories {this.state.repositories.length}</p>
            </div>
          </div>
          :
          <div>
            <h1>Github Users</h1>
            <input 
                style={{margin: '16px',
                      padding: '16px',
                      boxSizing: 'border-radius',
                      borderRadius: '5px',
                      boxShadow: '0 2px 5px #000'
                    }}
              className='pa3 ba b--green bg-lighest-blue' 
              type='search' 
              placeholder='search user' 
              onChange={this.onSearchChange}
          />
          <br />
          <div>
            {
              filteredusers.map((user, index) => {
                return(
                  <div key={user.id} className='tc bg-light-green dib br3 pa3 ma2 bw2 shadow-5'>
                    <img alt='' src={user.avatar_url} /><br />
                    <a href={user.html_url} target='_blank' >{user.login}</a>
                    <br />
                    <button value={index} onClick={this.viewProfile}>view profile</button>
                  </div>
                )
              })
            }
            </div>
          </div>
        }
      </div>
    );
  }
  
}

export default App;
