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

  filteredusers = () => {
    const { users, searchfield} = this.state
    const filteredusers = users.filter(user =>{
      return user.login.includes(searchfield)
    })

    return filteredusers
  }


  onSearchChange = (event) => {
    this.setState({ searchfield: event.target.value})
    fetch(encodeURI(`https://api.github.com/users/${event.target.value}`))
    .then(response => response.json())
    .then(singleUser => {
      let triger = true
      for (let index = 0; index < this.state.users.length; index++) {
        if (this.state.users[index].login === singleUser.login) {
          triger = false
        }
      }
      if (triger) {
        this.state.users.push(singleUser)
      }
    })
    .catch(err => console.log(err))
  }


  inputOnClick = (event) => {
    let input = document.getElementById("userName");
    input.addEventListener("keyup", event => {
      if (event.key === "Enter") {
        let user = this.filteredusers()
        if(user.length === 1) {
          fetch(`https://api.github.com/users/${user[0].login}`)
          .then(response => response.json())
          .then(singleUser => {
            this.setState({ personProfile: true, userProfilePic: singleUser.avatar_url })

            fetch(singleUser.followers_url)
            .then(response => response.json())
            .then(singleUser => this.setState({ followers: singleUser }))

            const following_users = singleUser.following_url.slice(0, singleUser.following_url.length - 13)
            fetch(following_users)
            .then(response => response.json())
            .then(singleUser => this.setState({ following: singleUser }))

            const starred_url = singleUser.starred_url.slice(0, singleUser.starred_url.length - 15)
            fetch(starred_url)
            .then(response => response.json())
            .then(singleUser => this.setState({ starred: singleUser }))

            fetch(singleUser.repos_url)
            .then(response => response.json())
            .then(singleUser => this.setState({ repositories: singleUser }))

            fetch(singleUser.organizations_url)
            .then(response => response.json())
            .then(singleUser => this.setState({ organizations: singleUser }))
          })
        } else {
          fetch(`https://api.github.com/users/${input.value}`)
          .then(response => response.json())
          .then(singleUser => {
            this.setState({ personProfile: true, userProfilePic: singleUser.avatar_url })

            fetch(singleUser.followers_url)
            .then(response => response.json())
            .then(singleUser => this.setState({ followers: singleUser }))

            const following_users = singleUser.following_url.slice(0, singleUser.following_url.length - 13)
            fetch(following_users)
            .then(response => response.json())
            .then(singleUser => this.setState({ following: singleUser }))

            const starred_url = singleUser.starred_url.slice(0, singleUser.starred_url.length - 15)
            fetch(starred_url)
            .then(response => response.json())
            .then(singleUser => this.setState({ starred: singleUser }))

            fetch(singleUser.repos_url)
            .then(response => response.json())
            .then(singleUser => this.setState({ repositories: singleUser }))

            fetch(singleUser.organizations_url)
            .then(response => response.json())
            .then(singleUser => this.setState({ organizations: singleUser }))
          })
        }
      }
    });
  }

  componentDidMount() {
    fetch('https://api.github.com/users')
    .then(response => response.json())
    .then(allUsers => this.setState({ users: allUsers }))
  }

  viewProfile = (event) => {
    fetch(`https://api.github.com/users/${event.target.value}`)
    .then(response => response.json())
    .then(singleUser => {
      this.setState({ personProfile: true, userProfilePic: singleUser.avatar_url })

      fetch(singleUser.followers_url)
      .then(response => response.json())
      .then(singleUser => this.setState({ followers: singleUser }))

      const following_users = singleUser.following_url.slice(0, singleUser.following_url.length - 13)
      fetch(following_users)
      .then(response => response.json())
      .then(singleUser => this.setState({ following: singleUser }))

      const starred_url = singleUser.starred_url.slice(0, singleUser.starred_url.length - 15)
      fetch(starred_url)
      .then(response => response.json())
      .then(singleUser => this.setState({ starred: singleUser }))

      fetch(singleUser.repos_url)
      .then(response => response.json())
      .then(singleUser => this.setState({ repositories: singleUser }))

      fetch(singleUser.organizations_url)
      .then(response => response.json())
      .then(singleUser => this.setState({ organizations: singleUser }))
    })
  }

  goToMainPage = () => {
    this.setState({
      personProfile: false,
      displayFollowers: false,
      displayFollowing: false,
      displaystarred: false,
      displayRepositories: false,
      searchfield: ''
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
          <EveryPerson onSearchChange={this.onSearchChange} filteredusers={this.filteredusers()} viewProfile={this.viewProfile} inputOnClick={this.inputOnClick}/>
        }
      </div>
    );
  }
  
}

export default App;
