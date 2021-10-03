import React from 'react';
import SearchBar from './SearchBar';
import YouTube from '../apis/YouTube';

class App extends React.Component {

  onSearchSubmit = term => {
    console.log(term);
    YouTube.get(
      'search',
      {
        params: {
          q: term,
        }
      },
    ).then(result => {
      console.log(result);
    });
  };

  render() {
    return (
      <div className={'ui container'}>
        <SearchBar
          onSubmit={this.onSearchSubmit}
        />
      </div>
    );
  }
}

export default App;
