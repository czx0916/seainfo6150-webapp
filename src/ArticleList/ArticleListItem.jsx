import React from 'react'
import PropTypes from 'prop-types'
import SlugButton from './SlugButton'
import styles from './ArticleListItem.module.css'

const ArticleListItem = props => {
    return (
        <section class={styles.article_tag}>
            <h2  class={styles.title}>{props.article.title}</h2>
            <p>{props.article.shortText}</p>
            <time class={styles.time}dateTime={props.article.pubYear}>{props.article.pubDate}</time>
            <SlugButton author={props.article.author} slug={props.article.slug} />
        </section>
    );
};

ArticleListItem.propTypes = {
    articles: PropTypes.array.isRequired
  };
export default ArticleListItem;