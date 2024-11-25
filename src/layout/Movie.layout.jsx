import React from "react";
import MovieNavbar from "../components/Navbar/MovieNavbar.Component";

const MovieLayoutHoc =
  (Component) =>
  ({ ...props }) => {
    return <div>
        <MovieNavbar />
        <Component {...props} />
        <div></div> 
    </div>;
  };

export default MovieLayoutHoc;