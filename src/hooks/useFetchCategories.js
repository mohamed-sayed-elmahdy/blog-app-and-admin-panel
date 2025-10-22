
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

const fetchCategories = async () => {
    const response = await axios.get("/api/blogs/categories");
    const allCategory = { ar: "الكل", en: "All" };
    return [allCategory, ...response.data.categories];
};

export function useFetchCategories() {
    return useQuery({
            queryKey: ["categories"],
            queryFn: fetchCategories,
            staleTime: 60 * 60 * 1000,
            cacheTime: 60 * 60 * 1000,
            retry: 1,
        }
    )
} 