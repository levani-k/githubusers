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
      repositories: [],
      displayFollowers: false,
      displayFollowing: false,
      displaystarred: false
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

  goToMainPage = () => {
    this.setState({
      personProfile: false,
      displayFollowers: false,
      displaystarred: false
    })
  }

  displayFollowers = () => {
    this.setState({
      displayFollowers: true,
      displayFollowing: false,
      displaystarred: false
    })
  }

  displayFollowing = () => {
    this.setState({
      displayFollowers: false,
      displayFollowing: true,
      displaystarred: false
    })
  }

  displaystarred = () => {
    this.setState({
      displayFollowers: false,
      displayFollowing: false,
      displaystarred: true
    })
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
            <button className="button" style={{"verticalAlign":"middle"}} onClick={this.goToMainPage}><span>Go Back </span></button>
            <br />
            <div className='wholeinfo'>
              <div>
                <img alt='' src={this.state.userProfile.avatar_url} />
                <div className='info'>
                  <p className='information' onClick={this.displayFollowers}>{this.state.followers.length} followers·</p>
                  <p className='information' onClick={this.displayFollowing}>{this.state.following.length} following·</p>
                  <p className='information' onClick={this.displaystarred}>✩ {this.state.starred.length}</p>
                </div>
              </div>
              <div>
                <p>repositories {this.state.repositories.length}</p>
                {
                  this.state.displayFollowers ? 
                  <div>
                    {
                      this.state.followers.map(user => {
                        return(
                          <div className='displayFolowers'>
                            <img alt="" src={user.avatar_url} className='followersImg' />
                            <p className='information'>{user.login}</p>
                          </div>
                        )
                      })
                    }
                  </div> 
                  : 
                  <p></p>
                }
                {
                  this.state.displayFollowing ? 
                  <div>
                    {
                      this.state.following.map(user => {
                        return(
                          <div className='displayFolowers'>
                            <img alt="" src={user.avatar_url} className='followersImg' />
                            <p className='information'>{user.login}</p>
                          </div>
                        )
                      })
                    }
                  </div> 
                  : 
                  <p></p>
                }
                {
                  this.state.displaystarred ? 
                  <div>
                    {
                      this.state.starred.map(user => {
                        return(
                          <div className='displaystarred'>
                            <a href={`https://github.com/${user.full_name}`} target='_blank'>{user.full_name}</a>
                            <p style={{"color": "#8b949e"}}>{user.description}</p>
                            <div className='starredReposInfo'>
                              <p>{user.language}</p>
                              <p>✩ {user.stargazers_count}</p>
                              <p><svg style={{"color": "#8b949e"}} aria-label="fork" class="octicon octicon-repo-forked" viewBox="0 0 16 16" version="1.1" width="16" height="16" role="img"><path fill-rule="evenodd" d="M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"></path></svg> {user.forks}</p>
                              <p>{user.updated_at}</p>
                            </div>
                          </div>
                        )
                      })
                    }
                  </div> 
                  : 
                  <p></p>
                }
              </div>
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
