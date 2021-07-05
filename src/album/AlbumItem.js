import React from "react";
import placeholder from "./placeholder.svg";
import "./AlbumItem.css";

const AlbumItem = ({ albums }) => {
  return (
    <div>
      {albums.length ? (
        albums.map((ele) => (
          <li className="album-item" key={ele.id}>
            <img src={ele.url}></img>
            <h3> {ele.title}</h3>
          </li>
        ))
      ) : (
        <div className="album-loading">
          <img src={placeholder} alt="loading..."></img>
          <h5>Your albums are getting loaded....</h5>
        </div>
      )}
    </div>
  );
};

export default AlbumItem;
