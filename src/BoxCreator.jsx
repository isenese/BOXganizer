import React from 'react';

class BoxCreator extends React.Component {

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
    return (
      <div>
        <form  onSubmit={this.add.bind(this)}>
          <input onChange={this.handleChange.bind(this)}>
          </input>
          <input type="submit" value="Add a Topic" />
        </form>
      </div>

    )
  }
}

export default BoxCreator;