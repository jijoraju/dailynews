import React, { Component } from 'react';
import ArticleItem from './ArticleItem';

export default class Articles extends Component {
  render() {
    return (
      <div className='container-fluid mt-4 card-columns'>
        {this.props.articles.map((article) => (
          <ArticleItem key={article.source.key} article={article} />
        ))}
      </div>
    );
  }
}
