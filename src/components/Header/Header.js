import React from 'react';
import { Typography, Button, Toolbar, AppBar } from '@material-ui/core';
import logo from "../../logo.svg";
// import { Link, Router } from "react-router-dom";
import { Link } from "react-router-dom";
// import Registration from '../Registration';

class Header extends React.Component {


    render() {

        return (
            <div>
                <AppBar position="static" >
                    <Toolbar>
                        <img src={logo} alt="react" height="100" width="50"></img>
                        <Typography variant="h6"> React World </Typography>

                        <div >
                            <Link to="/register" className="btn btn-primary" style={{ textAlign: 'left', marginLeft: 400 }}> Registration </Link>
                            
                            <Link to="/login" className="btn btn-primary" style={{ marginLeft: 100, float: "right"}}>Login </Link>
                        </div>

                        
                    </Toolbar>
                </AppBar>
            </div>
        )
    }
}

export default Header;