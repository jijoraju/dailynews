import React from 'react';

const ArticleItem = ({ article }) => {
  return (
    <div className='card'>
      {article.urlToImage && (
        <img src={article.urlToImage} className='card-img-top' alt='...' />
      )}
      <div className='card-body'>
        <h5 className='card-title'>{article.title}</h5>
        <p className='card-text'>{article.description}</p>

        <footer class='blockquote-footer text-right'>
          <small>
            {article.author} in{' '}
            <cite title='Source Title'>{article.source.name}</cite>
          </small>
        </footer>
      </div>
    </div>
  );
};

export default ArticleItem;
