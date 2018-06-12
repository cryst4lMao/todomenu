/**
 * Created by
 * User iAmMao
 * Date 2018/5/23
 * Time 17:24
 */
import React, {Component} from 'react'
import FooterUiComponent from './footerui.js'
import {connect} from 'react-redux'

class FooterComponent extends Component{


    render(){
        return(
            <FooterUiComponent login={this.props.login}/>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(FooterComponent)

function mapStateToProps(state) {
    return {
        login: state.data.login
    }
}

function mapDispatchToProps(dispatch) {
    return { }
}