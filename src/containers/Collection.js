import React from "react";

const Collection = ({ savedItems }) => {
  return savedItems.map((data) => (
    <div key={data.id}>
      <h1>{data.title}</h1>
    </div>
  ));
};

export default Collection;
