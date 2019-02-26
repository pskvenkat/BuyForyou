import React from 'react';
import PropTypes from "prop-types";
import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import ButtonBase from '@material-ui/core/ButtonBase';
import Button from '@material-ui/core/Button';
import { Link } from "react-router-dom";

import productdetails from './product_details'

const styles = theme => ({
    root: {
        flexGrow: 1,
        margin: 10,
      },
    paper: {
      padding: theme.spacing.unit * 2,
      textAlign: 'center',
      color: theme.palette.text.secondary,
    },
    image: {
        width: 'auto',
      },
      img: {
        margin: 'auto',
        display: 'block',
        maxWidth: '100%',
        maxHeight: '100%',
      },
      secondary: {
        main: '#c51162',
      },
      button: {
        margin: 0,
        fontSize:12,
      },
      leftIcon: {
        marginRight: theme.spacing.unit,
      },
      rightIcon: {
        marginLeft: theme.spacing.unit,
      },
      iconSmall: {
        fontSize: 20,
      },
  });

  const ProductItems1212 = (props) => {
    const { classes } = props;
    const  prod  = props.items;
    console.log(prod);

    return (
    <Grid container  alignItems="center" justify="center" className={styles.root} spacing={32}>
        <Grid container  item xs={8} spacing={24}>
           
        </Grid>
    </Grid>
    )
  }


const ProductItems = (props) => {
    const { classes } = props;
    const  prod  = props.items;
    const quty = 1;

    return (
        <Grid item xs={6} sm={3}>
            <Paper className={classes.paper}>
                <Grid item>
                    <ButtonBase className={classes.image}>
                        <Link to={`/details/${prod.id}`} ><img className={classes.img} alt="complex" src={prod.image} /></Link>
                    </ButtonBase>
                </Grid>
                <Grid item xs={12} sm container>
                    <Grid item xs container direction="column" spacing={16}>
                        <Grid item xs >
                            <Typography gutterBottom variant="subtitle1" className="prod_title">{prod.name} </Typography>
                            <Typography variant="subtitle1" className="prod_price">Price: ₹​{prod.price}</Typography>
                        </Grid>
                        <Grid item>
                            <Button variant="contained" color="secondary" className={classes.button} onClick={props.addToCartSuccess.bind(null, prod.id, prod.price, prod.name, quty, prod.quantity)}> Add to Cart 
                               
                            </Button>
                        </Grid>
                    </Grid>
                </Grid>
            </Paper>
        </Grid>
    )
}

ProductItems.propTypes = {
    classes: PropTypes.object.isRequired,
  };

export default withStyles(styles)(ProductItems);