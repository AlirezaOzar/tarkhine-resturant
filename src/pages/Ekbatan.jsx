import EkbatanProducts from "../components/Ekbatan/EkbatanProudcts";
import PopularFoods from "../components/Ekbatan/PopularFoods";
import SwiperCaresoul from "../components/SwiperCaresoul";
import Layout from "./Layout";

const Ekbatan = () => {
    return ( 
        <Layout>
           <SwiperCaresoul/>
           <EkbatanProducts/>
           <PopularFoods/>
        </Layout>
     );
}
 
export default Ekbatan;