import React from "react";
import GithubList from "./GithubList";
import { fetchGifs } from "../api";



class GitHubSearch extends React.Component {
  constructor(props) {
    super(props);
    this.state = { searchKeyword: "", gits: [], isFirstTime: true };
    this.search = this.search.bind(this);
  }

  search() {
    fetchGifs(this.state.searchKeyword).then(body => {
      console.log('body ', body);
       this.setState({ gits: body.items, isFirstTime: false })
       
    }
    );
  }
  
  render() {
    const { searchKeyword, gits, isFirstTime } = this.state;
    const login = gits.map(function(element) {
      return element.login;
    }).forEach(x=>x);
    
    return (
      <div className="github">
        <div className="search">
          <input
            placeholder="search for user"
            onChange={e => {
              this.setState({ searchKeyword: e.target.value });
            }}
            value={searchKeyword}
          />
          <button onClick={this.search}>Search</button>
          <GithubList login = {login} gits={gits} isFirstTime={isFirstTime} />
        </div>
      </div>
    );
  }
}

export default GitHubSearch;
