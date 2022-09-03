import axios from "axios";
import useSWR from "swr";

const BASE_URL = "http://localhost:8000"
let httpClient = undefined;

if (!httpClient) {
  httpClient = axios.create({
    baseURL: BASE_URL,
  });
}

const usePlanetList = () => {
  const fetcher = (url) => httpClient.get(url).then((res) => res.data);

  const { data, error } = useSWR("/api/planets", fetcher);

  return {
    data,
    isLoading: !error && !data,
    error,
  };
};

export { usePlanetList };
