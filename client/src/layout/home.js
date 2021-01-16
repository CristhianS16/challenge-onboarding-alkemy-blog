import React from "react";
import Wrapper from "../components/wrapper";
import Title from "../components/title";
import PostsView from "../components/posts/postsView";

const Home = ({ error, setError, typeError, setTypeError }) => {
  return (
    <Wrapper>
      <Title title="Posts" />
      <PostsView
        error={error}
        setError={setError}
        typeError={typeError}
        setTypeError={setTypeError}
      />
    </Wrapper>
  );
};

export default Home;
