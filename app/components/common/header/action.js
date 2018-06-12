export default function(type, action){
    if(type == "LOGOUT"){
        return{
            type: "LOGOUT"
        }
    }
    if(type == "LOGIN"){
        return{
            type: "LOGIN"
        }
    }
}