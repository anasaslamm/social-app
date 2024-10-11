import { useState, useEffect } from "react";
import React from "react";

function Photos() {
  const [state, setState] = useState({});
  const [photoId, setPhoto] = useState(1);

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/photos/${photoId}`)
      .then((response) => response.json())
      .then((json) => setState(json));
  }, [photoId]);
  return (
    <React.Fragment>
      <h1>Photo {photoId}</h1>
      {state && (
        <div>
          <h2>{state.title}</h2>
        </div>
      )}
      {state.thumbnailUrl ? (
        <img src={state.thumbnailUrl} alt={state.url} />
      ) : (
        <p>Loading...</p>
      )}
      <br />
      <button onClick={() => setPhoto(photoId + 1)}>Next Album</button>
    </React.Fragment>
  );
}

export default Photos;
