import React from 'react';
import Axios from 'axios';
import { Redirect } from 'react-router-dom'
import { AuthContext } from '../App'

class Login extends React.Component {
    state = {
        email: "",
        password: "",
        error: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e, login) => {
        e.preventDefault()
        Axios.get(`http://localhost:3000/users?email=${this.state.email}&password=${this.state.password}`).then((response) => {
            if (response.data.length === 0) {
                this.setState({
                    error: "Nieprawidłowy login lub hasło"
                })
            } else {
                login(this.state.email)
                // this.props.history.push("/")
            }
        })
    }

    render() {
        return (
            <section className="login-section">
                <div className="login-form-container">
                    <AuthContext.Consumer>
                        {
                            ({ isAuth, login }) => {
                                return (
                                    isAuth ?
                                        <Redirect to="/" /> :
                                        <form onSubmit={(e) => this.handleSubmit(e, login)}>
                                            <label>Email
                            <input type="text" name="email" value={this.state.email} onChange={this.handleChange}></input>
                                            </label>
                                            <label>Hasło
                            <input type="password" name="password" value={this.state.password} onChange={this.handleChange}></input>
                                            </label>
                                            <button>Zaloguj</button>
                                        </form>
                                )
                            }
                        }
                    </AuthContext.Consumer>
                    <p>{this.state.error}</p>
                </div>
            </section>
        )
    }
}

export default Login;