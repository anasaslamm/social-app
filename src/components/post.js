import React, { useEffect, useState } from "react";

function Post() {
  const [state, setState] = useState({});
  const [postId, setpost] = useState(1);

  const getNextPostFromAPI = () => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${postId}`)
      .then((response) => response.json())
      .then((json) => setState(json));
  };

  useEffect(() => {
    getNextPostFromAPI();
  }, [postId]);

  const getNextPost = (e) => {
    e.preventDeafult();
    e.stopPropagation();
    setpost(postId + 1);
  };
  return (
    <React.Fragment>
      <h1>Post {postId}</h1>
      {state && (
        <div>
          <h2>{state.title}</h2>
          <p>{state.body}</p>
        </div>
      )}
      <br />
      <button onClick={getNextPost}>Next Post</button>
    </React.Fragment>
  );
}

export default Post;
