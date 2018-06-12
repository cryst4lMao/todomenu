/**
 * Created by
 * User iAmMao
 * Date 2018/6/1
 * Time 17:27
 */
import React from 'react';
import ReactDom from 'react-dom';
import HeaderComponent from '../common/header/header';
import FooterComponent from '../common/footer/footer';


export default class DeatilComponent extends React.Component{
    constructor(){
        super();
        this.state = {
            title: "",
            article: ""
        }
    }
    componentDidMount(){
        let link = 'detail.json?id=' + this.props.params.id
        fetch(link)
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{
                this.setState({
                    title: res.data.title,
                    article: res.data.article
                })
            })
            .catch((ex)=>{
                console.log("parsing fail"+ex);
            })
    }
    render(){
        return(
            <div className="main">
                <HeaderComponent />
                <div className="detailBox">
                    <div>detail</div>
                    <div>{this.props.params.id}</div>
                    <div>{this.state.title}</div>
                    <div dangerouslySetInnerHTML={{__html: this.state.article}}></div>
                </div>
                <FooterComponent/>
            </div>
        )
    }
}