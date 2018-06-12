/**
 * Created by
 * User iAmMao
 * Date 2018/6/1
 * Time 17:27
 */
import React from 'react'
import ReactDom from 'react-dom'
import { Card, Col, Row } from 'antd'
import { Link } from 'react-router'
import HeaderComponent from '../common/header/header.js'
import FooterComponent from '../common/footer/footer.js'


import '../../css/page.css'
//import '../../../node_modules/antd/dist/antd.css'

export default class IndexComponent extends React.Component{
    constructor(props){
        super(props);

        let login = false;
        try{
            login = localStorage.login ? true : login;
        }catch(e){}

        this.state = {
            login: login,
            articles: []
        }

    }
    componentDidMount(){
        console.log(this.state.login);
        fetch('./index.json')
            .then((res)=>{
                return res.json()
            })
            .then((res)=>{
                this.setState({
                    articles: res.data.categories
                })
            })
            .catch((ex)=>{
                console.log('parsing failed',ex)
            })
    }
    render(){
        return(
            <div className="main">
                <HeaderComponent login={this.state.login}/>
                <div className="code-box-demo" style={{ background: '#ECECEC', padding: '30px' }}>
                    <Card title="Card title" extra={<a href="#">More</a>} style={{ width: 1024 }}>
                        {
                            this.state.articles.map((value,index)=>{
                                return(
                                    <p key={value.id}>
                                        <Link to={"/detail/"+value.id}>[{value.name}]</Link>
                                    </p>
                                )
                            })
                        }
                    </Card>

                </div>
                <FooterComponent login={this.state.login}/>
            </div>
        )
    }
}
