import React from 'react';
import IndividualBox from './IndividualBox.jsx';

class BoxPlacer extends React.Component {

  constructor(props) {
    super(props);
    this.state = { title: '' };
  }

  handleChange (e) {
    this.setState ({
      title: e.target.value
    })
  }

  add(e) {
  e.preventDefault ();
  this.props.add(this.state.title);
  }

  render () {
    let titles = this.props.titles;
    return (
      <div>
        {titles.map((title) =>
          <IndividualBox
            title={title}
          />
        )}
      </div>

    )
  }
}

export default BoxPlacer;