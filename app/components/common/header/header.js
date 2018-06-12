/**
 * Created by
 * User iAmMao
 * Date 2018/6/1
 * Time 21:46
 */
import React from 'react';
import ReactDom from 'react-dom';
import HeaderUiComponent from './headerui.js';
import {connect} from 'react-redux';
import { notification } from 'antd';
import actionCreator from './action.js';

class HeaderComponent extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            visible: false
        };
        this.handleModelToggle = ((e)=>{
            this.setState({
                visible: !this.state.visible
            })
        })

        this.handleSubmit = ((e) => {
            notification.open({
                message: '登陆成功',
                description: '恭喜你，这里有你最想要的商品，尽情选购吧～'
            });
            this.setState({
                visible: false
            });
            this.props.handleLogIn();
        })

        this.handleLogout = ((e) => {
            notification.open({
                message: '退出成功',
                description: '欢迎再来～'
            });
            this.props.handleLogOut();
        })
    }
    componentDidMount(){
        //console.log(this.props.login);
        if(!this.props.categories.length){
            fetch('./categories.json')
                .then((response)=>{
                    return response.json()
                })
                .then((json)=>{
                    let categories = json.data.categories;
                    (categories.length > 10) && (categories.length = 10);

                    this.props.changeCategories(categories);

                })
                .catch((ex)=>{
                    console.log('parsing fail'+ex);
                })
        }

    }

    render(){
        return (

            <HeaderUiComponent {...this.state} categories={this.props.categories} login={this.props.login} handleSubmit={this.handleSubmit} handleModelToggle={this.handleModelToggle} handleLogout={this.handleLogout}/>

        )
    }
}
function mapStateToProps(state) {
    return {
        login: state.data.login,
        categories: state.data.categories
    }
}

function mapDispatchToProps(dispatch) {
    return {
        handleLogIn: function(){
            dispatch(actionCreator("LOGIN"));
        },
        handleLogOut: function(){
            dispatch(actionCreator("LOGOUT"));
        },
        changeCategories: function(categories){
            //console.log(categories);
            let action = {
                type: "CHANGECATE",
                values: categories
            };
            dispatch(action);

        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent)