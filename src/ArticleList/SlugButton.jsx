
import React from 'react'
import PropTypes from 'prop-types'
import styles from './SlugButton.module.css'


const SlugButton = props => {
    return (
        <button class={styles.slugButton} onClick={() => alert(`${props.slug}`)}>{props.author}</button>
    );
};

SlugButton.propTypes = {
    articles: PropTypes.array.isRequired
  };
export default SlugButton;