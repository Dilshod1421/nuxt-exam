import { categories } from "~/constants/categories"
export const useDatas = () => {
    const useCategories = () => categories;
    return { useCategories, };
}