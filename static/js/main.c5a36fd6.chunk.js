(this.webpackJsonpgithubusers=this.webpackJsonpgithubusers||[]).push([[0],[,,,,,,,,,,,,function(e,s,t){},function(e,s,t){},function(e,s,t){},,function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},function(e,s,t){},,function(e,s,t){"use strict";t.r(s);var r=t(1),o=t.n(r),l=t(3),i=t.n(l),n=(t(12),t(4)),a=t(5),c=t(7),d=t(6),u=(t(13),t(14),t(0)),j=function(e){var s=e.onSearchChange,t=e.filteredusers,r=e.viewProfile;e.repositories;return Object(u.jsxs)("div",{className:"tc",children:[Object(u.jsx)("h1",{children:"Github Users"}),Object(u.jsx)("input",{style:{margin:"16px",padding:"16px",boxSizing:"border-radius",borderRadius:"5px",boxShadow:"0 2px 5px #000"},className:"pa3 ba b--green bg-lighest-blue",type:"search",placeholder:"search user",onChange:s}),Object(u.jsx)("br",{}),Object(u.jsx)("div",{className:"container",children:t.map((function(e,s){return Object(u.jsxs)("div",{className:"eachPerson",children:[Object(u.jsx)("img",{className:"everyPersonImg",alt:"",src:e.avatar_url}),Object(u.jsx)("br",{}),Object(u.jsx)("a",{className:"everyPersonLogin",href:e.html_url,target:"_blank",children:e.login}),Object(u.jsx)("br",{}),Object(u.jsx)("button",{className:"openProfile",value:s,onClick:r,children:"view profile"})]},e.id)}))})]})},f=(t(16),t(17),function(e){var s=e.followers;return Object(u.jsx)("div",{children:s.map((function(e,s){return Object(u.jsxs)("div",{className:"displayFollowers",children:[Object(u.jsx)("img",{alt:"",src:e.avatar_url,className:"followersImg"}),Object(u.jsx)("a",{href:e.html_url,className:"followers_login",target:"_blank",children:e.login})]},s)}))})}),p=(t(18),function(e){var s=e.following;return Object(u.jsx)("div",{children:s.map((function(e,s){return Object(u.jsxs)("div",{className:"displayFollowing",children:[Object(u.jsx)("img",{alt:"",src:e.avatar_url,className:"followingPersonImg"}),Object(u.jsx)("a",{href:e.html_url,className:"followingPerson_login",target:"_blank",children:e.login})]},s)}))})}),h=(t(19),function(e){var s=e.starred;return Object(u.jsx)("div",{children:s.map((function(e,s){return Object(u.jsxs)("div",{className:"displaystarred",children:[Object(u.jsx)("a",{className:"starredRepoFull_name",href:"https://github.com/".concat(e.full_name),target:"_blank",children:e.full_name}),Object(u.jsx)("p",{className:"starredRepoDescription",style:{color:"#8b949e"},children:e.description}),Object(u.jsxs)("div",{className:"starredReposInfo",children:[Object(u.jsx)("p",{className:"reposInfo",children:e.language}),Object(u.jsxs)("p",{className:"reposInfo",children:["\u2729 ",e.stargazers_count]}),Object(u.jsxs)("p",{className:"reposInfo",children:[Object(u.jsx)("svg",{style:{color:"#8b949e"},"aria-label":"fork",className:"octicon octicon-repo-forked",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})})," ",e.forks]}),Object(u.jsx)("p",{children:e.updated_at})]})]},s)}))})}),b=(t(20),function(e){var s=e.repositories;return Object(u.jsx)("div",{children:s.map((function(e,s){return Object(u.jsxs)("div",{className:"displayRepositories",children:[Object(u.jsx)("a",{className:"repositoriesName",href:e.html_url,target:"_blank",children:e.name}),Object(u.jsx)("p",{className:"repoDescription",children:e.description}),Object(u.jsxs)("div",{className:"repositoriesInfo",children:[Object(u.jsx)("p",{className:"repositoriesInfo",children:e.language}),Object(u.jsxs)("p",{className:"repositoriesInfo",children:["\u2729 ",e.stargazers_count]}),Object(u.jsxs)("p",{className:"repositoriesInfo",children:[Object(u.jsx)("svg",{style:{color:"#8b949e"},"aria-label":"fork",className:"octicon octicon-repo-forked",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img",children:Object(u.jsx)("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})})," ",e.forks]}),Object(u.jsxs)("p",{className:"repositoriesInfo",children:["Updated on ",e.updated_at]})]})]},s)}))})}),g=function(e){var s=e.state,t=e.goToMainPage,r=e.display_followers_following_starred;return Object(u.jsxs)("div",{children:[Object(u.jsx)("button",{className:"button",onClick:t,children:Object(u.jsx)("span",{children:"Go Back "})}),Object(u.jsxs)("div",{className:"wholeinfo",children:[Object(u.jsxs)("div",{children:[Object(u.jsx)("img",{className:"profilePicture",alt:"",title:"user profile picture",src:s.userProfile.avatar_url}),Object(u.jsxs)("div",{className:"buttonsOf_follower_following_starred_repos",children:[Object(u.jsxs)("p",{className:"personInfo",onClick:function(){return r("followers")},children:[s.followers.length," followers"]}),Object(u.jsxs)("p",{className:"personInfo",onClick:function(){return r("following")},children:[s.following.length," following"]}),Object(u.jsxs)("p",{className:"personInfo",onClick:function(){return r("starred")},children:["\u2729 ",s.starred.length]}),Object(u.jsxs)("p",{className:"personInfo",onClick:function(){return r("repositories")},children:[s.repositories.length," repositories"]})]})]}),s.displayFollowers?Object(u.jsx)(f,{followers:s.followers}):Object(u.jsx)("p",{}),s.displayFollowing?Object(u.jsx)(p,{following:s.following}):Object(u.jsx)("p",{}),s.displaystarred?Object(u.jsx)(h,{starred:s.starred}):Object(u.jsx)("p",{}),s.displayRepositories?Object(u.jsx)(b,{repositories:s.repositories}):Object(u.jsx)("p",{})]})]})},m=function(e){Object(c.a)(t,e);var s=Object(d.a)(t);function t(){var e;return Object(n.a)(this,t),(e=s.call(this)).onSearchChange=function(s){e.setState({searchfield:s.target.value})},e.viewProfile=function(s){var t=s.target.value;e.setState({personProfile:!0,userProfile:e.state.users[t]}),fetch(e.state.users[t].followers_url).then((function(e){return e.json()})).then((function(s){return e.setState({followers:s})}));var r=e.state.users[t].following_url.slice(0,e.state.users[t].following_url.length-13);fetch(r).then((function(e){return e.json()})).then((function(s){return e.setState({following:s})}));var o=e.state.users[t].starred_url.slice(0,e.state.users[t].starred_url.length-15);fetch(o).then((function(e){return e.json()})).then((function(s){return e.setState({starred:s})})),fetch(e.state.users[t].repos_url).then((function(e){return e.json()})).then((function(s){return e.setState({repositories:s})}))},e.goToMainPage=function(){e.setState({personProfile:!1,displayFollowers:!1,displaystarred:!1})},e.display_followers_following_starred=function(s){"followers"===s?e.setState({displayFollowers:!0,displayFollowing:!1,displaystarred:!1,displayRepositories:!1}):"following"===s?e.setState({displayFollowers:!1,displayFollowing:!0,displaystarred:!1,displayRepositories:!1}):"starred"===s?e.setState({displayFollowers:!1,displayFollowing:!1,displaystarred:!0,displayRepositories:!1}):"repositories"===s&&e.setState({displayFollowers:!1,displayFollowing:!1,displaystarred:!1,displayRepositories:!0})},e.state={users:[],searchfield:"",personProfile:!1,userProfile:{},followers:[],following:[],starred:[],repositories:[],displayFollowers:!1,displayFollowing:!1,displaystarred:!1,displayRepositories:!1},e}return Object(a.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users").then((function(e){return e.json()})).then((function(s){return e.setState({users:s})}))}},{key:"render",value:function(){var e=this.state,s=e.users,t=e.searchfield,r=s.filter((function(e){return e.login.toLowerCase().includes(t.toLowerCase())}));return Object(u.jsx)("div",{className:"tc",children:this.state.personProfile?Object(u.jsx)(g,{state:this.state,goToMainPage:this.goToMainPage,display_followers_following_starred:this.display_followers_following_starred}):Object(u.jsx)(j,{onSearchChange:this.onSearchChange,filteredusers:r,viewProfile:this.viewProfile})})}}]),t}(o.a.Component),x=(t(21),function(e){e&&e instanceof Function&&t.e(3).then(t.bind(null,23)).then((function(s){var t=s.getCLS,r=s.getFID,o=s.getFCP,l=s.getLCP,i=s.getTTFB;t(e),r(e),o(e),l(e),i(e)}))});i.a.render(Object(u.jsx)(o.a.StrictMode,{children:Object(u.jsx)(m,{})}),document.getElementById("root")),x()}],[[22,1,2]]]);
//# sourceMappingURL=main.c5a36fd6.chunk.js.map