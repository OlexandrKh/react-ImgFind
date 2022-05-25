import React, { Component } from "react";

export default class Modal extends Component {
  componentDidMount() {
    window.addEventListener("keydown", this.handleKeyDown);
  }
  componentWillUnmount() {
    window.removeEventListener("keydown", this.handleKeyDown);
  }
  handleKeyDown = (e) => {
    if (e.code === "Escape") {
      this.props.closeModal();
    }
  };

  render() {
    const { imgUrl, closeModal } = this.props;
    return (
      <>
        <div className="Overlay">
          <div className="Modal">
            <img src={imgUrl} alt="" onClick={closeModal} />
          </div>
        </div>
      </>
    );
  }
}
