import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css";

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {

    }
  }


  render() {
    return (
      <div>
        <Title />
        <Description />
        {/* <ImageGallery /> */}
      </div>
    )
  }
}

window.App = App;
export default App;