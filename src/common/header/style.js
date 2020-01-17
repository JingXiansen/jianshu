import styled from 'styled-components';
import logoPic from '../../statics/logo.png';

export const HeaderWrapper = styled.div`
    z-index:1;
    .iconfont {
    font-size:18px;   
    }
    background: #fff;
    width:100%;
    height: 55px;
    border-bottom: 1px solid rgb(240, 240, 240);
    position:fixed;
    right:0;
    top:0;
    
`;
export const Nav = styled.div`
    height: 57px;
    width: 1440px;
    margin: 0 auto;
`;
export const NavCenter = styled.div`
    height: 57px;
    width: 945px;
    margin: 0 auto;
`;
export const Logo = styled.div`    
    width: 100px;
    height: 56px;    
    background: url(${logoPic});
    background-size: contain;
`;
export const NavItem = styled.div`
    width: 85px;
    height: 56px;
    font-size: 18px;
    text-align: center;
    line-height: 56px;
    cursor: pointer;
    color: #333;
    &.ea6f5a {
        color: #ea6f5a;
        marging-left: 
    }
    &.right {
        color: #969696;
    } 
    &.write {   
        height: 40px;
        text-align: center;
        line-height:40px;
        font-size: 14px;
        border-radius: 20px;
        margin-top: 8px;
        box-sizing: border-box;
        border: 1px solid #ec6149;
        margin-right: 20px;
    } 
    
    &.writting {
        width: 120px;
        color: #fff;
        background: #ec6149;
        margin-left: 5px;
    }
    &.login {
        width: 70px;
        color: #ec6149;
    }   
`;
export const SearchWrapper = styled.div`
    position: relative;
    .zoom {
        hight:100%;
        margin-top: 15px;
        font-size: 28px;
        position: absolute;
        right: 12px;        
        border-radius: 14px;
        
cursor:pointer;

    }
    .focused {
        background: #777;
        color: #fff;
    }
`
export const Search = styled.input.attrs({
    placeholder: '搜索'
})`
    &.slide-enter {
        width:200px;       
    }
    &.slide-enter-action {
        width:300px;
    }
    &.slide-enter-done {
        width:300px;
        transition: all .3s ease-out;
    }
    &.slide-exit {
        width:300px;
        
    }
    &.slide-exit-action {
        width:200px;
    }
    &.slide-exit-done {
        width:200px;
        transition: all .3s ease-out;
    }    
    width: 200px;
    height: 38px;
    background: rgb(249,249,249);
    margin-top: 10px;
    box-sizing: border-box;
    padding-left: 20px;
    padding-right: 40px;
    border: 1px solid #eee;
    border-radius: 19px;
    font-size: 14px;   
`;
export const SearchInfo = styled.div`
    width:160px;
    top: 57px;
    position:absolute;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0, .2);
    padding: 20px
    color: #969696;    
`
export const SearchInfoItem = styled.div`
    padding-bottom: 5px;
    
`
export const SearchInfoSwitch = styled.span`
    cursor:pointer;
    font-size:13px;
    float:right;
    .iconfont {
        font-size: 14px;
        display: inline-block;
        transform-origin : center center;// 使饶中心旋转
    }
    // .rotate-enter {}
    // .rotate-enter-active {
    //     transform: rotate(45deg);
    //     transition: all .2s;
    // }
    // .rotate-exit {}
    // .rotate-exit-active {
    //     transform: rotate(45deg);
    //     transition: all .2s;
    // }
`
export const SearchInfoTips = styled.a`
    padding: 4px 5px;
    margin: 5px 5px 10px 0px;
    line-height: 12px;
    font-size: 12px;
    border: 1px solid #ddd;
    display: inline-block;
    border-radius: 2px;    
`

export const History = styled.ul`
    width:200px;
    top: 57px;
    left: 200px;
    position:absolute;
    background: #fff;
    box-shadow: 0 0 8px rgba(0,0,0, .2);
    padding: 6px;
    color: #969696; 
    li {        
        height:30px;
        line-height:30px;
        font-size: 16px;
        padding-left:10px;
    }
    li:hover {
        background:rgb(200,200,200,.5);        
    }
`