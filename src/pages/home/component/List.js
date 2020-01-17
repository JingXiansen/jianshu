import React, { Component } from "react";
import {ListItem, Word,More } from '../style';
import { connect } from "react-redux";
import {actionCreators} from '../store';
import {Link} from 'react-router-dom';

class List extends Component {
    render() {
        const {list,handleMoreClick,page, } = this.props;
        return (  
            <div>   
                {list.map((item) => {
                    return(                                             
                        <ListItem key={item.id}>                        
                            <Word>        
                            <Link className='list-title' to={"/detail/" + item.id}>                         
                                {item.lista}
                            </Link> 
                                <p>{item.listp}</p>
                                <ul>
                                    <li><i className="iconfont">&#xe626;</i>1.7</li>
                                    <li>定格一下</li>
                                    <li>6</li>
                                </ul>
                            </Word>                       
                            <img className='list-img' src={item.listimg} alt="没图"/>
                        </ListItem>  
                          
                    );
                }) } 
                <More onClick={() => handleMoreClick(page)}>查看更多</More>                 
            </div>          
        )
    }
}

const mapstatetoprop = (state) => {
    return ({
        list: state.getIn(['home','list']),
        page: state.getIn(['home','listPage'])
    })
};

const mapspathtoprop = (dispatch) => {
    return ({
        handleMoreClick(page) {
            dispatch(actionCreators.getMoreList(page))
        }
    })    
};

export default connect(mapstatetoprop,mapspathtoprop)(List);