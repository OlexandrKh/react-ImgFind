import React, { Component } from "react";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import SearchForm from "./components/SearchForm/SearchForm";
import Button from "./components/Button/Button";
import Loader from "./components/Loader/Loader";
import Modal from "./components/Modal/Modal";
import PixApi from "./components/services/pixaby-api.js";

import "./css/styles.css";

export default class App extends Component {
  state = {
    images: [],
    imageName: "",
    imgUrl: null,
    page: 1,
    status: "idle",
    error: null,
  };
  //Status: idle reject pending modal

  componentDidUpdate(prevProp, prevState) {
    if (prevState.imageName !== this.state.imageName) {
      this.setState({ images: [], page: 1 });
      this.fetchImages();
    }
    // this.windowScroll();
  }
  // Получить порцию картинок
  fetchImages = () => {
    this.setState({ status: "pending" });
    setTimeout(() => {
      PixApi.fetchPixabay(this.state.imageName, this.state.page)
        .then((res) =>
          this.setState((pState) => ({
            images: [...pState.images, ...res],
            page: pState.page + 1,
          }))
        )
        .catch((error) => this.setState({ error, status: "reject" }))
        .finally(() => {
          this.setState({ status: "idle" });
        });
    }, 500);
  };
  // Установить значение по чему искать картинк
  handlerSetFindStr = (imageName) => {
    this.setState({ imageName });
  };
  // Открыть окно с большим изображением
  handleOpenImage = (imgUrl) => {
    this.setState({
      imgUrl,
      status: "modal",
    });
  };
  // Закрыть модальное окно
  closeModal = () => {
    this.setState({
      imgUrl: "",
      status: "idle",
    });
  };
  // Скрол до кнопки
  windowScroll = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: "smooth",
    });
  };

  render() {
    const { imgUrl, images, status, error } = this.state;
    if (status === "reject") {
      return error && <h1>{error.message}</h1>;
    }

    return (
      <>
        {status === "pending" && (
          <div className="Overlay">
            <Loader />
          </div>
        )}
        <div className="App">
          <SearchForm onSubmit={this.handlerSetFindStr} />
          {images.length > 0 && (
            <>
              <ImageGallery images={images} onClickImg={this.handleOpenImage} />
              <Button loadMore={this.fetchImages} />
            </>
          )}
        </div>
        {status === "modal" && (
          <Modal imgUrl={imgUrl} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}
