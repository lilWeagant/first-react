import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class FlipImage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
        image: this.props.a,
        imageIsA : true,
    }
  }
  render() {

    if (this.state.imageIsA){
      return (
        <img src={this.state.image} alt = "first image"
        onClick={() => this.setState({image: this.props.b, imageIsA: false,})}/>
      )
    } else {
      return (
        <img src={this.state.image} alt = "first image"
        onClick={() => this.setState({image: this.props.a, imageIsA: true,})}/>
      )
    }
  }
}

ReactDOM.render(
  <FlipImage
	 a="https://upload.wikimedia.org/wikipedia/commons/0/0b/Cat_poster_1.jpg"
	 b="https://upload.wikimedia.org/wikipedia/commons/d/d9/Collage_of_Nine_Dogs.jpg"
  />,
  document.getElementById('root')
);
