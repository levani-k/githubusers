(this.webpackJsonpgithubusers=this.webpackJsonpgithubusers||[]).push([[0],[,,,,,,,,,,,,function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},function(e,t,s){},,function(e,t,s){"use strict";s.r(t);var r=s(1),n=s.n(r),i=s(3),o=s.n(i),l=(s(12),s(4)),a=s(5),c=s(7),u=s(6),d=(s(13),s(14),s(0)),h=function(e){var t=e.onSearchChange,s=e.filteredusers,r=e.viewProfile,n=e.inputOnClick;return Object(d.jsxs)("div",{className:"tc",children:[Object(d.jsx)("h1",{style:{marginTop:"0"},children:"Github Users"}),Object(d.jsx)("input",{style:{margin:"16px",padding:"16px",boxSizing:"border-radius",borderRadius:"5px",boxShadow:"0 2px 5px #000"},id:"userName",className:"pa3 ba b--green bg-lighest-blue",type:"search",placeholder:"search user",onChange:t,onClick:n}),Object(d.jsx)("br",{}),Object(d.jsx)("div",{className:"container",children:s.map((function(e,t){return Object(d.jsxs)("div",{className:"eachPerson",children:[Object(d.jsx)("img",{className:"everyPersonImg",alt:"",src:e.avatar_url}),Object(d.jsx)("br",{}),Object(d.jsx)("a",{className:"everyPersonLogin",href:e.html_url,target:"_blank",children:e.login}),Object(d.jsx)("br",{}),Object(d.jsx)("button",{className:"openProfile",value:e.login,onClick:r,children:"view profile"})]},e.id)}))})]})},f=(s(16),s(17),function(e){var t=e.followers,s=e.viewProfile;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Followers"}),Object(d.jsx)("div",{children:t.map((function(e,t){return Object(d.jsxs)("div",{className:"displayFollowers",children:[Object(d.jsx)("img",{alt:"",src:e.avatar_url,className:"followersImg"}),Object(d.jsx)("button",{className:"followers_login",value:e.login,onClick:s,children:e.login})]},t)}))})]})}),j=(s(18),function(e){var t=e.following,s=e.viewProfile;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Following"}),Object(d.jsx)("div",{children:t.map((function(e,t){return Object(d.jsxs)("div",{className:"displayFollowing",children:[Object(d.jsx)("img",{alt:"",src:e.avatar_url,className:"followingPersonImg"}),Object(d.jsx)("button",{className:"followingPerson_login",value:e.login,onClick:s,children:e.login})]},t)}))})]})}),p=(s(19),function(e){var t=e.starred;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Starred Repositories"}),Object(d.jsx)("div",{children:t.map((function(e,t){return Object(d.jsxs)("div",{className:"displaystarred",children:[Object(d.jsx)("a",{className:"starredRepoFull_name",href:"https://github.com/".concat(e.full_name),target:"_blank",children:e.full_name}),Object(d.jsx)("p",{className:"starredRepoDescription",children:e.description}),Object(d.jsxs)("div",{className:"starredReposInfo",children:[Object(d.jsx)("p",{className:"reposInfo",children:e.language}),Object(d.jsxs)("p",{className:"reposInfo",children:["\u2729 ",e.stargazers_count]}),Object(d.jsxs)("p",{className:"reposInfo",children:[Object(d.jsx)("svg",{style:{color:"#8b949e"},"aria-label":"fork",className:"octicon octicon-repo-forked",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img",children:Object(d.jsx)("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})})," ",e.forks]}),Object(d.jsxs)("p",{children:["updated on ",e.updated_at.slice(0,10)]})]})]},t)}))})]})}),g=(s(20),function(e){var t=e.repositories;return Object(d.jsxs)("div",{children:[Object(d.jsx)("h1",{children:"Repositories"}),Object(d.jsx)("div",{className:"repositoriesGrid",children:t.map((function(e,t){return Object(d.jsxs)("div",{className:"displayRepositories",children:[Object(d.jsx)("a",{className:"repositoriesName",href:e.html_url,target:"_blank",children:e.name}),Object(d.jsx)("p",{className:"repoDescription",children:e.description}),Object(d.jsxs)("div",{className:"repositoriesInfo",children:[Object(d.jsx)("p",{className:"repositoriesInfo",children:e.language}),Object(d.jsxs)("p",{className:"repositoriesInfo",children:["\u2729 ",e.stargazers_count]}),Object(d.jsxs)("p",{className:"repositoriesInfo",children:[Object(d.jsx)("svg",{style:{color:"#8b949e"},"aria-label":"fork",className:"octicon octicon-repo-forked",viewBox:"0 0 16 16",version:"1.1",width:"16",height:"16",role:"img",children:Object(d.jsx)("path",{fillRule:"evenodd",d:"M5 3.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm0 2.122a2.25 2.25 0 10-1.5 0v.878A2.25 2.25 0 005.75 8.5h1.5v2.128a2.251 2.251 0 101.5 0V8.5h1.5a2.25 2.25 0 002.25-2.25v-.878a2.25 2.25 0 10-1.5 0v.878a.75.75 0 01-.75.75h-4.5A.75.75 0 015 6.25v-.878zm3.75 7.378a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm3-8.75a.75.75 0 100-1.5.75.75 0 000 1.5z"})})," ",e.forks]}),Object(d.jsxs)("p",{className:"repositoriesInfo",children:["Updated on ",e.updated_at.slice(0,10)]})]})]},t)}))})]})}),b=(s(21),function(e){var t=e.organizations;return Object(d.jsx)("div",{className:"orgWholeInfo",children:t.map((function(e,t){return Object(d.jsx)("a",{href:"https://github.com/".concat(e.login),title:e.login,target:"_blank",children:Object(d.jsx)("img",{className:"organizationImg",src:e.avatar_url,size:"32",width:"32",height:"32"})},t)}))})}),m=function(e){var t=e.state,s=e.goToMainPage,r=e.display_followers_following_starred,n=e.viewProfile;return Object(d.jsxs)("div",{children:[Object(d.jsx)("button",{className:"button",onClick:s,children:Object(d.jsx)("span",{children:"Go Back "})}),Object(d.jsxs)("div",{className:"wholeinfo",children:[Object(d.jsxs)("div",{children:[Object(d.jsx)("img",{className:"profilePicture",alt:"",title:"user profile picture",src:t.userProfilePic}),Object(d.jsxs)("div",{className:"buttonsOf_follower_following_starred_repos",children:[Object(d.jsxs)("p",{className:"personInfo",onClick:function(){return r("followers")},children:[t.followers.length," followers"]}),Object(d.jsxs)("p",{className:"personInfo",onClick:function(){return r("following")},children:[t.following.length," following"]}),Object(d.jsxs)("p",{className:"personInfo",onClick:function(){return r("starred")},children:["\u2729 ",t.starred.length]}),Object(d.jsxs)("p",{className:"personInfo",onClick:function(){return r("repositories")},children:[t.repositories.length," repositories"]})]}),Object(d.jsx)("h1",{children:"Organizations"}),Object(d.jsx)(b,{organizations:t.organizations})]}),t.displayFollowers?Object(d.jsx)(f,{followers:t.followers,viewProfile:n}):t.displayFollowing?Object(d.jsx)(j,{following:t.following,viewProfile:n}):t.displaystarred?Object(d.jsx)(p,{starred:t.starred}):(t.displayRepositories,Object(d.jsx)(g,{repositories:t.repositories}))]})]})},x=function(e){Object(c.a)(s,e);var t=Object(u.a)(s);function s(){var e;return Object(l.a)(this,s),(e=t.call(this)).onSearchChange=function(t){e.setState({searchfield:t.target.value})},e.filteredusers=function(){var t=e.state,s=t.users,r=t.searchfield;return s.filter((function(e){return e.login.toLowerCase().includes(r.toLowerCase())}))},e.inputOnClick=function(t){document.getElementById("userName").addEventListener("keyup",(function(t){if("Enter"===t.key){var s=e.filteredusers();1===s.length&&fetch("https://api.github.com/users/".concat(s[0].login)).then((function(e){return e.json()})).then((function(t){e.setState({personProfile:!0,userProfilePic:t.avatar_url}),fetch(t.followers_url).then((function(e){return e.json()})).then((function(t){return e.setState({followers:t})}));var s=t.following_url.slice(0,t.following_url.length-13);fetch(s).then((function(e){return e.json()})).then((function(t){return e.setState({following:t})}));var r=t.starred_url.slice(0,t.starred_url.length-15);fetch(r).then((function(e){return e.json()})).then((function(t){return e.setState({starred:t})})),fetch(t.repos_url).then((function(e){return e.json()})).then((function(t){return e.setState({repositories:t})})),fetch(t.organizations_url).then((function(e){return e.json()})).then((function(t){return e.setState({organizations:t})}))}))}}))},e.viewProfile=function(t){fetch("https://api.github.com/users/".concat(t.target.value)).then((function(e){return e.json()})).then((function(t){e.setState({personProfile:!0,userProfilePic:t.avatar_url}),fetch(t.followers_url).then((function(e){return e.json()})).then((function(t){return e.setState({followers:t})}));var s=t.following_url.slice(0,t.following_url.length-13);fetch(s).then((function(e){return e.json()})).then((function(t){return e.setState({following:t})}));var r=t.starred_url.slice(0,t.starred_url.length-15);fetch(r).then((function(e){return e.json()})).then((function(t){return e.setState({starred:t})})),fetch(t.repos_url).then((function(e){return e.json()})).then((function(t){return e.setState({repositories:t})})),fetch(t.organizations_url).then((function(e){return e.json()})).then((function(t){return e.setState({organizations:t})}))}))},e.goToMainPage=function(){e.setState({personProfile:!1,displayFollowers:!1,displayFollowing:!1,displaystarred:!1,displayRepositories:!1})},e.display_followers_following_starred=function(t){"followers"===t?e.setState({displayFollowers:!0,displayFollowing:!1,displaystarred:!1,displayRepositories:!1}):"following"===t?e.setState({displayFollowers:!1,displayFollowing:!0,displaystarred:!1,displayRepositories:!1}):"starred"===t?e.setState({displayFollowers:!1,displayFollowing:!1,displaystarred:!0,displayRepositories:!1}):"repositories"===t&&e.setState({displayFollowers:!1,displayFollowing:!1,displaystarred:!1,displayRepositories:!0})},e.state={users:[],searchfield:"",personProfile:!1,userProfilePic:"",followers:[],following:[],starred:[],repositories:[],organizations:[],displayFollowers:!1,displayFollowing:!1,displaystarred:!1,displayRepositories:!1,dark:!1},e}return Object(a.a)(s,[{key:"componentDidMount",value:function(){var e=this;fetch("https://api.github.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({users:t})}))}},{key:"render",value:function(){var e,t=this;return e=this.state.dark?{width:"100%",height:"100%",backgroundColor:"#131621"}:{width:"100%",height:"100%",backgroundColor:"#937f7f"},Object(d.jsxs)("div",{style:e,className:"tc",children:[Object(d.jsxs)("div",{className:"web_theme",children:[Object(d.jsx)("span",{children:"\u2600\ufe0f"}),Object(d.jsxs)("label",{className:"switch",children:[Object(d.jsx)("input",{type:"checkbox",checked:this.state.dark,onChange:function(){return t.setState({dark:!t.state.dark})}}),Object(d.jsx)("span",{className:"slider round"})]}),Object(d.jsx)("span",{children:"\ud83c\udf19"})]}),this.state.personProfile?Object(d.jsx)(m,{state:this.state,goToMainPage:this.goToMainPage,display_followers_following_starred:this.display_followers_following_starred,viewProfile:this.viewProfile}):Object(d.jsx)(h,{onSearchChange:this.onSearchChange,filteredusers:this.filteredusers(),viewProfile:this.viewProfile,inputOnClick:this.inputOnClick})]})}}]),s}(n.a.Component),O=(s(22),function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,24)).then((function(t){var s=t.getCLS,r=t.getFID,n=t.getFCP,i=t.getLCP,o=t.getTTFB;s(e),r(e),n(e),i(e),o(e)}))});o.a.render(Object(d.jsx)(n.a.StrictMode,{children:Object(d.jsx)(x,{})}),document.getElementById("root")),O()}],[[23,1,2]]]);
//# sourceMappingURL=main.9600026b.chunk.js.map