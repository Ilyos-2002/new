import { Card } from "../components/Card";
import FakeCard from "../components/Card/FakeCard";
import Carusel from "../components/Carusel/Carusel";
import { Footer } from "../components/Footer";
import { Header } from "../components/Header";
import Page from "../components/Page/Page";
import Page2 from "../components/Page2/Page2";



export function Home() {
    return (
        <>
            <Header />
            <Carusel />

            <div className="container">
                <Page2 />
            </div>
            <Card />
            <div className="container">
                <Page />
                <FakeCard />
            </div>
            <Footer />
        </>
    )
}
