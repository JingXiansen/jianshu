import React, { Component } from "react";
import { connect } from "react-redux";
import { LoginWrapper, LoginBox, Input,Button } from "./style";
import { actionCreators } from "./store";
import {Redirect} from 'react-router-dom';

class Login extends Component {    
    render() {
        const {login,handleLogin} = this.props;
        if(!login){
            return (
                
                <LoginWrapper>
                    <LoginBox>
                    <Input placeholder='用户名:' ref={(input) => {this.account = input}} /><Input ref={(input) => {this.password = input}} placeholder='密码:' type='password'/>
                    <Button onClick={() => handleLogin(this.account,this.password)} type='submit' value='登录'/>
                    </LoginBox>
                </LoginWrapper>
             
            )
        }else{
            return (<Redirect to='/'></Redirect>);            
        }
        
    }
}

const mapstatetoprops = (state) => ({
    login: state.getIn(['login','login'])
    
})
const mapspatch = (dispatch) => ({
    handleLogin(account,password) {
        dispatch(actionCreators.getLogin(account.value,password.value))
    }
  
});

export default connect(mapstatetoprops,mapspatch)(Login);