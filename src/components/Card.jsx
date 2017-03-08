import Button from './Button';
import React from 'react';

export default class Card extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      obverseIsVisible: true,
    }
    this.flipCard = this.flipCard.bind(this);
  }

  flipCard(){
    this.state.obverseIsVisible === true ? this.setState({obverseIsVisible: false}): this.setState({obverseIsVisible: true});
  }

  componentWillReceiveProps(){
    this.setState({obverseIsVisible: true})
  }

  render() {
    return (
      <div className="card ten columns">
        <div className="card-header">
          <div className="card-flip"> <a href="#" onClick={this.flipCard}>Flip</a> </div>
        </div>
        {this.state.obverseIsVisible ? <div className="card-question">{this.props.card.question}</div>: <div className="card-answer">{this.props.card.answer}</div>}
        <Button />
        <Button />
      </div>
    );
  }
}
