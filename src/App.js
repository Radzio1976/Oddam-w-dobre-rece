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
    isAuth: false
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

  render() {
    return (
      <AuthContext.Provider value={{ isAuth: this.state.isAuth, login: this.login, logout: this.logout }}>
        <BrowserRouter>
          <Navigation />
          <Switch>
            <Route path="/" exact component={Home} />
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
