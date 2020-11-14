import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/js/bootstrap';


export default class App extends Component {
    constructor(props) {
        super(props);

        this.changeName = this.changeName.bind(this)
        this.changeUsername = this.changeUsername.bind(this)
        this.changeEmail = this.changeEmail.bind(this)
        this.changePassword = this.changePassword.bind(this)
        this.onSubmit = this.onSubmit.bind(this)

        this.state = {
            name: '',
            username: '',
            email: '',
            password: ''
        }
    }

    changeName(e) {
        this.setState({ name: e.target.value })
    }

    changeUsername(e) {
        this.setState({ username: e.target.value })
    }

    changeEmail(e) {
        this.setState({ email: e.target.value })
    }

    changePassword(e) {
        this.setState({ password: e.target.value })
    }

    onSubmit(e) {
        e.preventDefault()

        const user = {
            name: this.state.name,
            username: this.state.username,
            email: this.state.email,
            password: this.state.password
        }

        console.log(user)
    }

    render() {
        return (
            <div className='container text-center d-flex justify-content-center'>
                <div className='col-4'>
                    <form className="form-signin" onSubmit={this.onSubmit}>
                        <h1 className="h3 mb-3 font-weight-normal mt-5">Please Register</h1>
                        <label htmlFor="inputName" className="sr-only">Full Name</label>
                        <input
                            value={this.state.name}
                            onChange={this.changeName}
                            type="text"
                            id="inputName"
                            className="form-control mb-2"
                            placeholder="Full Name"
                            required/>
                        <label htmlFor="inputUsername" className="sr-only">Username</label>
                        <input
                            value={this.state.username}
                            onChange={this.changeUsername}
                            type="text"
                            id="inputUsername"
                            className="form-control mb-2"
                            placeholder="Username"
                            required/>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input
                            value={this.state.email}
                            onChange={this.changeEmail}
                            type="email"
                            id="inputEmail"
                            className="form-control mb-2"
                            placeholder="Email address"
                            required/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input
                            value={this.state.password}
                            onChange={this.changePassword}
                            type="password"
                            id="inputPassword"
                            className="form-control mb-2"
                            placeholder="Password"
                            required/>
                        <button className="btn btn-lg btn-primary btn-block" type="submit">Register</button>
                    </form>
                </div>
            </div>
        )
    }
}