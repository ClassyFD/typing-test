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

  componentDidMount() {
    this.generateLine(3);
  }

  generateLine = (amount) => {
    
  }

  render() {
    return (
      <main className="Typing">
        <section className="typing-header-section">
          <h1>Typing Speed Test</h1>
        </section>
        <section className="typing-line-section">
          <div className="typing-line typing-line-previous">
          asdfj asdfj asdfj asdfj adsfj asdfj adsfj adfsj
          </div>
          <div className="typing-line typing-line-current">
          asdf
          </div>
          <div className="typing-line typing-line-next">
          asdf
          </div>
        </section>
        <section className="typing-word-section">
          <input></input>
        </section>
        <section className="typing-instructions-section">
          <h1>Instructions</h1>
          <ol>
            <li>Click on the specified typing area.</li>
            <li>Relax, and position your fingers on the keyboard.</li>
            <li>Begin typing whenever you're ready!</li>
          </ol>
        </section>
        <section className="typing-info-section">
          <h1>F.A.Q</h1>
          <h2>What's WPM?</h2>
          <p>WPM is short for Words Per Minute.</p>
          <h2>How is WPM calculated?</h2>
          <p>WPM is calculated by number of correctly typed CPM (Characters per minute) divided by 5.</p>
          <h2>How can I improve my typing speed?</h2>
          <p>Practice on a regular basis. You should focus not only on speed, but on accuracy as well.</p>
          <h2>Who's the fastest typer in the world?</h2>
          <p>In 2005, Barbara Blackburn (officially) reached a peak typing speed of 212 WPM.</p>
        </section>
      </main>
    )
  }
}
export default Typing;