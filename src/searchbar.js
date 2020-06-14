import React from "react";
import './searchbar.css';
export default class SearchBar extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="search-bar">
             <input onChange={this.props.filterRooms} className="text-box" type="text" placeholder="Search.." name="search2" maxlength="15"></input>
            </div>
        );
    }
}