import getPosts from "./getPosts";

export default async function getDataPosts(setError, setPosts, setTypeError) {
  try {
    const posts = await getPosts();
    if (posts !== 404) {
      setError(false);
      setPosts(posts);
    } else {
      setError(true);
      setTypeError(posts);
    }
  } catch (error) {
    console.error(error);
  }
}
