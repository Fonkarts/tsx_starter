import React from "react";
import Routes from "./router/Routes";
import "./app.scss";
import Header from "./components/Header/Header";

const App: React.FC = () => {
    return (
        <div className="app">
            <Header />
            <Routes />
        </div>
    );
};

export default App;
