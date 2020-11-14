import React, {Component} from 'react'
import '../../node_modules/bootstrap/dist/js/bootstrap';


export default class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            name: '',
            username: '',
            email: '',
            password: ''
        }
    }

    render() {
        return (
            <div className='container text-center d-flex justify-content-center'>
                <div className='col-4'>
                    <form className="form-signin">
                        <h1 className="h3 mb-3 font-weight-normal mt-5">Please Register</h1>
                        <label htmlFor="inputName" className="sr-only">Full Name</label>
                        <input
                            type="text"
                            id="inputName"
                            className="form-control mb-2"
                            placeholder="Full Name"
                            required/>
                        <label htmlFor="inputUsername" className="sr-only">Username</label>
                        <input
                            type="text"
                            id="inputUsername"
                            className="form-control mb-2"
                            placeholder="Username"
                            required/>
                        <label htmlFor="inputEmail" className="sr-only">Email address</label>
                        <input
                            type="email"
                            id="inputEmail"
                            className="form-control mb-2"
                            placeholder="Email address"
                            required/>
                        <label htmlFor="inputPassword" className="sr-only">Password</label>
                        <input
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