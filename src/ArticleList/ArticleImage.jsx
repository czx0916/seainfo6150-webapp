import React from 'react'
import PropTypes from 'prop-types'


const ArticleImage = props => {
    return (
        <img alt={props.title} src={props.url} />
    );
};

ArticleImage.propTypes = {
    articles: PropTypes.array.isRequired
  };
export default ArticleImage;