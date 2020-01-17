import React, { Component } from "react";
import {connect} from 'react-redux';
import {RecommendWrapper, Download,Aa } from '../style';

class Recommend extends Component {
    render() {
        return (
            <div>
            <RecommendWrapper>
                {this.props.recommend.map((item) => {
                    return (
                        <Aa key={item.id} imgUrl={item.img} className='link' href={item.url}>    
                </Aa>
                    )
                })}                
            </RecommendWrapper>
            <Download src='https://www.jianshu.com/apps?utm_medium=desktop&utm_source=index-aside-click'>
                <img src="data:image/png;base64,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" alt=""/>
                <div className='info'>
                    <div className='title'>下载简书手机APP
                        <div className='description'>随时随地发现和创作内容</div>
                    </div>
                   
                </div>
            </Download>
            </div>
        )
    }
}

const mapstatetoprop = (state) => {
    return ({
        recommend: state.getIn(['home','recommend']),
    }
    )
};

const mapspathtoprop = (dispatch) => {
    return ({

    }        
    )    
};

export default connect(mapstatetoprop,mapspathtoprop)(Recommend);