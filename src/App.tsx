import React from 'react';
import './App.css';
import Map from "./components/map/Map";
import TableBlock from "./components/table/Table";

function App() {
    return (
        <div className="page-wrapper">
            <TableBlock/>
            <Map/>
        </div>
    );
}

export default App;
