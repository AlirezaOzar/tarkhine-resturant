import AboutPage from "../components/AboutPage";
import Branches from "../components/Branches";
import MainCaresoul from "../components/Caresoul";
import HomeProducts from "../components/HomeProducts";
import Layout from "./Layout";

const HomePage = () => {
    return ( 
        <Layout>
          <MainCaresoul/>
          <HomeProducts/>
          <AboutPage/>
          <Branches/>
        </Layout>
     );
}
 
export default HomePage;