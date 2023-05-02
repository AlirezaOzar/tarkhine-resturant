import EkbatanBranch from "../components/Ekbatan/EkbatanBranch";
import EkbatanProducts from "../components/Ekbatan/EkbatanProudcts";
import NonIranianFoods from "../components/Ekbatan/NonIranianFoods";
import PopularFoods from "../components/Ekbatan/PopularFoods";
import UserOpinion from "../components/Ekbatan/UserOpinion";
import SwiperCaresoul from "../components/Ekbatan/SwiperCaresoul";
import Layout from "./Layout";

const Ekbatan = () => {
    return ( 
        <Layout>
           <SwiperCaresoul/>
           <EkbatanProducts/>
           <PopularFoods/>
           <NonIranianFoods/>
           <EkbatanBranch/>
           <UserOpinion/>
        </Layout>
     );
}
 
export default Ekbatan;