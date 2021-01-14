import React from 'react';
import Wrapper from '../components/wrapper';
import Title from '../components/title';
import Posts from '../components/posts';

const Home = ({error, setError, typeError, setTypeError}) => {
    return (
      <Wrapper>
        <Title title="Posts"/>
        <Posts 
          error = {error}
          setError = {setError}
          typeError = {typeError}
          setTypeError = {setTypeError}
        />
      </Wrapper>
    )
}

export default Home;
