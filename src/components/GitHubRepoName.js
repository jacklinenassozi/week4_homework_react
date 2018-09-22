import React, {Component}from "react";

class RepoName extends Component{
    constructor(props){
        super(props);
       this.state={url:this.props}
       this.repoName = this.repoName.bind(this);
    }
    repoName(){
        let url=this.state.url.gitHubData + '/repos';

        fetch(url)
          .then(response => response.json())
          .then(data => {
            // Here's a list of repos!
            let name = data.map(data => (
              <li>{data.name}</li>
            ))
            this.setState({name}) 
            console.log(data)
          });
  
      } 

    render(){
        /* if (this.state.name) {
            return null;
          } */

        return(
            <div>
            <button onClick={this.repoName}>display names</button>
            {console.log(this.state)}
            {// Here's a list of repos!
             /* this.state.data.map(data => (
              <li>{data.name}</li>
            )) */ }
            <ul>{this.state.name}</ul>
            </div>
            
        )
    }
}

export default RepoName;