import { React, Component } from "react";
// import axios from "axios";

// import { ToastContainer } from "react-toastify";
import { getImages } from "../API/api-services";
import { Searchbar } from "../Searchbar/Searchbar";
import { ImageGallery } from "../ImageGallery/ImageGallery";
import {Loader} from "../Loader/Loader"
// import {Button} from '../Button/Button'

// import { ImageGalleryItem } from "./ImageGalleryItem/ImageGalleryItem"
// import {Container} from "./App.styled"

export class App extends Component {

  state = {
    query: '',
    loading: false,
    error: null,
    images: [],
    page: 1,
    
  };

  async componentDidUpdate(prevProps, prevState) {

    const prevQuery = prevState.query;
    const nextQuery = this.state.query; 

    try {
      if (prevQuery !== nextQuery) {
        this.setState({ loading: true, images: [] });
          const newImages = await getImages(nextQuery);
        this.setState({ images: newImages});
        this.setState({ loading: false });
          }
    } catch (error) {
      this.setState({ error });
    }
  };
    

  handleFormSubmit = imageName => {
    this.setState({ query: imageName });

  };

  // loadMoreButton = prevState => {
  //   this.setState({page: prevState + 1})
  // }


  render() {
    const { images, loading, error } = this.state;
    
    return (
      <div>      
        <Searchbar onSubmit={this.handleFormSubmit} />
        {error && <p>Whoops, something went wrong</p>}
        {loading && <Loader/>}
        {images.length > 0 && <ImageGallery images={images} />}
        {/* <Button onClick={this.loadMoreButton}/> */}

        {/* <ToastContainer autoClose={2000} /> */}

      </div >
    )
  };
};

