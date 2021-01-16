import getPosts from "./getPosts";

export default async function getDataHome(
  setError,
  setDataPosts,
  setTypeError
) {
  try {
    const posts = await getPosts();
    if (posts !== 404) {
      setError(false);
      setDataPosts(posts);
    } else {
      setError(true);
      setTypeError(posts);
    }
  } catch (error) {
    console.error(error);
  }
}
