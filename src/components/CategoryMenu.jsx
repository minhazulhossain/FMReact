import { useEffect, useState } from "react";
import LoaderCategoryMenu from "./LoaderCategoryMenu";

import { getCategoryTree } from '../services/frontend'
import { Link } from "react-router-dom";

export default function CategoryMenu(){

    const [categories, setCategories] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

 
    useEffect(() => {
        getCategoryTree().then(data => {
            setCategories(data.category_tree);
            setIsLoading(false);
        })
    }, []);

    if(isLoading){
        return (
            <LoaderCategoryMenu/>
        );
    }else{
        return (
            <ul className="off-canvas-category-menu-wrapper">
                {categories.map(cat => (
                    <li key={cat.id}>
                        <Link to={`/categories/${cat.slug}`} className="d-block text-decoration-none position-relative align-items-center p-2 pe-0">
                            {cat.name}
                        </Link>
                    </li>
                   ))}
            </ul>
        )
    }
}