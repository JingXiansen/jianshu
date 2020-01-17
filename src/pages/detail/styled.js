import styled from 'styled-components';

export const DetailWrapper = styled.div`
    overflow: hidden;
    width:640px;
    height:900px;
    background: #eee;
    margin: 10px auto 20px;
    padding: 25px 25px 0;
`
export const Header = styled.h1`
    text-align: left;
    font-size: 30px;
    font-weight:700;
    line-height:40px;
    padding-bottom:25px;
`
export const WriterTitle = styled.div`
    overflow: hidden;
    padding-bottom: 30px;
    line-height:24px;
    .writer-img {
        float:left;
        width: 48px;
        height: 48px;
        border-radius: 24px;
        margin-right:10px;
    }
    .writer-name {
        width:300px;
    }
`
export const Paper = styled.div`
    color:#2f2f2f;
    text-align: left;
    line-height: 30px;
    div {
        margin: 0 auto;
        text-align: center;
    }
    img {
        width: 580px;             
    }

`