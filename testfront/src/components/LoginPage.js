import React, {Component} from 'react';

class LoginPage extends Component{
    state ={
        signedin:false,
        ID:"",
        Password:"",
    }
    render(){
        return(
            <div className="LoginPage">
                {this.props.title}
                <div className="LoginBox">
                    <p1>
                        ID:
                        <input type="text" value={this.state.ID}
                        onChange={(event)=>this.setState({ID:event.target.value})}></input>
                    </p1>
                    <br/>
                    <p2>
                        Password:
                        <input type="text" value={this.state.Password}
                        onChange={(event)=>this.setState({Password:event.target.value})}></input>
                    </p2>
                </div>
                <div className="buttons">
                    <button id="signup">Sign Up</button>
                    <button id="signin">Sign In</button>
                </div>
                {this.state.ID}
                <br/>
                {this.state.Password}
            </div>
        );
    }
}

export default LoginPage;