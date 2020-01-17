import styled from 'styled-components';

export const HomeWrapper =  styled.div`
    overflow:hidden;
    width:960px;
    margin: 0 auto;
    padding-top: 30px;
`
export const HomeLeft =  styled.div`
    width: 625px;
    margin-left: 15px;   
    float:left;
    .banner-img {
        width:625px;
        height:270px;
    };
    
`
export const HomeRight =  styled.div`
    width:280px;
    float: right;
`
// topic----------------------------------------

export const TopicWrapper = styled.div`
    overflow: hidden; //触发BFC使能包住内部元素，自适应高度；
    padding: 20px 0 10px 0;
    margin-left: -18px;
    .more {
        color:#969696;
        float: left;
        line-height: 32px;
        margin-left: 18px;
        text-decoration: none;
    }
`
export const TopicItem = styled.div`
    margin: 0 0 18px 18px;
    float: left;
    height: 32px;
    line-height: 32px;
    background:#f7f7f7;
    font-size: 14px;
    color: #000;
    border: 1px solid #dcdcdc;
    border-radius: 4px;
    span {
        padding: 0 10px;
    }
    .topic-img {
        float:left;
        width:32px;
        height:32px;        
    }
`

// listItem---------------------------
export const ListItem = styled.div`
    position: relative;
    height: 95px;
    border-bottom: 1px solid #969696;  
    padding: 15px 2px 10px 0;
  .list-img {    
    position: absolute;
    top: 50%;
    right: 0;
    margin-top: -40px;
    height: 80px;
    width:100px;
}  
`
export const Word = styled.div`
    float: left;
    line-height: 24px;
    width: 500px;
    color: #969696
    font-size:13px;
    .list-title {
        color:#000;
        font-weight:700;
        font-size:18px;    
        display:block;
        text-decoration: none;
    }
    ul li{
       float: left; 
       padding-right: 5px;
    } 
`
export const More = styled.div`
    width: 200px;
    height:40px;
    margin:30px auto;
    line-height:40px;
    text-align: center;
    color: #fff
    background: #a5a5a5;
    border-radius: 25px;
    cursor: pointer;
`

// recommend----------------------

export const RecommendWrapper = styled.div`
    height: 224px;
`
export const Aa = styled.a`
    display: block;
    margin:0 0 6px 0;
    width:280px;
    height:50px;
    border-radius:5px;
    background: url(${(props) => props.imgUrl}) no-repeat;    
    background-size:  280px 50px;  
`
export const Download = styled.a`
    display: block;
    width:234px;
    height:60px;
    margin-top: 10px;
    padding:10px 22px;
    border: 1px solid #f0f0f0;
    cursor: pointer;
    img {
        float:left;
        width:60px;
        height:60px;
        opacity: .85;
        vertical-align: middle;
    }
    .info {
        vertical-align: middle;      
        float: right;
        margin: 10px 0 0 7px;
    }
   
    .title {
        color:#333;
        font-size:15px; 
        line-height:21px;           
    }
    .description {
        color: #999;
        font-size: 13px;
        line-height:18px;
    }
`
// writer------------------------
export const WriterWrapper = styled.div`
    margin:30px 0;
    color: #969696;
    a {
        text-decoration:none;
    }
    .check-all {
        display:block;
        width: 200px;
        height:50px;
        margin:0 auto;
        line-height:50px;
        text-align: center;
    }
`;
export const Title = styled.div`
    height: 30px;
    line-height: 30px;
    font-size: 14px;
    margin-bottom:10px;
    .writeTitle {
        float:left;
        cursor: pointer;
    }
    .switch {
        float:right;
        color: #969696;
        cursor: pointer;
    }
    .iconfont {
        display: inline-block;
    }
`;
export const WriterList = styled.ul`
    li {overflow:hidden
        width:100%;
        margin-top:5px;
    };
    .write-img {
        float:left;
        width:48px;
        height:48px;
        border-radius:24px;
    }
    .name {
        float: left;
        width: 150px;
        padding: 5px 0 5px 5px;

    }
    .writer {
        float:left;
        text-align: left;        
        height: 26px;
        padding: 0 0 5px 5px;    
    }
    .note {
        float: right;
    }  
`;
// backtop-----------------------------------------

export const BackTop = styled.div`
    position: fixed;
    right:100px;
    bottom: 30px;
    width: 60px;
    height: 60px;
    font-size: 24px;
    line-height: 60px;
    text-align: center;
    border:1px solid #969696;
`