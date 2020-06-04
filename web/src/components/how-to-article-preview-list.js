import React from "react";
import HowToArticlePreview from "./how-to-article-preview";

import styles from "./blog-post-preview-list.module.css";

const HowToArticlePreviewList = props => {
  return (
    <div className={styles.root}>
      {props.headline && <h2 className={styles.headline}>{props.headline}</h2>}
      <ul className={styles.grid}>
        {props.nodes &&
          props.nodes.map(node => (
            <li key={node.id}>
              <HowToArticlePreview {...node} />
            </li>
          ))}
      </ul>
    </div>
  );
};

HowToArticlePreviewList.defaultProps = {
  headline: "",
  nodes: []
};

export default HowToArticlePreviewList;
