import React from 'react';

export default class CarouselDots extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      dotSequence: '',
    };
  }

  componentWillReceiveProps(nextProps){
    let sequence = '';

    for (let i = 0; i < this.props.dotCount; i++) {
      i !== nextProps.currentDot ? sequence += '●' : sequence += '○';
    }

    this.setState({dotSequence: sequence})
  }

  render () {
    return (
      <div className="dots twelve columns"> {this.state.dotSequence} </div>
    );
  }
}
