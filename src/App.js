import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import Clarifai from 'clarifai';
import './App.css';
import FaceRecognition from './components/FaceRecognition/FaceRecognition';

const app = new Clarifai.App({
  apiKey: '29449cb8b4f443f189dc087acbb43285'
});

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: ''
    }
  }

  onInputChange = (event) => {
   this.setState({input: event.target.value})
  }

  onBtnSubmit = () => {
    this.setState({imageUrl: this.state.input})
    app.models
      .predict(
       Clarifai.FACE_DETECT_MODEL,
        // URL
        this.state.input
      )
      .then(function (response) {
        console.log(response.outputs[0].data.regions[0].region_info.bounding_box);
      },
        function (err) {
        }
      );
  }

  render() {
    return (
      <div className="App">
        <Particles className='particles'
          params={particleParams}
        />
        <Navigation />
        <Logo />
        <Rank />
        <ImageLinkForm
          onInputChange={this.onInputChange}
          onBtnSubmit={this.onBtnSubmit}
        />
  <FaceRecognition imageUrl={this.state.imageUrl}/>
      </div>
    );
  }
}

const particleParams = {
  particles: {
    color: {
      value: '#000000'
    },
    line_linked: {
      enable: true,
      distance: 150,
      color: '#000000',
      opacity: 0.4,
      width: 1
    },
    number: {
      value: 300,
      density: {
        enable: true,
        value_area: 8000
      }
    }
  }
}

export default App;
