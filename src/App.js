import React, { Fragment, Component } from 'react';
import './App.css';
import Navbar from './components/header/Navbar';
import axios from 'axios';
import Articles from './components/news/Articles';

class App extends Component {
  state = {
    articles: [],
    loading: false,
  };

  async componentDidMount() {
    const res = axios.get(
      `https://newsapi.org/v2/top-headlines?country=in&apiKey=${process.env.REACT_APP_NEWSAPI_KEY}`
    );

    this.setState({ articles: (await res).data.articles });
  }

  render() {
    return (
      <Fragment>
        <Navbar />
        <Articles articles={this.state.articles} />
      </Fragment>
    );
  }
}

export default App;
