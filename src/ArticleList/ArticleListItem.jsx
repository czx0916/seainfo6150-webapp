
import React from 'react'
import PropTypes from 'prop-types'
import SlugButton from './SlugButton'
import styles from './ArticleListItem.module.css'
import ArticleImage from './ArticleImage';

const ArticleListItem = props => {
    return (
        <section className={styles.article_tag}>
            <div class={`${styles.img_wrapper} ${styles.clearfix}`}>
                <ArticleImage title={props.article.title} url={props.article.image._url}/>
            </div>
            <div class={styles.content}>
                <h2  class={styles.title}>{props.article.title}</h2>
                <p>{props.article.shortText}</p>
                <time class={styles.time}dateTime={props.article.pubYear}>{props.article.pubDate}</time>
            </div>
            <SlugButton author={props.article.author} slug={props.article.slug} />
        </section>
    );
};

ArticleListItem.propTypes = {
    articles: PropTypes.array.isRequired
  };
export default ArticleListItem;