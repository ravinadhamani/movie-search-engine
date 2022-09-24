import React from "react";
import styles from "./inputstyles.module.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router";
import { useUserAuth } from "../Context/UserAuthContext";


class Inputtag extends React.Component {
  constructor(props) {
    super(props);
    console.log("inputtag - constructor");
    this.handleChange = this.handleChange.bind(this);
  }
  onQueryChange(movieQuery) {
    console.log("app.js - onQueryChange");
    //alert(movieQuery);
    this.setState({ movieQuery });
  }

  handleChange(e) {
    //alert(e.target.value);
    console.log("inputtag - handleChange");
    this.props.onQueryChange(e.target.value);
  }


  render() {
    console.log("inputtag - render");
    return (
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
    );
  }
}

export default Inputtag;
