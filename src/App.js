import React, {Component} from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Logo from './components/Logo/Logo';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import Rank from './components/Rank/Rank';
import './App.css';

const particleParams = {
    particles: {
    	 color: {
     	value: '#000000'
     } ,
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


class App extends Component {
	render(){
    return (
        <div className="App">
          <Particles className='particles'
            params={particleParams}
            />
            <Navigation />
            <Logo />
            <Rank />
            <ImageLinkForm />
        </div>
  );
}
}

export default App;
