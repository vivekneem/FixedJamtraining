import React from "react";
import EmblaCarousel from "./embelaCarousel";
import styles from "./blog-post.module.css";
import Img from "gatsby-image";
import Container from "./container";

const HowToArticle = ({ heroImage, headline, subheading, productList, tags }) => {
  return (
    <article className={styles.root}>
      {heroImage && heroImage.asset && (
        <div className={styles.mainImage}>
          <Img
            fluid={{
              ...heroImage.asset.fluid,
              sizes:
                "(max-width: 512px) 10vw, (max-width: 768px) 20vw, (max-width: 1280px) 30vw, (max-width: 1680px) 40vw, 50vw"
            }}
          />
        </div>
      )}
      <Container>
        <div className={styles.grid}>
          <div className={styles.mainContent}>
            <h1 className={styles.title}>{headline}</h1>
            <p>{subheading}</p>

            <h2 style={{ textAlign: "center" }}>Embla Slider</h2>

            <EmblaCarousel>
              {productList.map(p => (
                <div key={p.productName}>
                  <Img
                    fluid={{
                      ...p.productImage.asset.fluid,
                      sizes:
                        "(max-width: 512px) 20vw, (max-width: 768px) 35vw, (max-width: 1280px) 50vw, (max-width: 1680px) 70vw, 90vw"
                    }}
                    alt={p.productImage.asset.alt}
                  />
                  <div>{p.productName}</div>
                </div>
              ))}
            </EmblaCarousel>
          </div>
          <aside className={styles.metaContent}>
            <h2>Related Articles</h2>
            {tags &&
              tags.map(tag => {
                return <p>{tag.tagName}</p>;
              })}
          </aside>
        </div>
      </Container>
    </article>
  );
};

export default HowToArticle;
