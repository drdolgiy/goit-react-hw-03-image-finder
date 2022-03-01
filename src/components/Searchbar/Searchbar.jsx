import { Component } from "react";
import { ImSearch } from "react-icons/im";
// import { toast } from "react-toastify";
// import { Toast } from "react-toastify/dist/components";
// import propTypes from "prop-types";
import { Header, Form, Button } from "./Searchbar.styled";


export class Searchbar extends Component {

    state = {
        imageName: '',
    };

    handleNameChange = event => {
        this.setState({ imageName: event.currentTarget.value.toLowerCase() })
    };

    handleSubmit = event => {
        event.preventDefault();

        if (this.state.imageName.trim() === '') {
            return alert('please, enter search value!');
        };

        this.props.onSubmit(this.state.imageName);
        this.setState({ imageName: '' });
    };


    render() {
        return (
            <Header className="searchbar">
                <Form onSubmit={this.handleSubmit} className="form">
                    <input
                        className="input"
                        onChange={this.handleNameChange}
                        value={this.state.imageName}
                        type="text"
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />

                    <Button type="submit" className="button">
                        <ImSearch style={{ marginRight: 8 }} />
                        <span className="button-label">Search</span>
                    </Button>
                </Form>
            </Header>
        )
    }
};