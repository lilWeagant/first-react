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
        <img src={this.state.image} alt = "curling collage"
        onClick={() => this.setState({image: this.props.b, imageIsA: false,})}/>
      )
    } else {
      return (
        <img src={this.state.image} alt = "pokemon collage"
        onClick={() => this.setState({image: this.props.a, imageIsA: true,})}/>
      )
    }
  }
}

ReactDOM.render(
  <FlipImage
	 a="https://s17962.pcdn.co/wp-content/blogs.dir/58/files/2018/09/collage2.jpg"
	 b="https://cdn.unifiedcommerce.com/content/product/large/079346117697.jpg"
  />,
  document.getElementById('root')
);
