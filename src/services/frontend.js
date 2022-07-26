const apiUrl = 'https://www.fairmart.com.bd/api';

const imgUrl = `https://fairmartslive.s3.ap-south-1.amazonaws.com/public/assets/images`;


async function getCategoryTree(){
    return await fetch(`${apiUrl}/category-tree`).then(res => res.json());
}

async function getLandingPage(){
    return await fetch(`${apiUrl}/landing-page`).then(res => res.json());
}

async function getCategoryWiseProducts(categorySlug){
    return await fetch(`${apiUrl}/category-wise-products/${categorySlug}`).then(res => res.json());
}

async function getProductSingleData(id){
    return await fetch(`${apiUrl}/product-details/${id}`).then(res => res.json());
}

async function getCampaignsList(){
    return await fetch(`${apiUrl}/campaign-list`).then(res => res.json());
}

async function getCampaignDetails(slug){
    return await fetch(`${apiUrl}/campaign-details/${slug}`).then(res => res.json()).catch(err => {
        console.log(err)
    })
}


export { getCategoryTree, getLandingPage , getCategoryWiseProducts, getProductSingleData, 
        getCampaignsList, getCampaignDetails, imgUrl}

