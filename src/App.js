import React from 'react'
import './App.css';
import EveryPerson from './components/EveryPerson/EveryPerson';
import PersonProfile from './components/PersonProfile/PersonProfile';



class App extends React.Component { 
  constructor() {
    super()
    this.state = {
      users: [],
      searchfield: '',
      personProfile: false,
      userProfilePic: '',
      followers: [],
      following: [],
      starred: [],
      repositories: [],
      organizations: [],
      displayFollowers: false,
      displayFollowing: false,
      displaystarred: false,
      displayRepositories: false,
      dark: false
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

    fetch(`https://api.github.com/users/${event.target.value}`)
    .then(response => response.json())
    .then(data => {
      this.setState({ personProfile: true, userProfilePic: data.avatar_url })

      fetch(data.followers_url)
      .then(response => response.json())
      .then(data => this.setState({ followers: data }))

      const following_users = data.following_url.slice(0, data.following_url.length - 13)
      fetch(following_users)
      .then(response => response.json())
      .then(data => this.setState({ following: data }))

      const starred_url = data.starred_url.slice(0, data.starred_url.length - 15)
      fetch(starred_url)
      .then(response => response.json())
      .then(data => this.setState({ starred: data }))

      fetch(data.repos_url)
      .then(response => response.json())
      .then(data => this.setState({ repositories: data }))

      fetch(data.organizations_url)
      .then(response => response.json())
      .then(data => this.setState({ organizations: data }))
    })
  }

  goToMainPage = () => {
    this.setState({
      personProfile: false,
      displayFollowers: false,
      displayFollowing: false,
      displaystarred: false,
      displayRepositories: false
    })
  }

  display_followers_following_starred = (route) => {
    if (route === 'followers') {
      this.setState({
        displayFollowers: true,
        displayFollowing: false,
        displaystarred: false,
        displayRepositories: false
      })
    } else if(route === 'following') {
      this.setState({
        displayFollowers: false,
        displayFollowing: true,
        displaystarred: false,
        displayRepositories: false
      })
    } else if(route === 'starred') {
      this.setState({
        displayFollowers: false,
        displayFollowing: false,
        displaystarred: true,
        displayRepositories: false
      })
    } else if(route === 'repositories') {
      this.setState({
        displayFollowers: false,
        displayFollowing: false,
        displaystarred: false,
        displayRepositories: true
      })
    }
  }
  
  render() {
    const { users, searchfield} = this.state
    const filteredusers = users.filter(user =>{
      return user.login.toLowerCase().includes(searchfield.toLowerCase())
    })
    let style;
    this.state.dark ? style={"width": "100%", "height": "100%", "backgroundColor": "#131621"} : style={"width": "100%", "height": "100%", "backgroundColor": "#937f7f"}
    return (
      <div style={style} className='tc'>
        <div className='web_theme'>
          <span>☀️</span>
          <label className="switch">
            <input type="checkbox" checked={this.state.dark} onChange={() => this.setState({ dark: !this.state.dark })}/>
            <span className="slider round"></span>
          </label>
          <span>🌙</span>
        </div>
        { this.state.personProfile ? 
          <PersonProfile state={this.state} goToMainPage={this.goToMainPage} display_followers_following_starred={this.display_followers_following_starred} viewProfile={this.viewProfile} />
          :
          <EveryPerson onSearchChange={this.onSearchChange} filteredusers={filteredusers} viewProfile={this.viewProfile} />
        }
      </div>
    );
  }
  
}

export default App;
