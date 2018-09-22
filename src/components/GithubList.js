import React from "react";
import RepoName from "./GitHubRepoName"

class GithubList extends React.Component {
  constructor(props) {
    super(props);
    this.state = {}
    
  };



  render() {
    const {gits, isFirstTime} = this.props;

    // const urlRepo = gits
    //   .map(git => git.url + '/repos')
    //   .filter(x => x === 'https://api.github.com/users/HackYourFuture-CPH/repos')
    // console.log(urlRepo);

    
    return (
      
      <div className="gifs-list">
        {isFirstTime && "type something to search for"}
        {!isFirstTime && (gits.length < 1
          ? (
            <p>no user</p>
          )
          : (gits.map(git => (

            <div className="gif" key={git.id}>
              <div >{git.login}
              </div>
              <div>{git.html_url
              }</div>
              <img src= {git.avatar_url} alt=""/>
              <RepoName gitHubData={git.url}/>
              
              <ul>{this.state.name}</ul>
            </div>

          ))))}

      </div>
    );
  }
}

export default GithubList;
