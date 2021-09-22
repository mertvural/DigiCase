import React from 'react'
import { Link } from "react-router-dom";
import { makeStyles } from "@material-ui/core/styles";

import {
  Button
} from "@material-ui/core";

const useStyles = makeStyles((theme) => ({
    button: {
        background: "#fff",
        fontWeight:"bold",
        color:"#333",
        border:0,
        padding:"0 30px",
        height:"40px",
        cursor:"pointer",
        marginTop:"20px",
        textAlign:"center",
        lineHeight:"40px",
        display:"inline-block"
    }   
  }));

const List = (props) => {

    const classes = useStyles();

    return (
        <div className="films__list">
            <figure>
                <img src={props.Poster} className="films__list--image" alt="Poster" />
            </figure>
            <figcaption className="films__list--infos">
                <h3>
                    {props.Title}
                </h3>
                <p>
                    {props.Type}
                </p>
                <p>
                    {props.Year}
                </p>

                <Button size="small" color="primary">
                    <Link className={classes.button} to={`/detail/id=${props.imdbID}`}>Detail</Link>
                </Button>
            </figcaption>
        </div>
    )
}

export default List
