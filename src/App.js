import React from "react";
import Inputtag from "./Component/Inputtag";
import MovieCard from "./MovieCard/MovieCard";
import "./App.css";
//import Home from "./Component/Home";
import Login from "./Component/Login";
import Signup from "./Component/Signup";
//import ProtectedRoute from "./Component/ProtectedRoute";
import { UserAuthContextProvider } from "./Context/UserAuthContext";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import ProtectedRoute from "./Component/ProtectedRoute";

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log("app.js - constructor");
    this.onQueryChange = this.onQueryChange.bind(this);
    this.state = {
      movieQuery: "",
    };
  }

  onQueryChange(movieQuery) {
    console.log("app.js - onQueryChange");
    //alert(movieQuery);
    this.setState({ movieQuery });
  }

  render() {
    console.log("app.js - render");
    const movieQuery = this.state.movieQuery;
    return (
      <>
        <BrowserRouter>
          <UserAuthContextProvider>
            <Routes>
              <Route path="/" element={<ProtectedRoute>
                <Login />
              </ProtectedRoute>} />
              <Route path="/signup" element={<ProtectedRoute><Signup /></ProtectedRoute>} />
              <Route path="/MovieCard" element={<ProtectedRoute><MovieCard movieQuery={movieQuery} onQueryChange={this.onQueryChange} /></ProtectedRoute>} />
            </Routes>
          </UserAuthContextProvider>
        </BrowserRouter>
      </>
    );
  }
}

export default App;