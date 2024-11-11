import { useState } from "react";
import usePosts from "../hooks/usePosts";

const PostList = () => {
  const pageSize = 10;
  const [currentPage, setCurrentPage] = useState(1);
  const { data: posts, error, isLoading } = usePosts({ currentPage, pageSize });

  if (isLoading) return <p>loading....</p>;
  if (error) return <p>{error.message}</p>;
  return (
    <>
      <ul className="list-group">
        {posts?.map((post) => (
          <li key={post.id} className="list-group-item">
            {post.title}
          </li>
        ))}
      </ul>
      <button
        disabled={currentPage === 1}
        onClick={() => setCurrentPage(currentPage - 1)}
        className="btn btn-primary my-3"
      >
        Previous
      </button>
      <button
        onClick={() => setCurrentPage(currentPage + 1)}
        className="btn btn-success my-3 ms-1"
      >
        Next
      </button>
    </>
  );
};

export default PostList;
