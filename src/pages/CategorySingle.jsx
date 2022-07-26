import { useEffect, useState } from "react";
import { useParams, useLocation } from "react-router-dom";
import CategoryPageHeader from "../components/CategoryPageHeader";
import ProductSingleCard from "../components/ProductSingleCard";
import { getCategoryWiseProducts } from "../services/frontend";

import LoaderCampaigns from '../components/LoaderCampaigns';

import Pagination from "react-js-pagination";
import ShopLeftSideBar from "../components/ShopLeftSideBar";

export default function CategorySingle(){

    let {slug} = useParams();
    let location = useLocation();

    const [isLoading, setIsLoading] = useState(true);
    const [catDetails, setCatDetails ] = useState({});
    const [products, setProducts] = useState([]);

    const [currentPage, setCurrentPage ] = useState(null); 
    const [totalItems, setTotalItems] = useState(null);
    const [perPage, setPerPage] = useState(null);

    let page = 1;

    function changePageHandler(page){
            getCategoryWiseProducts(`${slug}?page=${page}`).then(data => {
            setProducts(data.products.data);
            setCurrentPage(data.products.current_page);
            console.log(data.products)
        })
    }

    const productItems = document.querySelector('.product-list-cat-page')

    function showGidView(){

        if( productItems.classList.contains('listview')){
            productItems.classList.remove('listview')
        }
        
    }

    function showListView(){
        productItems.classList.add('listview')
    }

    useEffect(()=>{
        getCategoryWiseProducts(slug, page).then(data => {
            setProducts(data.products.data);
            setCatDetails(data.cat);
            setIsLoading(false);
            console.log(data)
            setCurrentPage(data.products.current_page);
            setTotalItems(data.products.total);
            setPerPage(data.products.per_page);
        })
    }, [location, page, slug])

    return (
        <div className="container mt-3 mt-lg-4">
            <div className="row">
                <div className="col-lg-3">
                    <ShopLeftSideBar />
                </div>
                <div className="col-lg-9">
                    <CategoryPageHeader pageTitle={catDetails.name} 
                        showListView={showListView} showGridView={showGidView} />
                    <div className="product-items mt-3">
                        <div className="row product-list-cat-page g-1">
                            {
                                isLoading ? <LoaderCampaigns /> : products.map(prod => (
                                    <div className="col col-6 col-md-3" key={prod.id}>
                                        { <ProductSingleCard {...prod} />}
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                    <div className="product-page-pagination mt-5">
                        <nav aria-label="Page navigation justify-content-end">
                        <Pagination
                                activePage={currentPage}
                                itemsCountPerPage={perPage}
                                totalItemsCount={totalItems || 0}
                                    onChange={(page) => changePageHandler(page)}

                                pageRangeDisplayed={8}
                                itemClass="page-item"
                                linkClass="page-link border-0 ms-1"

                                prevPageText="<"
                                nextPageText=">"
                                innerClass='pagination justify-content-end'
                                activeLinkClass='bg-primary'
                                activeClass='active'
                            />
                        </nav>
                    </div>
                </div>
            </div>
        </div>
    );
}