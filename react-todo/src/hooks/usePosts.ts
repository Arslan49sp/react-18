import { useQuery } from "@tanstack/react-query";
import axios from "axios";

interface Post {
  id: number;
  title: string;
  body: string;
  userId: number;
}

interface PostQuery {
  pageSize: number;
  currentPage: number;
}

const usePosts = (query: PostQuery) => {
  const fetchPosts = axios
    .get<Post[]>("https://jsonplaceholder.typicode.com/posts", {
      params: {
        _start: (query.currentPage - 1) * query.pageSize,
        _limit: query.pageSize,
      },
    })
    .then((res) => res.data);

  return useQuery<Post[], Error>({
    queryKey: ["posts", query],
    queryFn: () => fetchPosts,
    staleTime: 10 * 60 * 1000, // 10m
    keepPreviousData: true,
  });
};

export default usePosts;
