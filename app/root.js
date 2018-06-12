import React from 'react'
import ReactDom from 'react-dom'
import {Router, Route, browserHistory} from 'react-router'
import IndexComponent from './components/index/index.js'
import DetailComponent from './components/detail/index.js'
import {createStore, combineReducers} from 'redux'
import reducer from './reducer/reducer'
import {Provider} from 'react-redux'
import {syncHistoryWithStore,routerReducer} from 'react-router-redux'


//const defaultState = {
//    data: {
//        login: login,
//        categories: []
//    },
//    routing: {
//
//    }
//}

const store = createStore(combineReducers({
    data: reducer,
    routing: routerReducer
}), window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__() );

const history = syncHistoryWithStore(browserHistory, store);
//const store = createStore(reducer, window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__());

class Root extends React.Component{
    render(){
        return(
            <Provider store={store}>
                <Router history={history}>
                    <Route path="/" component={IndexComponent}></Route>
                    <Route path="/detail/:id" component={DetailComponent}></Route>
                </Router>
            </Provider>
        )
    }
}

ReactDom.render(<Root/>, document.getElementById("root"));