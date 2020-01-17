import React, { Component } from "react";
import { connect } from "react-redux";
import {Redirect} from 'react-router-dom';

class Write extends Component {    
    render() {
        const {login} = this.props;
        if(login){
            return (
                <div>写文章页面</div>
            )
        }else{
            alert('请先登录');
            return (<Redirect to='/login'></Redirect>);            
        }
        
    }
}

const mapstatetoprops = (state) => ({
    login: state.getIn(['login','login'])
})
const mapspatch = (dispatch) => ({
  
});

export default connect(mapstatetoprops,mapspatch)(Write);