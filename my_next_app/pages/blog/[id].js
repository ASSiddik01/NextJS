import { useRouter } from "next/router";

const Post = () => {
  const router = useRouter();
  const id = router.query.id;
  console.log(id);
  return (
    <>
      <div>Blog Id : {id}</div>
    </>
  );
};

export default Post;
