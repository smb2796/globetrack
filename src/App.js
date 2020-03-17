import React, { Component } from 'react';
import Particles from 'react-particles-js';
import Navigation from './components/Navigation/Navigation';
import Signin from './components/Signin/Signin';
import Register from './components/Register/Register';
import Logo from './components/Logo/Logo';
import InteractiveGlobe from './components/InteractiveGlobe/InteractiveGlobe';
import ImageLinkForm from './components/ImageLinkForm/ImageLinkForm';
import UserProfile from './components/UserProfile/UserProfile';
import './App.css';

//You must add your own API key here from Clarifai.
// const app = new Clarifai.App({
//  apiKey: 'YOUR_API_HERE'
// });

const particlesOptions = {
  "particles": {
          "number": {
              "value": 250,
              "density": {
                  "enable": true,
                  "value_area": 1500
              }
          },
          "line_linked": {
              "enable": true,
              "opacity": 0.02
          },
          "move": {
              "direction": "right",
              "speed": 0.05
          },
          "size": {
              "value": 1
          },
          "opacity": {
              "anim": {
                  "enable": true,
                  "speed": 1.4,
                  "opacity_min": 0.05
              }
          }
      },
      "interactivity": {
          "events": {
              "onclick": {
                  "enable": true,
                  "mode": "push"
              }
          },
          "modes": {
              "push": {
                  "particles_nb": 1
              }
          }
      },
      "retina_detect": true
}

class App extends Component {
  constructor() {
    super();
    this.state = {
      input: '',
      imageUrl: '',
      box: {},
      route: 'asdf',
      isSignedIn: false,
      user: {
        id: '',
        name: '',
        email: '',
        entries: 0,
        joined: ''
      }
    }
  }

  loadUser = (data) => {
    this.setState({user: {
      id: data.id,
      name: data.name,
      email: data.email,
      entries: data.entries,
      joined: data.joined
    }})
  }

  calculateFaceLocation = (data) => {
    const clarifaiFace = data.outputs[0].data.regions[0].region_info.bounding_box;
    const image = document.getElementById('inputimage');
    const width = Number(image.width);
    const height = Number(image.height);
    return {
      leftCol: clarifaiFace.left_col * width,
      topRow: clarifaiFace.top_row * height,
      rightCol: width - (clarifaiFace.right_col * width),
      bottomRow: height - (clarifaiFace.bottom_row * height)
    }
  }

  displayFaceBox = (box) => {
    this.setState({box: box});
  }

  onInputChange = (event) => {
    this.setState({input: event.target.value});
  }

  // onButtonSubmit = () => {
  //   this.setState({imageUrl: this.state.input});
  //   app.models
  //     .predict(
  //       Clarifai.FACE_DETECT_MODEL,
  //       this.state.input)
  //     .then(response => {
  //       if (response) {
  //         fetch('http://localhost:3000/image', {
  //           method: 'put',
  //           headers: {'Content-Type': 'application/json'},
  //           body: JSON.stringify({
  //             id: this.state.user.id
  //           })
  //         })
  //           .then(response => response.json())
  //           .then(count => {
  //             this.setState(Object.assign(this.state.user, { entries: count}))
  //           })

  //       }
  //       this.displayFaceBox(this.calculateFaceLocation(response))
  //     })
  //     .catch(err => console.log(err));
  // }

  onRouteChange = (route) => {
    if (route === 'signout') {
      this.setState({isSignedIn: false})
    } else if (route === 'home') {
      this.setState({isSignedIn: true})
    }
    this.setState({route: route});
  }

  render() {
    const { isSignedIn, imageUrl, route, box } = this.state;
    return (
      <div className="App">
         <Particles className='particles'
          params={particlesOptions}
        />
        <Navigation isSignedIn={isSignedIn} onRouteChange={this.onRouteChange} />
        { route === 'home'
          ? <div>
              <Logo />
              <UserProfile
                name={this.state.user.name}
                entries={this.state.user.entries}
              />
              <ImageLinkForm
                onInputChange={this.onInputChange}
                onButtonSubmit={this.onButtonSubmit}
              />
            </div>
          : <div className='gridContainer'>
             <InteractiveGlobe />
             <Signin />
            </div>
        }
      </div>
    );
  }
}

export default App;
