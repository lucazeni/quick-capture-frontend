import React from "react";
import './searchbar.css';
export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-bar">
             <input className="text-box" type="text" placeholder="Search.." name="search2"></input>
            <button className="search-button" type="submit">Search</button>
            </div>
        );
    }
}