import React from "react";
import './searchbar.css';
import searchIcon from "./assets/search_icon.png";
export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-bar">
             <input onChange={this.props.filterRooms} className="text-box" type="text" placeholder="Search.." name="search2" maxlength="15"></input>
             <img className="search-icon" src={searchIcon}></img>
            </div>
        );
    }
}