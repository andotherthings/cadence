/* eslint-disable max-len, camelcase */

exports.seed = function (knex) {
  return knex('cards').del()
    .then(() => {
      return knex('cards').insert([{
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
      }, {
        id: 8,
        question: 'What is a primitive?',
        answer: 'A primitive (primitive value, primitive data type) is data that is not an object and has no methods. Most of the time, a primitive value is represented directly at the lowest level of the language implementation. All primitives are immutable.',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Glossary/Primitive',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 9,
        question: 'What are javscript\'s primitive data types?',
        answer: 'string, number, boolean, null, undefined, symbol (new in ECMAScript 2015).',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Glossary/Primitive',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 10,
        question: 'What is an assignment operator and what does it do?',
        answer: 'An assignment operator assigns a value to its left operand based on the value of its right operand',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Assignment_operators',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 11,
        question: 'What are the comparison operators?',
        answer: 'Equal (==), Not equal (!=), Strict equal, Strict not equal (!==), Greater than (>), Greater than or equal (>=), Less than (<), Less than or equal (<=)',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Comparison_operators',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 12,
        question: 'What are the arithmetic operators?',
        answer: 'Remainder (%), Increment (++), Decrement (--), Unary negation (-), Unary plus (+)',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Arithmetic_operators',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 13,
        question: 'What is an expression?',
        answer: 'An expression is any valid unit of code that resolves to a value.',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Expressions_and_Operators#Expressions',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 14,
        question: 'What is a statement?',
        answer: 'A statement is an instruction that the interpreter executes.',
        resource_url: 'http://www.w3schools.com/js/js_statements.asp',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 15,
        question: 'What are the five parts of an HTTP request?',
        answer: 'Method, path, version of protocol, optional header, optional body',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#Requests',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 16,
        question: 'What are the five parts of an HTTP response?',
        answer: 'Version of the protocol, status code, status message, headers, optional body',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Overview#Responses',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 17,
        question: 'What is MIME type?',
        answer: 'The MIME type is the mechanism to tell the client the variety of document transmitted',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Basics_of_HTTP/MIME_Types',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 18,
        question: 'What does a 3xx status code indicate?',
        answer: 'Redirection',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Redirection_messages',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 19,
        question: 'What does a 2xx status code indicate?',
        answer: 'Successful response',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Successful_responses',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 20,
        question: 'What does a 1xx status code indicate?',
        answer: 'Information response',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Successful_responses',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 21,
        question: 'What does a 4xx status code indicate?',
        answer: 'Client error response',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Client_error_responses',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }, {
        id: 22,
        question: 'What does a 5xx status code indicate?',
        answer: 'Server error response',
        resource_url: 'https://developer.mozilla.org/en-US/docs/Web/HTTP/Status#Server_error_responses',
        created_at: new Date('2016-06-26 14:26:16 UTC'),
        updated_at: new Date('2016-06-26 14:26:16 UTC'),
      }]);
    })
    .then(() => {
      return knex.raw('SELECT setval(\'cards_id_seq\', (SELECT MAX(id) FROM cards));');
    });
};
