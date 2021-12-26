import NavBar from "../../components/navBar/NavBar";
import Announcement from "../../components/announcement/Announcement";
import Slider from "../../components/slider/Slider";
import Categories from "../../components/categories/Categories";
import Products from "../../components/products/Products";
const Home = () => {
  return (
    <>
      <Announcement />
      <NavBar />
      <Slider />
      <Categories />
      <Products />
    </>
  );
};

export default Home;
