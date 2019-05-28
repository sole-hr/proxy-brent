import React from 'react';
import '../styles/app.css'

class App extends React.Component {
  constructor(props) {
    super(props);

  }

  componentWillMount() {
    const scripts = document.createElement('script');
    scripts.src = process.env.IMAGE_GALLERY_URL;
    const docBody = document.querySelector('body');
    docBody.append(scripts);
  }

  render() {
    return (
      <div>This is the app</div>
    )
  }
}

export default App;