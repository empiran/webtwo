import React from 'react'
import {AppBar, Toolbar, IconButton, Badge, MenuItem, Menu, Typography } from '@material-ui/core';
import { ShoppingCart } from '@material-ui/icons';


import logo from '../../assets/flurokit mock logo.png';
import useStyles from './styles';

const Navbar = () => {
    const classes = useStyles();
  return (
    <div>
        <AppBar position="fixed" className={classes.appBar} color="inherit">
            <Toolbar>
                <Typography variant="h6" className={classes.title} color="inherit">
                    <img src={logo} alt="Flurokit.js" height="25px" className={classes.image} />
                    Flurokit.js
                </Typography>
                <div className={classes.grow} />
                <div className={classes.button}>
                    <IconButton aria-label="Show car items" color="inherit">
                        <Badge badgeContent={4} color="secondary">
                            <ShoppingCart />
                        </Badge>
                    </IconButton>
                </div>
            </Toolbar>
        </AppBar>
    </div>
  )
}

export default Navbar