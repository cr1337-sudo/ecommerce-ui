import NavBar from "../../components/navBar/NavBar";
import Announcement from "../../components/announcement/Announcement";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
import Newsletter from "../../components/newsletter/Newsletter";
import Footer from "../../components/footer/Footer";

const Home = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    <Newsletter/>
  <Footer/>
    </>
  );
};

export default Home;
