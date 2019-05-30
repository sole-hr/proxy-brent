import React from "react";
// import { Modal, ModalBody } from "reactstrap";
import "bootstrap/dist/css/bootstrap.min.css";

// AJ6900-401
// AO2924-400
// AH8050-002

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      sku: "CJ0066-900",
      isFavorite: false,
      color: "",
      size: null,
      textbox: ""
    };

    this.onTextChange = this.onTextChange.bind(this);
    this.onClick = this.onClick.bind(this);
    this.onSizeClick = this.onSizeClick.bind(this);
  }

  onTextChange(event) {
    this.setState({ textbox: event.target.value }, () => {});
  }

  onClick(event) {
    this.setState({ sku: this.state.textbox }, () => {
      console.log(this.state.sku);
    });
  }

  onSizeClick(event) {
    this.setState({ size: event.target.value }, () => {
      console.log("Size updated to ", this.state.size);
    });
  }

  render() {
    return (
      <div>
        <div id="navbar">Navbar Loading...</div>
        <input type="text" onChange={this.onTextChange} />
        <button onClick={this.onClick}>FIND NEW SHOE</button>
        <div className="container-fluid" id="override-container">
          <div className="row">
            <div className="col-8">
              <ImageGallery sku={this.state.sku} />
            </div>
            <div className="col-4">
              <Title sku={this.state.sku} />
              <ColorSelector sku={this.state.sku} />
              <SizeSelector
                sku={this.state.sku}
                onSizeClick={this.onSizeClick}
              />
              <CartFavoriteButtons sku={this.state.sku} />
              <Description sku={this.state.sku} />
              <div id="customer-reviews">Customer Reviews Loading...</div>
            </div>
          </div>
        </div>
        {/* <Carousel /> */}
        <div className="row" />
      </div>
    );
  }
}
window.App = App;
export default App;
