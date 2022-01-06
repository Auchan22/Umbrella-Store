
import Layout from "../components/Layout"
import ProductList from "../components/ProductList"
import ScrollBar from "../components/ScrollBar"
import "./styles.css"

const PageHome = () => {
    return (
        <>
            <Layout>
                <ScrollBar />
                <ProductList />
            </Layout>
        </>
    )
}

export default PageHome
