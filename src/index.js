import React from 'react';
import ReactDOM from 'react-dom';
import Header from './Header';
import GitHubSearch from './components/GitHubSearch';
import "./style.css";


const root = document.getElementById("root");
function App(){
    return(
        <div id ='react_app'>
        <Header />
        <GitHubSearch />
        </div>
    )
}


ReactDOM.render(<App />, root);