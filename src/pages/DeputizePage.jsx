import Advantages from "../components/Deputize/Advantages";
import DeputizeCaresoul from "../components/Deputize/DeputizeCaresoul";
import Forms from "../components/Deputize/Forms";
import Representation from "../components/Deputize/Representation";
import Layout from "./Layout";

const DeputizePage = () => {
    return ( 
        <Layout>
            <DeputizeCaresoul/>
            <Advantages/>
            <Representation/>
            <Forms/>
        </Layout>
     );
}
 
export default DeputizePage;