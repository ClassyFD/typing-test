import React, { Component } from 'react';
import './Typing.css';

class Typing extends Component {
  constructor(props) {
    super(props)
    this.state = {
      previousWord: undefined,
      currentWord: 0,
      previousLine: undefined,
      currentLine: undefined,
      nextLine: undefined,
    }
  }

  componentWillMount() {
    this.generateLine('mounting');
  }
  componentDidMount() {
    this.updateWord('start');
  }

  generateLine = (mounting) => {
    const { words } = this.props;
    let wordArr = [];
    let lineLength = 0;

    while (lineLength < 48) {
      const randomIndex = Math.floor(Math.random() * words.length);
      const randomWord = words[randomIndex];
      if ((randomWord.length + 1 + lineLength) < 51) {
        lineLength += (randomWord.length + 1);
        wordArr.push(randomWord);
      } else {
        break;
      }
    }

    if (mounting) {
      let wordArrNext = [];
      let lineLengthNext = 0;
      while (lineLengthNext < 48) {
        const randomIndex = Math.floor(Math.random() * words.length);
        const randomWord = words[randomIndex];
        if ((randomWord.length + 1 + lineLengthNext) < 51) {
          lineLengthNext += (randomWord.length + 1);
          wordArrNext.push(randomWord);
        } else {
          break;
        }
      }
      this.setState({
        previousLine: this.state.currentLine,
        currentLine: wordArr,
        nextLine: wordArrNext,
      })
    } else {
      this.setState({
        previousLine: this.state.currentLine,
        currentLine: this.state.nextLine,
        nextLine: wordArr,
      })
    }
  }

  updateWord = (type) => { 
    const currentWordRef = this.currentWordRef;
    console.log(type)
    console.log(currentWordRef);
    setTimeout(() => {
      console.log(document.getElementsByClassName('current-line-span')[0].offsetLeft);
    }, 100);
  }

  render() {
    let previousLine = '\u00A0';
    let currentLine = [];
    let nextLine = [];
    let currentWord = '';
    if (this.state.previousLine) {
      previousLine = this.state.previousLine.map((cEl, cIn)=>{
        return cEl + (cIn + 1 === this.state.previousLine.length? '' : ' ');
      })
    }
    if (this.state.currentLine) {
      currentLine = this.state.currentLine.map((cEl, cIn)=>{
        return <span key={`current-line-span-key-${cIn}`} className={`current-line-span current-line-span-${cIn}`}>{cEl}{(cIn + 1 === this.state.currentLine.length? '' : ' ')}</span>;
      })
    }
    if (this.state.nextLine) {
      nextLine = this.state.nextLine.map((cEl, cIn)=>{
        return cEl + (cIn + 1 === this.state.nextLine.length? '' : ' ');
      })
    }
    if (this.state.currentLine && this.state.currentLine[this.state.currentWord]) {
      currentWord = this.state.currentLine[this.state.currentWord];
    }
    
    return (
      <main className="Typing">
        <section className="typing-header-section">
          <h1>Typing Speed Test</h1>
        </section>
        <section className="typing-line-section">
          <div className="typing-line typing-line-previous">
            {previousLine}
          </div>
          <div className="typing-line typing-line-current">
            {currentLine}
            <span className="typing-highlight">
              <p ref={e=>this.currentWordRef = e}>{currentWord}</p>
            </span>
          </div>
          <div className="typing-line typing-line-next">
            {nextLine}
          </div>
        </section>
        <section className="typing-word-section">
          <input placeholder="Type here"></input>
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