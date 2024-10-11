import { useState, useEffect } from "react";
import React from "react";

function Albums() {
  const [state, setState] = useState({});
  const [albumId, setAlbum] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${albumId}`)
      .then((response) => response.json())
      .then((json) => setState(json));
  }, [albumId]);
  return (
    <React.Fragment>
      <h1>Post {albumId}</h1>
      {state && (
        <div>
          <h2>{state.name}</h2>
          <p>{state.body}</p>
        </div>
      )}
      <br />
      <button onClick={() => setAlbum(albumId + 1)}>Next Album</button>
    </React.Fragment>
  );
}

export default Albums;
