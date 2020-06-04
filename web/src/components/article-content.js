import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import EmblaCarousel from "./embelaCarousel";
import Img from "gatsby-image";

const useStyles = makeStyles(theme => ({
  markdown: {
    ...theme.typography.body2,
    padding: theme.spacing(3, 0)
  }
}));

const Main = ({ productList }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12} md={8}>
      <Typography variant="h6" gutterBottom>
        Products
      </Typography>
      <Divider />
      <EmblaCarousel>
        {productList.map(p => (
          <div key={p.productName} className={classes.markdown}>
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
    </Grid>
  );
};

export default Main;
