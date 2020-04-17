import React, { Component } from 'react';

export default class Articles extends Component {
  render() {
    return (
      <div>
        {this.props.articles.map((article) => (
          <p>{article.title}</p>
        ))}
      </div>
    );
  }
}
