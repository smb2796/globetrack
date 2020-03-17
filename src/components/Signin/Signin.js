import React from 'react';

class Signin extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      signInEmail: '',
      signInPassword: ''
    }
  }

  onEmailChange = (event) => {
    this.setState({signInEmail: event.target.value})
  }

  onPasswordChange = (event) => {
    this.setState({signInPassword: event.target.value})
  }

  onSubmitSignIn = () => {
    fetch('http://localhost:3000/signin', {
      method: 'post',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify({
        email: this.state.signInEmail,
        password: this.state.signInPassword
      })
    })
      .then(response => response.json())
      .then(user => {
        if (user.id) {
          this.props.loadUser(user)
          this.props.onRouteChange('home');
        }
      })
  }

  render() {
    const { onRouteChange } = this.props;
    return (
      <article className="br3 ba b--black-10 mv6 w-50 w-50-m w-10-l h-25 mw6 shadow-5 center">
        <main className="pa4 black-80">
          <div className="measure">
            <fieldset id="sign_up" className="ba b--transparent ph0 mh0">
              <legend className="f5 fw6 ph0 mh0">Search Diseases</legend>
              <div className="mt3">
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white pointer grow" type="radio" id="covid" name="gender" value="male"/>
                <label className="db fw6 lh-copy f6" for="covid">COVID-19</label><br/>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white pointer grow" type="radio" id="sars" name="gender" value="female"/>
                <label className="db fw6 lh-copy f6" for="sars">SARS</label><br/>
                <input className="pa2 input-reset ba bg-transparent hover-bg-black hover-white pointer grow" type="radio" id="murs" name="gender" value="other"/>
                <label className="db fw6 lh-copy f6" for="murs">MURS</label>
              </div>
            </fieldset>
            <div className="">
              <input
                className="b ph3 pv2 input-reset ba b--black bg-transparent grow pointer f6 dib"
                type="submit"
                value="Search"
              />
            </div>
          </div>
        </main>
      </article>
    );
  }
}

export default Signin;