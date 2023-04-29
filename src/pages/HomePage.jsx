import AboutPage from "../components/AboutPage";
import MainCaresoul from "../components/Caresoul";
import HomeProducts from "../components/HomeProducts";
import Layout from "./Layout";

const HomePage = () => {
    return ( 
        <Layout>
          <MainCaresoul/>
          <HomeProducts/>
          <AboutPage/>
        </Layout>
     );
}
 
export default HomePage;