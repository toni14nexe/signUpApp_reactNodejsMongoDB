import React, {Component} from "react";
import "bootstrap/dist/css/bootstrap.min.css"

class App extends Component {
    constructor(){
        super()
        this.state ={
            fullName:'',
            username:'',
            email:'',
            password:''
        }
    }

    changeFullName(event){
        this.setState({
            fullName:event.target.value
        })
    }
    changeUsername(event){
        this.setState({
            username:event.target.value
        })
    }
    changeEmail(event){
        this.setState({
            email:event.target.value
        })
    }
    changePassword(event){
        this.setState({
            password:event.target.value
        })
    }

    render(){
        return(
            <div>
                <div className="container">
                    <div className="form-div">

                        <p>RADI</p>
                        <form>
                            <input type="text"
                            placeholder="Full name"
                            onChange={this.changeFullName}
                            value={this.state.fullName}
                            className="form-control form-group"
                            />

                            <input type="text"
                            placeholder="Username"
                            onChange={this.changeUsername}
                            value={this.state.username}
                            className="form-control form-group"
                            />
                            
                            <input type="text"
                            placeholder="E-mail"
                            onChange={this.changeEmail}
                            value={this.state.email}
                            className="form-control form-group"
                            />

                            <input type="password"
                            placeholder="Password"
                            onChange={this.changePassword}
                            value={this.state.password}
                            className="form-control form-group"
                            />

                            <input type='Submit' className="btn btn-danger btn-block" value='Submit' />
                        </form>
                    </div>
                </div>
            </div>
        );
    }
}

export default App;