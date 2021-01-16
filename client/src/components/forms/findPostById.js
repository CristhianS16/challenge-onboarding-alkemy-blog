import React, { useEffect, useState } from "react";
import getDataPosts from '../../services/getDataPosts';

const FindPostById = ({
  setError,
  setTypeError,
  setDataToEdit,
}) => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getDataPosts(setError, setPosts, setTypeError);
  }, [setError, setTypeError]);

  function handleSelect(e) {
    if (e.target.value !== "") {
      const post = posts.filter(({ id }) => id === Number(e.target.value));
      if (post.length) {
        setDataToEdit(post[0]);
        setError(false);
      } else {
        setError(true);
        setTypeError("404");
      }
    }
  }

  return (
    <div className="row">
      <div className="col-md-12 d-flex justify-content-center">
        <select
          className="col rounded bg-dark text-white mb-2"
          onChange={handleSelect}
        >
          <option value="" disabled={true} selected>Choose a post to edit</option>
          {posts.map(({ id, title }) => (
            <option key={id} value={id}>
              Post: {title}
            </option>
          ))}
        </select>
      </div>
    </div>
  );
};

export default FindPostById;
