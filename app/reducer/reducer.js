/**
 * Created by
 * User iAmMao
 * Date 2018/6/2
 * Time 13:47
 */
let login = false;

try{
    login = localStorage.login ? true : login;
}catch(e){}

const defaultState = {
    login: login,
    categories: []
}

//redux  三项基本原则
//1.  唯一的数据源
//2.  保持状态只读
//3.  数据改变只能通过纯函数
export default function(state=defaultState, action){
    //console.log(state.login);
    if(action.type=="LOGIN"){
        try {
            localStorage.login = "true"
        }catch(e) {}
        return Object.assign({}, state, {
            login: true
        })
    }
    if(action.type=="LOGOUT"){
        try {
            localStorage.removeItem("login")
        }catch(e) {}
        return Object.assign({}, state, {
            login: false
        })
    }
    if(action.type=="CHANGECATE_add"){

        let res = Object.assign({}, state, {
            categories: [...action.value]
        })
        return res;
    }
    if(action.type=="CHANGECATE"){

        let res = Object.assign({}, state, {
            categories: [...action.values]
        })
        return res;
    }
    return state

}