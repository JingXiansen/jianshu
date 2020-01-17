import React, { Component } from "react";
import {TopicWrapper,TopicItem} from '../style';
import { connect } from "react-redux";

class Topic extends Component {
    render() {
        return (
            <TopicWrapper>
                {this.props.topicList.map((item) => (
                    <TopicItem key={item.id}>
                    <img 
                    className='topic-img'
                    src={item.imgUrl} 
                    alt='获取图片失败'
                    />
                    <span>{item.title}</span> 
                </TopicItem>
                ))}
                <a className='more' href="/">更多内容 ></a>
                
            </TopicWrapper>
        )
    }
}

const mapStateToPops = (state) => {
    return (
        {
            topicList: state.getIn(['home','topicList'])
        }
    )
}

const mapDispatchToProps = (dispatch) => {
    return (
        {
        }
    )
}



export default connect (mapStateToPops, mapDispatchToProps)(Topic);