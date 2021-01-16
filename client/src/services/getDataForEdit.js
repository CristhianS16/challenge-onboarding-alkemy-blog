import getPost from "./getPost";

export default async function getDataForEdit(
  postId,
  setError,
  setDataToEdit,
  setTypeError
) {
  try {
    const post = await getPost(postId);
    if (post !== 404) {
      setError(false);
      setDataToEdit(post);
    } else {
      setError(true);
      setTypeError(post);
    }
  } catch (error) {
    console.error(error);
  }
}
