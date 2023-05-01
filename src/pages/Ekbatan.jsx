import EkbatanProducts from "../components/Ekbatan/EkbatanProudcts";
import SwiperCaresoul from "../components/SwiperCaresoul";
import Layout from "./Layout";

const Ekbatan = () => {
    return ( 
        <Layout>
           <SwiperCaresoul/>
           <EkbatanProducts/>
        </Layout>
     );
}
 
export default Ekbatan;