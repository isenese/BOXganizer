import React from 'react';
import Logo from './Logo.jsx';
import BoxCreator from './BoxCreator.jsx';
import BoxPlacer from './BoxPlacer.jsx';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      titles: []
    };
  }

  add(title){
    this.setState({
      titles: this.state.titles.concat({ title
      })
    })
  }

  render() {
  return (
      <div className="App">
        <header className="App-header">
          <Logo />

        </header>
        <body>
          <BoxCreator add={this.add.bind(this)}/>
          <BoxPlacer titles={this.state.titles}/>
        </body>
      </div>
    );
  }
}

export default App;
