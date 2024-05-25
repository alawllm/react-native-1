// import { useApi } from "../../../shared/hooks/useApi";
import { useQuery } from "@tanstack/react-query";

const fetchData = async (url) => {
  const response = await fetch(url);
  const data = await response.json();
  return data;
};

export const useCharactersGet = () => {
  return useQuery({
    queryKey: ["characters"],
    queryFn: () => fetchData("https://rickandmortyapi.com/api/character"),
  });
};
