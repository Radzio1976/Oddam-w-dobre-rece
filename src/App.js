import React, { createContext } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Home from './components/Home';
import Login from './components/Login';
import Logout from './components/Logout';
import Register from './components/Register';
import Navigation from './components/Navigation';
import GiveThings from './components/GiveThings';

const AuthContext = createContext()

class App extends React.Component {
  state = {
    isAuth: false,
    fourSteps: React.createRef(),
    aboutUs: React.createRef(),
    whoWeHelp: React.createRef(),
    contact: React.createRef()
  }

  componentDidMount() {
    this.setState({
      isAuth: localStorage.getItem("email") === null ? false : true
    })
  }

  login = (email) => {
    localStorage.setItem("email", email)
    this.setState({
      isAuth: true
    })
  }

  logout = () => {
    this.setState({
      isAuth: false
    })
    localStorage.removeItem("email")
  }

  scrollToContact = () => {
    this.state.contact.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  scrollToFourSteps = () => {
    console.log(this.state.fourSteps.current)
    this.state.fourSteps.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  scrollToAboutUs = () => {
    console.log(this.state.aboutUs.current)
    this.state.aboutUs.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  scrollToWhoWeHelp = () => {
    console.log(this.state.whoWeHelp.current)
    this.state.whoWeHelp.current.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }


  render() {
    return (
      <AuthContext.Provider value={{ isAuth: this.state.isAuth, login: this.login, logout: this.logout }}>
        <BrowserRouter>
          <Navigation scrollToContact={this.scrollToContact} scrollToFourSteps={this.scrollToFourSteps} scrollToAboutUs={this.scrollToAboutUs} scrollToWhoWeHelp={this.scrollToWhoWeHelp} />
          <Switch>
            <Route path="/" exact component={() => <Home contact={this.state.contact} fourSteps={this.state.fourSteps} aboutUs={this.state.aboutUs} whoWeHelp={this.state.whoWeHelp} />} />
            <Route path="/give-things" component={GiveThings} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/logout" component={Logout} />
          </Switch>
        </BrowserRouter>
      </AuthContext.Provider>
    )
  }
}

export { AuthContext }
export default App;
