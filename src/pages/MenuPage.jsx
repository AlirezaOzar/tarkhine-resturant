import MenuSwiper from "../components/Menu/MenuSwiper";
import MenuTabs from "../components/Menu/MenuTabs";
import Layout from "./Layout";

const MenuPage = () => {
    return ( 
        <Layout>
            <MenuSwiper/>
            <MenuTabs/>
        </Layout>
     );
}
 
export default MenuPage;