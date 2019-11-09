import React from "react";
import PropTypes from 'prop-types'
import ArticleListItem from "./ArticleListItem";
import styles from './ArticleList.module.css'

const ArticleList = props => {
  return (
    <ul class={styles.feedlist}>
      {props.articles.map(article => (
        <li class={styles.list} key={article.slug}><ArticleListItem article={article} /></li>
      ))}
    </ul>
  );
};

ArticleList.propTypes = {
  articles: PropTypes.array.isRequired
};
export default ArticleList;