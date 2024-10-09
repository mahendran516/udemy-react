import Navbar from "./Component/Navbar";
import Categories from "./Component/Categories"
import SaleImg from "./sale-img";
import Recommended from "./Component/recommended";
import Topics from "./Component/Topics";
import Popular from "./popular";
import Footer from "./footer";


function App() {
  return (
    <div>
      <Navbar></Navbar>
      <Categories></Categories>
      <SaleImg></SaleImg>
      <Recommended></Recommended>
      <Topics></Topics>
      <Popular></Popular>
      <Footer></Footer>
    </div>
  );
}

export default App;
