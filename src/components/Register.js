import React from 'react';
import Axios from 'axios';

class Register extends React.Component {
    state = {
        name: {
            value: "",
            error: ""
        },
        surname: {
            value: "",
            error: ""
        },
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
        if (this.state.name.value.length < 5) {
            this.setState({
                name: {
                    ...this.state.name,
                    error: "Pole imię musi zawierać conajmniej 5 znaków"
                }
            })
            isValid = false;
        }
        if (this.state.surname.value.length < 5) {
            this.setState({
                surname: {
                    ...this.state.surname,
                    error: "Pole nazwisko musi zawierać conajmniej 5 znaków"
                }
            })
            isValid = false;
        }
        if (this.state.email.value.includes("@") === false || this.state.email.value.length < 5) {
            this.setState({
                email: {
                    ...this.state.email,
                    error: "Adres email musi zawierać znak @ i mieć conajmnie 5 znaków"
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
                        name: this.state.name.value, surname: this.state.surname.value, email: this.state.email.value, password: this.state.password1.value
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
                    <form onSubmit={this.handleSubmit}>
                        <label>Imię
                            <input type="text" name="name" value={this.state.name.value} onChange={this.handleChange}></input>
                        </label>
                        <p>{this.state.name.error}</p>
                        <label>Nazwisko
                            <input type="text" name="surname" value={this.state.surname.value} onChange={this.handleChange}></input>
                        </label>
                        <p>{this.state.surname.error}</p>
                        <label>Email
                            <input type="text" name="email" value={this.state.email.value} onChange={this.handleChange}></input>
                        </label>
                        <p>{this.state.email.error}</p>
                        <label>Hasło
                            <input type="password" name="password1" value={this.state.password1.value} onChange={this.handleChange}></input>
                        </label>
                        <p>{this.state.password1.error}</p>
                        <label>Powtórz hasło
                            <input type="password" name="password2" value={this.state.password2.value} onChange={this.handleChange}></input>
                        </label>
                        <p>{this.state.password2.error}</p>
                        <button>Wyślij</button>
                    </form>
                    <p>{this.state.error}</p>
                </div>
            </section>
        )
    }
}

export default Register;