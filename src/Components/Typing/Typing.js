import React, { Component } from 'react';
import './Typing.css';

class Typing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      previousWord: undefined,
      currentWord: undefined,
      previousLine: undefined,
      currentLine: undefined,
      nextLine: undefined,
    }
  }
  render() {
    return (
      <main className="Typing">
        <section className="typing-header-section">
          <h1>Typing Speed Test</h1>
        </section>
        <section className="typing-line-section"></section>
        <section className="typing-word-section"></section>
        <section className="typing-instructions-section">
          <h1>Instructions</h1>
        </section>
      </main>
    )
  }
}
export default Typing;