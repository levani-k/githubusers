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
      userProfile: {},
      followers: [],
      following: [],
      starred: [],
      repositories: [],
      displayFollowers: false,
      displayFollowing: false,
      displaystarred: false,
      displayRepositories: false
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
    return (
      <div className='tc'>
        { this.state.personProfile ? 
          <PersonProfile state={this.state} goToMainPage={this.goToMainPage} display_followers_following_starred={this.display_followers_following_starred} />
          :
          <EveryPerson onSearchChange={this.onSearchChange} filteredusers={filteredusers} viewProfile={this.viewProfile} />
        }
      </div>
    );
  }
  
}

export default App;
