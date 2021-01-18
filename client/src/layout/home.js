import React, { useState } from "react";
import Wrapper from "../components/wrapper";
import Title from "../components/title";
import PostsView from "../components/posts/postsView";

const Home = ({ error, setError, typeError, setTypeError }) => {
  const [dataPosts, setDataPosts] = useState([]);

  return (
    <Wrapper>
      {dataPosts.length ? (
        <Title title='Posts' />
      ) : (
        <Title title='¡Hello!, add new post :)' />
      )}
      <PostsView
        dataPosts={dataPosts}
        setDataPosts={setDataPosts}
        error={error}
        setError={setError}
        typeError={typeError}
        setTypeError={setTypeError}
      />
    </Wrapper>
  );
};

export default Home;
