import React, { Component } from 'react';
import {connect} from 'react-redux';
import {actioncreators} from './store';
import { CSSTransition } from 'react-transition-group';
import {Link} from 'react-router-dom';
import {HeaderWrapper,
     Logo, 
     Nav,
     NavItem,
     Search,
     NavCenter,
     SearchWrapper,
     SearchInfo,
     SearchInfoItem,
     SearchInfoSwitch,
     SearchInfoTips,
     History,
    } from './style.js';
import { LOGIN } from '../../pages/login/store/constants';

class Header extends Component {    
    // 提示框，点击时出现
    searchinfo = () => {        
        const { rotate, handleMouseLeave, handleInfoClick, mouse, focused, totalPage, list, page, handleMouseEnter} = this.props;
        if(mouse || focused) {
            return (
                <SearchInfo 
                onMouseLeave={handleMouseLeave}
                onMouseEnter={handleMouseEnter} >
                    <SearchInfoItem>热门搜索                                        
                        <SearchInfoSwitch
                        onClick={() => handleInfoClick(page,totalPage,rotate,this.spinIcon)}
                        >
                        {/* <CSSTransition
                        in={rotate}
                        timeout={200}
                        classNames={'rotate'}
                        > */}
                        {/* ref 使获得此dom节点，通过参数输出 */}
                        <i ref={(icon) =>{this.spinIcon = icon}} className="iconfont">&#xe626;</i>   
                        {/* </CSSTransition>     */}
                        换一批</SearchInfoSwitch>                                    
                    </SearchInfoItem>
                    {list.slice(page*10-10,page*10).map((item, index) => (
                        <SearchInfoTips key={index}>{item}</SearchInfoTips>
                    ))}                    
                </SearchInfo>
                );
            }else{
                return null;
            }    
        }
    historyinfo = () => {
        const {history} = this.props;
        if(history.size){            
            return (
                <History>
                    {history.map((item,index) => {
                        return (
                            <li key={index}>{item}</li>
                        )
                    })                        
                    }
                </History>
            )
        }
    }
    render(){
        const {handlehistory,login,focused, handleInputBlur,list, handleInputFocused,handleOut} = this.props;
    return (
            <HeaderWrapper>
                <Nav>
                    <Link to='/'>
                    <Logo className='left'/>  
                    </Link>      
                    <Link to='/write'>            
                    <NavItem className='right write writting'>
                    <i className="iconfont">&#xe601;  写文章 </i> 
                    </NavItem> 
                    </Link>                   
                    <NavItem className='right write login'>{login ? <span onClick={handleOut}>退出</span> : <Link to='/login'>登录</Link>}</NavItem>
                    <NavItem className='right'>BETA</NavItem>
                    <NavItem className='right'>
                        <span className="iconfont">&#xe636;</span>
                    </NavItem>
                    <NavCenter>
                        <NavItem className='left ea6f5a'>发现</NavItem>
                        <NavItem className='left'>关注</NavItem>
                        <NavItem className='left'>消息</NavItem>
                        <SearchWrapper 
                        className='left'
                        onBlur={handleInputBlur}
                        onFocus={() => handleInputFocused(list)}>
                            <CSSTransition
                                in={focused}
                                timeout={50}
                                classNames="slide"            
                            >
                            <Search ref={(ref) => this.inputValue = ref}>                                
                            </Search>
                            </CSSTransition>
                            {this.searchinfo()}
                            {this.historyinfo()}
                            <i                         
                            onClick={() => handlehistory(this.inputValue)} 
                            className={this.props.focused ? 'focused iconfont zoom' : 'iconfont zoom'}>&#xe653;</i>
                        </SearchWrapper>                        
                    </NavCenter>                        
                </Nav>
            </HeaderWrapper>
                    
        )
    }
}
const mapStateToPops = (state) => {
    return (
        {
            focused: state.getIn(["header", "focused"]),
            list: state.getIn(["header", "list"]),
            page: state.getIn(["header", "page"]),
            totalPage: state.getIn(["header", "totalPage"]),
            mouse: state.getIn(["header", "mouse"]),
            rotate: state.getIn(["header", "rotate"]),
            login: state.getIn(['login','login']),
            history: state.getIn(["header","history"])
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
            handleInputFocused(list) {
                (list.size === 0) && (dispatch(actioncreators.getlist()))
                dispatch(actioncreators.searchFocused())                
            },
            handleInputBlur() {
                dispatch(actioncreators.searchBlur())
            },
            handleInfoClick(page,totalPage,rotate,spin) { 
                // 使有过渡效果，延时抵达最终状态。
                spin.style.transition = 'all 1s'; 
                let originDeg = spin.style.transform.replace(/[^0-9]/ig,'');
                if(originDeg) {
                    originDeg = parseInt(originDeg,10);
                }else {
                    originDeg = 0;
                };
                spin.style.transform = 'rotate(' + (originDeg + 90) + 'deg)';
                // if(spin.style.transform === 'rotate(0deg)'){
                //      spin.style.transform = 'rotate(360deg)';
                //  }else{spin.style.transform = 'rotate(0deg)'}
                if(page>=totalPage){page=1}else{page = page + 1;};
                dispatch(actioncreators.infoClick(page))
                if(rotate){dispatch({type:'RATATE_FALSE'})}
            },
            handleMouseEnter() {
                dispatch(actioncreators.MouseOver())
            },
            handleMouseLeave() {
                dispatch(actioncreators.MouseLeave())
            },
            handleOut() {                
                dispatch({type:LOGIN,
                data: false})               
            },
            handlehistory(value) {
               if(value.value){
                   console.log(1)
               }
            }
        }
    )
}



export default connect(mapStateToPops, mapDispatchToProps)(Header);
