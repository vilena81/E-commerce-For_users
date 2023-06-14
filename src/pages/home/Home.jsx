import React from 'react'
import Navbar from '../../components/navbar/Navbar'
import Newsleter from '../../newsletter/Newsletter';
import Footer from '../../components/footer/Footer';
import Products from '../../components/Products/Products';
import Carusel from '../../components/carousel/Carousel';
import Announcement from '../../components/announcement/Announcement';
// import Categories from '../../components/categories/Categories';

const Home = () => {
  return (
    <div>
      <Navbar />
      <Announcement />
      <Carusel />
      <Products />
      {/* <Categories/> */}
      <Newsleter />
      <Footer />

    </div>
  )
}

export default Home