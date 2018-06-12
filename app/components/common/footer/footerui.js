/**
 * Created by
 * User iAmMao
 * Date 2018/5/23
 * Time 17:24
 */
import React, {Component} from 'react';
import { Alert } from 'antd';

//export default class FooterUiConponent extends Component{
//    constructor(){
//        super();
//    }
//
//    render(){
//        let status = this.props.login ?
//            <Alert message="成功登陆" type="success" /> :
//            <Alert message="已退出" type="success" />;
//        return(
//            <div className="foot">
//                {status}
//            </div>
//        )
//    }
//}
//无状态组件

// 1. es6 class
// 2. es5 React.createClass
// 3. function(props){...}无状态组件：无生命周期，无this，性能有优势
export default function(props){
    let status = props.login ?
        <Alert message="成功登陆" type="success" /> :
        <Alert message="已退出" type="success" />;
    return(
        <div className="foot">
            {status}
        </div>
    )
}