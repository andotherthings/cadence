import Card from './Card';
import CarouselDots from './CarouselDots';
import React from 'react';

export default class Carousel extends React.Component {
  constructor(){
    super()
    this.state = {
      cards: [{
        id: 1,
        question: 'What is a Promise?',
        answer: 'A promise represents the value of an asynchronous operation that is not necessarily know at the time of execution.',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 2,
        question: 'What are the states of a Promise?',
        answer: 'Pending, Fulfilled, Rejected',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Description',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 3,
        question: 'Why would you use a Promise?',
        answer: 'Promises offer an alternative to performing asynchronous operations that are easier to reason about relative to callbacks.',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise#Description',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 4,
        question: 'test',
        answer: 'test',
        resource_url: 'test',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 5,
        question: 'What are race conditions?',
        answer: 'A race condition or race hazard is the behavior of an electronic, software or other system where the output is dependent on the sequence or timing of other uncontrollable events.',
        resource_url: 'https://blog.raananweber.com/2015/06/17/no-there-are-no-race-conditions-in-javascript/',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 6,
        question: 'What is a callback?',
        answer: 'In computer programming, a callback is any executable code that is passed as an argument to other code',
        resource_url: 'https://en.wikipedia.org/wiki/Callback_(computer_programming)',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 7,
        question: 'What is a variable?',
        answer: 'JavaScript variables are containers for storing data values.',
        resource_url: 'http://www.w3schools.com/js/js_variables.asp',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }],
      currentCard: {
        id: 1,
        question: 'What is a Promise?',
        answer: 'A promise represents the value of an asynchronous operation that is not necessarily know at the time of execution.',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Promise',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      },
      cardIdx: 0
    };
    this.cardsForward = this.cardsForward.bind(this);
    this.cardsBack = this.cardsBack.bind(this);
  }

  cardsForward() {
    const incrementedIndex = this.state.cardIdx + 1;

    if (this.state.cards[incrementedIndex]) {
      this.setState({
        cardIdx: incrementedIndex,
        currentCard: this.state.cards[incrementedIndex],
      });
    }
  }

  cardsBack() {
    const decrementedIndex = this.state.cardIdx - 1;

    if (this.state.cards[decrementedIndex]) {
      this.setState({
        cardIdx: decrementedIndex,
        currentCard: this.state.cards[decrementedIndex],
      });
    }
  }

  render() {
    return (
      <div className="carousel">
        <div className="row">
          <div className="one columns"> <a href="#" onClick={this.cardsBack}>◀︎</a> </div>
          <Card card={this.state.currentCard}/>
          <div className="one columns"> <a href="#" onClick={this.cardsForward}>▶︎</a> </div>
        </div>
        <div className="row carousel-dots">
          <CarouselDots dotCount={this.state.cards.length} currentDot={this.state.cardIdx}/>
        </div>
      </div>
    );
  }
}
