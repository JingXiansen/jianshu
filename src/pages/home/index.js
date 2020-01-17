import React, { PureComponent} from "react";
import {HomeWrapper, HomeLeft, HomeRight,BackTop } from './style';
import Topic from './component/Topic';
import List from './component/List';
import Writer from './component/Writer';
import Recommend from './component/Recommend';
import {connect} from 'react-redux';
import {actionCreators} from './store';

class Home extends PureComponent {

    handleScrollTop() {
        window.scrollTo(0,0);
    }
    

    render() {
        const {showScroll,} = this.props;
        return (            
            <div>
                <HomeWrapper>
                <HomeLeft>
                    <img className='banner-img' src="https://upload.jianshu.io/admin_banners/web_images/4852/8e9c711020897ddd2964898b6608348635be154c.png?imageMogr2/auto-orient/strip|imageView2/1/w/1250/h/540" alt=""/>
                    <Topic />
                    <List />
                    </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer/>
                </HomeRight>
                {showScroll ? <BackTop onClick={this.handleScrollTop}>^</BackTop>: null}
                </HomeWrapper>
            </div>
        )
    }

    componentDidMount() {
        this.props.changeHomeData();
        window.addEventListener('scroll',this.props.changeScrollShow)
    };
    componentWillUnmount() {
        window.removeEventListener('scroll',this.props.changeScrollShow)
        
    }  
}
const mapStateToProps = (state) => ({
    showScroll: state.getIn(['home','showScroll']),
});

const mapDispatch = (dispatch) => ({
    changeHomeData() {
        dispatch(actionCreators.getHomeInfo());
    },
    changeScrollShow() {
        if(document.documentElement.scrollTop>400){
            dispatch(actionCreators.changeScroll(true))
        }else{
            dispatch(actionCreators.changeScroll(false))}
    },
})
export default connect(mapStateToProps, mapDispatch)(Home);