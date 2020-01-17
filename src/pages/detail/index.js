import React, { PureComponent } from "react";
import { DetailWrapper, Header, WriterTitle, Paper } from "./styled";
import {actionCreators} from './store';
import { connect } from "react-redux";
import {withRouter} from 'react-router-dom';

class Detail extends PureComponent {
    
    render() {
        console.log(this.props)
        const {list} = this.props
        return (
            <DetailWrapper>
                <Header>{list.title}</Header>
                <WriterTitle>
                    <a href="/"><img className='writer-img' src="https://upload.jianshu.io/users/upload_avatars/1202579/75bc6c8d5bbe.jpg?imageMogr2/auto-orient/strip|imageView2/1/w/96/h/96/format/webp" alt=""/></a>
                    <div className='left writer-name'>
                        <span>{list.name}</span>
                    </div>
                    <div className='left'>
                        <span>{list.descripe}</span>
                    </div>                    
                </WriterTitle>
                <Paper dangerouslySetInnerHTML={{__html: list.content}} >                 
                </Paper>
            </DetailWrapper>
        )
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);        
    }
}

const mapstatetoprops = (state) => ({
    list: state.getIn(['detail','list']),
    // name: state.getIn(['detail','name']),
    // descripe: state.getIn(['detail','descripe']),
    // content: state.getIn(['detail','content']),
})
const mapspatch = (dispatch) => ({
    getDetail (id) {
        dispatch(actionCreators.getDetailData(id))
    }
})



export default connect(mapstatetoprops,mapspatch)(withRouter(Detail));