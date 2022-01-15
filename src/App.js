import React from "react";
import {Grid} from '@material-ui/core';
import Main from "./components/Main/Main.jsx";
import Details from "./components/Details/Details";
import useStyles from './styles';
const App = () => {
    const classes = useStyles();
    return (
        <div>
            <Grid className ={classes.grid} container spacing={0} alignItems = "center" justifyContent = "center" style ={{height:'100vh'}}>
                <Grid item xs ={12} sm ={4}>
                    <Details title ="Доход"/>
                </Grid>
                <Grid item xs ={12} sm ={3}>
                    <Main/>
                </Grid>
                <Grid item xs ={12} sm ={4}>
                    <Details title ="Расход"/>
                </Grid>



            </Grid>
            
           
        </div>
    );
}
export default App;