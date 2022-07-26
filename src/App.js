import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Header from './components/Header';
import Campaigns from './pages/Campaigns';
import Home from './pages/Home';
import Page404 from './pages/Page404';

import CategorySingle from './pages/CategorySingle';
import ProductSingle from './pages/ProductSingle';
import CampaignSingle from './pages/CampaignSingle';

function App() {
  return (
    <>
      <BrowserRouter>
        <Header/>
        <Routes>
            <Route index element={<Home/>} />
            <Route path='/campaigns' element={<Campaigns/>} />
            <Route path={`/categories/:slug`} element={<CategorySingle />} />
            <Route path='/product-details/:id' element={<ProductSingle />} />
            <Route path='/campaign-details/:id' element={<CampaignSingle />} />
            <Route path="*" element={<Page404/>} />
        </Routes>
        <Footer />
      </BrowserRouter>
      
    </>
  );
}

export default App;
