import React from "react";
import Routes from "./router/Routes";
import "./app.scss";

const App: React.FC = () => {
    return (
        <div className="app">
            <h1>ExcelAnt, your xls analyzer !</h1>
            <Routes />
        </div>
    );
};

export default App;
