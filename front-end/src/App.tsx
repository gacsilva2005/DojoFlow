import Header from './components/layout/Header';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Modalidades from './components/sections/Modalidades';
import Team from './components/sections/Team';
import Schedule from './components/sections/Schedule';
import Gallery from './components/sections/Gallery';
import Footer from './components/layout/Footer';

function App() {
    return (
        <>
            <Header />
            <main>
                <Hero />
                <About />
                <Modalidades />
                <Team />
                <Schedule />
                <Gallery />
            </main>
            <Footer />
        </>
    );
}

export default App;