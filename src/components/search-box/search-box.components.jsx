import { Component } from "react";

import './search-box.style.css';

class SearchBox extends Component {
    render () {
        return (
            <div>
                <input
                    className={`search-box ${this.props.className}`}
                    type="search"
                    placeholder={this.props.placeholder}
                    onChange={this.props.onSearchChange}
                />
            </div>
        );
    }
}

export default SearchBox;