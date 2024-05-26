// import { useApi } from "../../../shared/hooks/useApi";
import { useQuery } from "@tanstack/react-query";
import { fetcher } from "../../../shared/providers/utils";

export const usePostsGet = () => {
  return useQuery({
    queryKey: ["posts"],
    queryFn: () => fetcher("https://jsonplaceholder.typicode.com/posts"),
  });
};
