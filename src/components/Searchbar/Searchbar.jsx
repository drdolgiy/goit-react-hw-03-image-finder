import { ImSearch } from "react-icons/im";
// import propTypes from "prop-types";

const Searchbar = () => {
    return (
        <header className="searchbar">
            <form className="form">
                <button type="submit" className="button">
                    <ImSearch style={{ marginRight: 8 }} />
                    <span className="button-label">Search</span>
                </button>

                <input
                    className="input"
                    type="text"
                    autoComplete="off"
                    autoFocus
                    placeholder="Search images and photos"
                />
            </form>
        </header>
    )
};

export default Searchbar;