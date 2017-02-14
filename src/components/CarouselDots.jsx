import React from 'react';

export default class CarouselDots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dotSequence: '',
    }
    this.createDotSequence = this.createDotSequence.bind(this);
  }

  createDotSequence(propsSource){
    let sequence = '';

    for (let i = 0; i < this.props.dotCount; i++) {
      i !== propsSource.currentDot ? sequence += '●' : sequence += '○';
    }

    this.setState({dotSequence: sequence})
  }

  componentDidMount(nextProps, nextState){
    this.createDotSequence(this.props);
  }

  componentWillReceiveProps(nextProps){
    this.createDotSequence(nextProps);
  }

  render () {
    return (
      <div className="dots twelve columns"> {this.state.dotSequence} </div>
    );
  }
}