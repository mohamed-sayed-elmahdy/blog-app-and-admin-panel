
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBlogs = async () => {
    const response = await axios.get("/api/blogs");
    console.log(response.data);
    return response?.data?.blogs ?? [];
};

export function useFetchBlogs() {
    return useQuery({
            queryKey: ["blogs"],
            queryFn: fetchBlogs,
            staleTime: 60 * 60 * 1000,
            cacheTime: 60 * 60 * 1000,
            retry: 1,
        }
    )
} 