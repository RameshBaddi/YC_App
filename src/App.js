import React from "react";
import "./App.css";

import Header from "./components/header/Header";
import Main from "./components/main/Main";
import Loading from "./components/loading/Loading";


function App() {
    return (
        <div className="App">
            <Loading />
            <Header />
            <div className="container bg-white mainContainer pt-2 mt-5 mb-5 p-4">
                <Main />
            </div>
        </div>
    );
}

export default App;
