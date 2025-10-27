import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchBlogById = async (id) => {
    const response = await axios.get(`/api/blogs/${id}`);
    return response?.data?.blog;
};

export function useBlogById(id) {
    return useQuery({
        queryKey: ["blog", id],
        queryFn: () => fetchBlogById(id),
        staleTime: 60 * 60 * 1000,
        cacheTime: 60 * 60 * 1000,
        retry: 1,
        enabled: !!id,
    });
}