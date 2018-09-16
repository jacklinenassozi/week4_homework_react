export function fetchGifs(searchKeyword) {
    const url = `https://api.github.com/search/users?q=${searchKeyword}`;
    //const url = `https://api.github.com/users?q=${searchKeyword}`;
    return fetch(url).then(response => response.json());
  }
  