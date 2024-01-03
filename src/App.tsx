import React from "react";
import "./App.css";
import "./fonts.css";
import Header from "./Pages/Header/Header";
import Home from "./Pages/HomeSection/Home";
import AboutMe from "./Pages/AboutMe/AboutMe";
import { Education } from "./Pages/EducationSection/Education";
import Skills from "./Pages/Skills/Skills";
import Projects from "./Pages/PastWorks/Projects";
import Contact from "./Pages/Contact/Contact";
import Footer from "./Pages/Footer/Footer";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function App() {
    return (
        <div>
            <div className="App flex flex-col items-center bg-[#101219]">
                <Header />
                <Home />
                <AboutMe />
                <Education />
                <Skills />
                <Projects />
                <Contact />
                <Footer />
            </div>
            <ToastContainer
                position="bottom-right"
                autoClose={5000}
                hideProgressBar={false}
                newestOnTop={false}
                closeOnClick
                rtl={false}
                pauseOnFocusLoss
                draggable
                pauseOnHover
                theme="dark"
            />
        </div>
    );
}

export default App;
