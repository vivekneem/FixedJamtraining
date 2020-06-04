import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { cn, getHowToUrl } from "../lib/helpers";
import styles from "./blog-post-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

const HowToArticlePreview = props => {
  return (
    <Link className={styles.inList} to={getHowToUrl(props.slug.current)}>
      <div className={styles.leadMediaThumb}>
        {props.heroImage && props.heroImage.asset && (
          <Img
            fluid={{
              ...props.heroImage.asset.fluid,
              sizes:
                "(max-width: 512px) 10vw, (max-width: 768px) 15vw, (max-width: 1280px) 20vw, (max-width: 1680px) 25vw, 30vw"
            }}
            alt={props.heroImage.alt}
          />
        )}
      </div>
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.headline}</h3>

        <div className={styles.date}>{format(props.publishedAt, "MMMM Do, YYYY")}</div>
      </div>
    </Link>
  );
};

export default HowToArticlePreview;
