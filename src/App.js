import { BrowserRouter, Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AboutUs from './pages/AboutUs';
import Footer from "./components/footer/Footer"
import TopHeader from './components/topHeader/TopHeader';
import Scrollup from './components/scrollUp/ScrollUp';
import ShopCategory from './pages/ShopCategory';
import Product from './pages/Product';
import Nav from './components/nav/Nav';
import PageNoteFound from "./components/PageNoteFound/PageNoteFound"
import banner from "./assets/onlineShoping.jpg";
import banner2 from "./assets/onlineShoping2.jpg";
import banner3 from "./assets/onlineShoping3.jpg";
import banner4 from "./assets/onlineShoping4.jpg";
import banner5 from "./assets/onlineShoping5.jpg";
import banner6 from "./assets/onlineShoping6.jpg";
import aboutBanner from "./assets/aboutBanner.webp";


function App() {
  return(
    <div>
      <BrowserRouter>
      <TopHeader />
      <Nav />
        <Routes>
          <Route index element={<HomePage />} />
          <Route path='/electronics' element={<ShopCategory banner={banner} category="electronics" />} />
          <Route path='/books' element={<ShopCategory banner={banner2} category="books" />} />
          <Route path='/clothes' element={<ShopCategory banner={banner3} category="clothes" />} />
          <Route path='/shoeses' element={<ShopCategory banner={banner4} category="shoeses" />} />
          <Route path='/healthCare' element={<ShopCategory banner={banner5} category="shampoo" />} />
          <Route path='/health' element={<ShopCategory banner={banner6} category="health" />} />
          <Route path='/laptops' element={<ShopCategory banner={banner3} category="laptops" />} />
          <Route path='/toys' element={<ShopCategory banner={banner2} category="toys" />} />
          <Route path='/watches' element={<ShopCategory banner={banner4} category="watches" />} />
          <Route path='/accessuaries' element={<ShopCategory banner={banner} category="accessuaries" />} />
          <Route path='*' element={<PageNoteFound />} />

          <Route path='/product' element={<Product />}>
            <Route path=':productId' element={<Product />} />
          </Route>

          <Route path='/about' element={<AboutUs bannerAbout={aboutBanner}/>} />
        </Routes>
        <Footer />
        <Scrollup />
      </BrowserRouter>
    </div>
  )
}

export default App;
