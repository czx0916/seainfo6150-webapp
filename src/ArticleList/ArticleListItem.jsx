import React from 'react'
import PropTypes from 'prop-types'

const ArticleListItem = props => {
    return (
        <section>
            <h2>{props.article.title}</h2>
            <p>{props.article.author}</p>
            <time dateTime={props.article.pubYear}>{props.article.pubDate}</time>
            <button onClick={() => alert(`${props.article.slug}`)}>show article slug</button>
        </section>
    );
};

ArticleListItem.propTypes = {
    articles: PropTypes.array.isRequired
  };
export default ArticleListItem;
