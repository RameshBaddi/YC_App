import React from "react";
import "./App.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Footer from "./components/footer/Footer";

function App() {
    return (
        <div className="App">
            <Header />
            <div className="container bg-white mainContainer pt-2 mt-4 pb-2">
                <Main />
            </div>
            <Footer />
        </div>
    );
}

export default App;
