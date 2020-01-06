import React from 'react';
import Axios from 'axios';
import Decoration from '../../src/assets/images/Decoration.svg';

class Register extends React.Component {
    state = {
        email: {
            value: "",
            error: ""
        },
        password1: {
            value: "",
            error: ""
        },
        password2: {
            value: "",
            error: ""
        },
        error: ""
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: {
                error: "",
                value: e.target.value
            }
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        let isValid = true;
        if (this.state.email.value.includes("@") === false || this.state.email.value.length < 5) {
            this.setState({
                email: {
                    ...this.state.email,
                    error: "Adres email musi zawierać znak @ i mieć conajmniej 5 znaków"
                }
            })
            isValid = false;
        }
        if (this.state.password1.value.length < 5) {
            this.setState({
                password1: {
                    ...this.state.password1,
                    error: "Hasło musi zawierać conajmniej 5 znaków"
                }
            })
            isValid = false;
        }
        if (this.state.password1.value !== this.state.password2.value) {
            this.setState({
                password2: {
                    ...this.state.password2,
                    error: "Hasła muszą być identyczne"
                }
            })
            isValid = false;
        }
        if (isValid) {
            Axios.get(`http://localhost:3000/users?email=${this.state.email.value}`).then((response1) => {
                console.log(response1.data)
                if (response1.data.length === 0) {
                    Axios.post("http://localhost:3000/users", {
                        email: this.state.email.value, password: this.state.password1.value
                    }).then((response2) => {
                        this.props.history.push("/")
                    })
                } else {
                    this.setState({
                        error: "Podany email istnieje już w naszej bazie danych"
                    })
                }
            })
        }
    }

    render() {
        return (
            <section className="register-section">
                <div className="register-form-container">
                    <h1>Załóż konto</h1>
                    <img src={Decoration}></img>
                    <form onSubmit={this.handleSubmit}>
                        <label>Email
                            <input type="text" name="email" value={this.state.email.value} onChange={this.handleChange}></input>
                        </label>
                        <p style={{ fontSize: "14px", color: "red" }}>{this.state.email.error}</p>
                        <label>Hasło
                            <input type="password" name="password1" value={this.state.password1.value} onChange={this.handleChange}></input>
                        </label>
                        <p style={{ fontSize: "14px", color: "red" }}>{this.state.password1.error}</p>
                        <label>Powtórz hasło
                            <input type="password" name="password2" value={this.state.password2.value} onChange={this.handleChange}></input>
                        </label>
                        <p style={{ fontSize: "14px", color: "red" }}>{this.state.password2.error}</p>
                        <div className="register-buttons">
                            <p onClick={() => this.props.history.push("/login")}>Zaloguj się</p>
                            <button>Wyślij</button>
                        </div>
                    </form>
                    <p style={{ fontSize: "14px", color: "red" }}>{this.state.error}</p>
                </div>
            </section>
        )
    }
}

export default Register;