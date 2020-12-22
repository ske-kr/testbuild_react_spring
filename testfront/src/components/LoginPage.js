import React, {Component} from 'react';
import '../css/layout.css';
import login_img from '../img/login_img.png';

class LoginPage extends Component{
    state ={
        signedin:false,
        ID:"",
        Password:"",
    }
    render(){
        return(
            <div class = "login">
                <div class="login-img">
                    <img src={login_img} alt="" />
                </div>
                <div class="login-input">
                    <div class="welcome"><img src="img/text_welcome.png" alt="" /></div>
                    <div class="textbox">
                        <input type="text" value={this.state.ID}
                        onChange={(event)=>this.setState({ID:event.target.value})} placeholder="ID"></input>
                    </div>
                    <div class="textbox">
                        <input type="text" value={this.state.Password}
                        onChange={(event)=>this.setState({Password:event.target.value})} placeholder="PW"></input>
                    </div>
                    
                    <button id="signin" class="btn login-btn">Sign In</button>
                    <div class="login-small">
                        <div>New User? <a href="#" id="signup">Registration here</a></div>
                    </div>
                    {this.state.ID}
                    <br/>
                    {this.state.Password}
                </div>
                    
                <div class="footer">
                    &copy;2019-2021 SKE &amp; LDH. All Rights Reserved.
                </div>
                
            </div>
        );
    }
}
//<button id="signup" class="btn login-btn">Sign Up</button>
export default LoginPage;