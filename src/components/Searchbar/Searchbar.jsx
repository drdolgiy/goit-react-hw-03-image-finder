import { Component } from "react";
import { ImSearch } from "react-icons/im";
// import propTypes from "prop-types";


export default class Searchbar extends Component {

    state = {
        imageName: '',
    };

    handleNameChange = event => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase() })
    };

    handleSubmit = event => {
        event.preventDefault();
    }


    render() {
        return (
            <header className="searchbar">
                <form onSubmit={this.handleSubmit} className="form">
                    <button type="submit" className="button">
                        <ImSearch style={{ marginRight: 8 }} />
                        <span className="button-label">Search</span>
                    </button>

                    <input
                        className="input"
                        onChange={this.handleNameChange}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        )
    }
};