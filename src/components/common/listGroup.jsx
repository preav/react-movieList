import React from "react";

const ListGroup = ({
  genres,
  onGenreSelect,
  textProperty,
  valueProperty,
  selectedGenre
}) => {
  return (
    <ul className="list-group">
      {genres.map(genre => (
        <li
          className={
            selectedGenre === genre
              ? "list-group-item active"
              : "list-group-item"
          }
          key={genre[valueProperty]}
          onClick={() => onGenreSelect(genre)}
          style={{ cursor: "pointer" }}
        >
          {genre[textProperty]}
        </li>
      ))}
    </ul>
  );
};

ListGroup.defaultProps = {
  textProperty: "name",
  valueProperty: "_id"
};

export default ListGroup;
