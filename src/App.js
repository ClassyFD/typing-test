import React, { Component } from 'react';
import Typing from './Components/Typing';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      wordArr: [],
    }
  }

  componentWillMount = () => {
    const wordArr = [
      "the","of","and","anytime","to","in","is","you","that","it","he","was",
      "for","on","are","as","with","his","they","I","at","be","this","have",
      "from","or","one","had","by","word","but","not","what","all","were",
      "we","when","your","can","said","there","use","an","each","which",
      "she","do","how","their","if","will","up","other","about","out","many",
      "then","them","these","so","some","her","would","make","like","him",
      "into","time","has","look","two","more","write","go","see","number",
      "no","way","could","people","my","than","first","water","been","call",
      "who","oil","its","now","find","long","down","day","did","get","come",
      "made","may","part","sometimes", "development", "working", "question", 
      "remember", "words", "contain", "already", "application", "attribute", 
      "browse", "bug", "class", "cookies", "convert", "crawl", "domain", "field", 
      "firewall", "framework", "react", "navigation", "open", "close", "redirect", 
      "resolve", "serve", "ready",
    ];
    this.setState({
      wordArr,
    })
  }

  render() {
    return (
      <div className="App">
        <Typing words={this.state.wordArr}/>
      </div>
    );
  }
}

export default App;
