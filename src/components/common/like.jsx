import React from "react";

const Like = ({ movie, onLike }) => {
  let classes = "fa fa-heart";
  classes += movie.liked ? "" : "-o";
  return (
    <i
      className={classes}
      aria-hidden="true"
      onClick={onLike}
      style={{ cursor: "pointer" }}
    ></i>
  );
};

export default Like;
