import { Footer } from "../components/Footer";
import { Card } from "../components/Card";
import { Header, HeaderBsiz } from "../components/Header";
import Intro from "../components/Intro/Intro";
import ProductCard from "../components/ProductCard/ProductCard";



export function AddProduct() {
    return (
        <div>
            <HeaderBsiz />

            <Intro />
            <Card />
            <ProductCard />
            {/* <Footer /> */}
        </div>
    )
}