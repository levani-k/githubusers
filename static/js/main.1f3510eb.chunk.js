(this.webpackJsonpgithubusers=this.webpackJsonpgithubusers||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var n=s(1),r=s.n(n),i=s(3),o=s.n(i),l=(s(12),s(4)),a=s(5),c=s(7),u=s(6),h=(s(13),s(14),s(0)),d=function(e){var t=e.onSearchChange,s=e.filteredusers,n=e.viewProfile,r=e.inputOnClick;return Object(h.jsxs)("div",{className:"tc",children:[Object(h.jsx)("h1",{style:{marginTop:"0"},children:"Github Users"}),Object(h.jsx)("p",{children:"Here is displayed some profiles but you can search for any github user, if you search for someone who is not displayed here you need to type whole name"}),Object(h.jsx)("input",{style:{margin:"16px",padding:"16px",boxSizing:"border-radius",borderRadius:"5px",boxShadow:"0 2px 5px #000"},id:"userName",className:"pa3 ba b--green bg-lighest-blue",type:"search",placeholder:"search user",onChange:t,onClick:r}),Object(h.jsx)("br",{}),Object(h.jsx)("div",{className:"container",children:s.map((function(e,t){return Object(h.jsxs)("div",{className:"eachPerson",children:[Object(h.jsx)("img",{className:"everyPersonImg",alt:"",src:e.avatar_url}),Object(h.jsx)("br",{}),Object(h.jsx)("a",{className:"everyPersonLogin",href:e.html_url,target:"_blank",children:e.login}),Object(h.jsx)("br",{}),Object(h.jsx)("button",{className:"openProfile",value:e.login,onClick:n,children:"view profile"})]},e.login)}))})]})},f=(s(16),s(17),function(e){var t=e.followers,s=e.viewProfile;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Followers"}),Object(h.jsx)("div",{children:t.map((function(e,t){return Object(h.jsxs)("div",{className:"displayFollowers",children:[Object(h.jsx)("img",{alt:"",src:e.avatar_url,className:"followersImg"}),Object(h.jsx)("button",{className:"followers_login",value:e.login,onClick:s,children:e.login})]},t)}))})]})}),j=(s(18),function(e){var t=e.following,s=e.viewProfile;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Following"}),Object(h.jsx)("div",{children:t.map((function(e,t){return Object(h.jsxs)("div",{className:"displayFollowing",children:[Object(h.jsx)("img",{alt:"",src:e.avatar_url,className:"followingPersonImg"}),Object(h.jsx)("button",{className:"followingPerson_login",value:e.login,onClick:s,children:e.login})]},t)}))})]})}),p=(s(19),function(e){var t=e.starred;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Starred Repositories"}),Object(h.jsx)("div",{children:t.map((function(e,t){return Object(h.jsxs)("div",{className:"displaystarred",children:[Object(h.jsx)("a",{className:"starredRepoFull_name",href:"https://github.com/".concat(e.full_name),target:"_blank",children:e.full_name}),Object(h.jsx)("p",{className:"starredRepoDescription",children:e.description}),Object(h.jsxs)("div",{className:"starredReposInfo",children:[Object(h.jsx)("p",{className:"reposInfo",children:e.language}),Object(h.jsxs)("p",{className:"reposInfo",children:["\u2729 ",e.stargazers_count]}),Object(h.jsxs)("p",{className:"reposInfo",children:[Object(h.jsx)("svg",{style:{color:"#8b949e"},"aria-label":"fork",className:"octicon octicon-repo-forked",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img",children:Object(h.jsx)("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})})," ",e.forks]}),Object(h.jsxs)("p",{children:["updated on ",e.updated_at.slice(0,10)]})]})]},t)}))})]})}),g=(s(20),function(e){var t=e.repositories;return Object(h.jsxs)("div",{children:[Object(h.jsx)("h1",{children:"Repositories"}),t.length>0?Object(h.jsx)("div",{className:"repositoriesGrid",children:t.map((function(e,t){return Object(h.jsxs)("div",{className:"displayRepositories",children:[Object(h.jsx)("a",{className:"repositoriesName",href:e.html_url,target:"_blank",children:e.name}),Object(h.jsx)("p",{className:"repoDescription",children:e.description}),Object(h.jsxs)("div",{className:"repositoriesInfo",children:[Object(h.jsx)("p",{className:"repositoriesInfo",children:e.language}),Object(h.jsxs)("p",{className:"repositoriesInfo",children:["\u2729 ",e.stargazers_count]}),Object(h.jsxs)("p",{className:"repositoriesInfo",children:[Object(h.jsx)("svg",{style:{color:"#8b949e"},"aria-label":"fork",className:"octicon octicon-repo-forked",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img",children:Object(h.jsx)("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})})," ",e.forks]}),Object(h.jsxs)("p",{className:"repositoriesInfo",children:["Updated on ",e.updated_at.slice(0,10)]})]})]},t)}))}):Object(h.jsx)("p",{children:"can't display repositories"})]})}),b=(s(21),function(e){var t=e.organizations;return Object(h.jsx)("div",{className:"orgWholeInfo",children:t.map((function(e,t){return Object(h.jsx)("a",{href:"https://github.com/".concat(e.login),title:e.login,target:"_blank",children:Object(h.jsx)("img",{className:"organizationImg",src:e.avatar_url,size:"32",width:"32",height:"32"})},t)}))})}),m=function(e){var t=e.state,s=e.goToMainPage,n=e.display_followers_following_starred,r=e.viewProfile;return Object(h.jsxs)("div",{children:[Object(h.jsx)("button",{className:"button",onClick:s,children:Object(h.jsx)("span",{children:"Go Back "})}),Object(h.jsxs)("div",{className:"wholeinfo",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"profilePicture",alt:"",title:"user profile picture",src:t.userProfilePic}),Object(h.jsxs)("div",{className:"buttonsOf_follower_following_starred_repos",children:[Object(h.jsxs)("p",{className:"personInfo",onClick:function(){return n("followers")},children:[t.followers.length," followers"]}),Object(h.jsxs)("p",{className:"personInfo",onClick:function(){return n("following")},children:[t.following.length," following"]}),Object(h.jsxs)("p",{className:"personInfo",onClick:function(){return n("starred")},children:["\u2729 ",t.starred.length]}),Object(h.jsxs)("p",{className:"personInfo",onClick:function(){return n("repositories")},children:[t.repositories.length," repositories"]})]}),Object(h.jsx)("h1",{children:"Organizations"}),Object(h.jsx)(b,{organizations:t.organizations})]}),t.displayFollowers?Object(h.jsx)(f,{followers:t.followers,viewProfile:r}):t.displayFollowing?Object(h.jsx)(j,{following:t.following,viewProfile:r}):t.displaystarred?Object(h.jsx)(p,{starred:t.starred}):(t.displayRepositories,Object(h.jsx)(g,{repositories:t.repositories}))]})]})},v=function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).filteredusers=function(){var t=e.state,s=t.users,n=t.searchfield;return s.filter((function(e){return e.login.includes(n)}))},e.onSearchChange=function(t){e.setState({searchfield:t.target.value}),fetch("https://api.github.com/users/".concat(t.target.value)).then((function(e){return e.json()})).then((function(t){for(var s=!0,n=0;n<e.state.users.length;n++)e.state.users[n].login===t.login&&(s=!1);s&&e.state.users.push(t)})).catch((function(e){return console.log(e)}))},e.inputOnClick=function(t){var s=document.getElementById("userName");s.addEventListener("keyup",(function(t){if("Enter"===t.key){var n=e.filteredusers();1===n.length?fetch("https://api.github.com/users/".concat(n[0].login)).then((function(e){return e.json()})).then((function(t){e.setState({personProfile:!0,userProfilePic:t.avatar_url}),fetch(t.followers_url).then((function(e){return e.json()})).then((function(t){return e.setState({followers:t})}));var s=t.following_url.slice(0,t.following_url.length-13);fetch(s).then((function(e){return e.json()})).then((function(t){return e.setState({following:t})}));var n=t.starred_url.slice(0,t.starred_url.length-15);fetch(n).then((function(e){return e.json()})).then((function(t){return e.setState({starred:t})})),fetch(t.repos_url).then((function(e){return e.json()})).then((function(t){return e.setState({repositories:t})})),fetch(t.organizations_url).then((function(e){return e.json()})).then((function(t){return e.setState({organizations:t})}))})):fetch("https://api.github.com/users/".concat(s.value)).then((function(e){return e.json()})).then((function(t){e.setState({personProfile:!0,userProfilePic:t.avatar_url}),fetch(t.followers_url).then((function(e){return e.json()})).then((function(t){return e.setState({followers:t})}));var s=t.following_url.slice(0,t.following_url.length-13);fetch(s).then((function(e){return e.json()})).then((function(t){return e.setState({following:t})}));var n=t.starred_url.slice(0,t.starred_url.length-15);fetch(n).then((function(e){return e.json()})).then((function(t){return e.setState({starred:t})})),fetch(t.repos_url).then((function(e){return e.json()})).then((function(t){return e.setState({repositories:t})})),fetch(t.organizations_url).then((function(e){return e.json()})).then((function(t){return e.setState({organizations:t})}))}))}}))},e.viewProfile=function(t){fetch("https://api.github.com/users/".concat(t.target.value)).then((function(e){return e.json()})).then((function(t){e.setState({personProfile:!0,userProfilePic:t.avatar_url}),fetch(t.followers_url).then((function(e){return e.json()})).then((function(t){return e.setState({followers:t})}));var s=t.following_url.slice(0,t.following_url.length-13);fetch(s).then((function(e){return e.json()})).then((function(t){return e.setState({following:t})}));var n=t.starred_url.slice(0,t.starred_url.length-15);fetch(n).then((function(e){return e.json()})).then((function(t){return e.setState({starred:t})})),fetch(t.repos_url).then((function(e){return e.json()})).then((function(t){return e.setState({repositories:t})})),fetch(t.organizations_url).then((function(e){return e.json()})).then((function(t){return e.setState({organizations:t})}))}))},e.goToMainPage=function(){e.setState({personProfile:!1,displayFollowers:!1,displayFollowing:!1,displaystarred:!1,displayRepositories:!1,searchfield:""})},e.display_followers_following_starred=function(t){"followers"===t?e.setState({displayFollowers:!0,displayFollowing:!1,displaystarred:!1,displayRepositories:!1}):"following"===t?e.setState({displayFollowers:!1,displayFollowing:!0,displaystarred:!1,displayRepositories:!1}):"starred"===t?e.setState({displayFollowers:!1,displayFollowing:!1,displaystarred:!0,displayRepositories:!1}):"repositories"===t&&e.setState({displayFollowers:!1,displayFollowing:!1,displaystarred:!1,displayRepositories:!0})},e.state={users:[],searchfield:"",personProfile:!1,userProfilePic:"",followers:[],following:[],starred:[],repositories:[],organizations:[],displayFollowers:!1,displayFollowing:!1,displaystarred:!1,displayRepositories:!1,dark:!1},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({users:t})}))}},{key:"render",value:function(){var e,t=this;return e=this.state.dark?{width:"100%",height:"100%",backgroundColor:"#131621"}:{width:"100%",height:"100%",backgroundColor:"#937f7f"},Object(h.jsxs)("div",{style:e,className:"tc",children:[Object(h.jsxs)("div",{className:"web_theme",children:[Object(h.jsx)("span",{children:"\u2600\ufe0f"}),Object(h.jsxs)("label",{className:"switch",children:[Object(h.jsx)("input",{type:"checkbox",checked:this.state.dark,onChange:function(){return t.setState({dark:!t.state.dark})}}),Object(h.jsx)("span",{className:"slider round"})]}),Object(h.jsx)("span",{children:"\ud83c\udf19"})]}),this.state.personProfile?Object(h.jsx)(m,{state:this.state,goToMainPage:this.goToMainPage,display_followers_following_starred:this.display_followers_following_starred,viewProfile:this.viewProfile}):Object(h.jsx)(d,{onSearchChange:this.onSearchChange,filteredusers:this.filteredusers(),viewProfile:this.viewProfile,inputOnClick:this.inputOnClick})]})}}]),s}(r.a.Component),x=(s(22),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,i=t.getLCP,o=t.getTTFB;s(e),n(e),r(e),i(e),o(e)}))});o.a.render(Object(h.jsx)(r.a.StrictMode,{children:Object(h.jsx)(v,{})}),document.getElementById("root")),x()}],[[23,1,2]]]);
//# sourceMappingURL=main.1f3510eb.chunk.js.map