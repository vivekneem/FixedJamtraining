import { format } from "date-fns";
import { Link } from "gatsby";
import React from "react";
import Img from "gatsby-image";
import { cn, getBlogUrl } from "../lib/helpers";
import PortableText from "./portableText";

import styles from "./blog-post-preview.module.css";
import { responsiveTitle3 } from "./typography.module.css";

function BlogPostPreview(props) {
  return (
    <Link
      className={props.isInList ? styles.inList : styles.inGrid}
      to={getBlogUrl(props.publishedAt, props.slug.current)}
    >
      <div className={styles.leadMediaThumb}>
        {props.mainImage && props.mainImage.asset && (
          <Img
            fluid={{
              ...props.mainImage.asset.fluid,
              sizes:
                "(max-width: 512px) 10vw, (max-width: 768px) 15vw, (max-width: 1280px) 20vw, (max-width: 1680px) 25vw, 30vw"
            }}
            alt={props.mainImage.alt}
          />
        )}
      </div>
      <div className={styles.text}>
        <h3 className={cn(responsiveTitle3, styles.title)}>{props.title}</h3>
        {props._rawExcerpt && (
          <div className={styles.excerpt}>
            <PortableText blocks={props._rawExcerpt} />
          </div>
        )}
        <div className={styles.date}>{format(props.publishedAt, "MMMM Do, YYYY")}</div>
      </div>
    </Link>
  );
}

export default BlogPostPreview;
