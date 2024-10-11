import React, { useEffect, useState } from "react";

function Comments() {
  const [state, setState] = useState({});
  const [comments, setComments] = useState(1);
  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/comments/${comments}`)
      .then((response) => response.json())
      .then((json) => setState(json));
  }, [comments]);
  return (
    <React.Fragment>
      <h1>Comments {comments}</h1>
      {state && (
        <div>
          <h2>{state.name}</h2>
          <p>{state.body}</p>
        </div>
      )}
      <button onClick={() => setComments(comments + 1)}>Next Comment</button>
    </React.Fragment>
  );
}

export default Comments;
