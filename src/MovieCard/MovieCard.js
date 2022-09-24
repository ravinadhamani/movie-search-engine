import React from "react";
import axios from "axios";
import styles from "./styles.module.css";
import Inputtag from "../Component/Inputtag";
import { Button } from "react-bootstrap";
import { useUserAuth } from "../Context/UserAuthContext";
import { signOut } from "firebase/auth";
import { auth } from "../firebase";
import { Router } from "react-router-dom";

export default class MovieCard extends React.Component {

  constructor(props) {
    console.log("MovieCard - constructor");
    super(props);
    this.state = {
      moviesResponse: {},
      input: " ",
      filterData: {}, query: "",
    };
    this.handleChange = this.handleChange.bind(this);
/*     this.handleLogout = this.handleLogout.bind(this);
 */  }
  handleChange(e) {

    //alert(e.target.value);
    console.log("inputtag - handleChange");
    /* this.props.onQueryChange(e.target.value); */
    console.log(this, "ravi")
    this.setState({ query: e.target.value });

    axios
      .get(
        "https://api.themoviedb.org/3/search/movie?api_key=cfe422613b250f702980a3bbf9e90716" +
        "&query=" + this.state.query
      )
      .then((res) => {
        const moviesResponse = res.data;
        this.setState({
          moviesResponse,
        });
      });
  }
  /* async handleLogout()
 {
   try {
    
     await signOut(auth);
     navigate("/"); 
     const{history}= this.props;
     history.push('/');
   } catch (error) {
     console.log(error.message);
   } 
 }  */
  componentDidMount() {
    console.log("MovieCard - componentDidMount");
    axios
      .get(
        "https://api.themoviedb.org/3/movie/popular?api_key=cfe422613b250f702980a3bbf9e90716"
      )
      .then((res) => {
        const moviesResponse = res.data;
        this.setState({
          moviesResponse,
        });
      });

  }

  componentDidUpdate() {
    console.log("MovieCard - componentDidUpdate");
  }

  render() {
    console.log("MovieCard - render");
    return (
      <>
        <div>
          <center>
            <input
              id={styles.input}
              type="text"
              placeholder="Search For Movie Title....."
              onChange={this.handleChange}
            />
          </center>
        </div>
        <div className={styles.CardDiv}>
          {this.state.moviesResponse?.results?.map((movie) => (
            <div className={styles.SubCardDiv}>
              <img
                className={styles.imgTag}
                src={"https://image.tmdb.org/t/p/original" + movie.backdrop_path}
                alt={movie.original_title}
              />
              <p className={styles.movieTitle}>{movie.title}</p>
            </div>
          ))}
          {
            this.state.moviesResponse?.total_results === 0 ?
              <div>
                No movies found
              </div> : null
          }
        </div>
      </>
    );
  }
}

