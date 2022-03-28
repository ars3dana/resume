import React, {useEffect} from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import AOS from 'aos';
import 'aos/dist/aos.css';
import Contact from "./components/Contact";

const App = () => {

    useEffect(() => {
        AOS.init();
        AOS.refresh();
    }, []);
    return (
        <>
            <Header/>
            <About/>
            <Projects/>
            <Contact/>
        </>
    );
};

export default App;
