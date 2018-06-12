import chai from "chai";
import reducer from "../app/reducer/reducer";
import actionTest from "../app/components/common/header/action.js"

var expert = chai.expect;

// 自动化测试
describe("测试reducer模块",function(){

    it("测试login功能",function(){

        let result = reducer({
            login: false,
            categories: []
        },{
            type: "LOGIN"
        })

        expert(result.login).to.equal(true);
    })


    it("测试categories功能",function(){

        let result = reducer({
            login: false,
            categories: []
        },{
            type: "CHANGECATE",
            values: [{"id":"002","name":"课程","type":"mail"}]
        })


        expert(result).to.eql({
            login: false,
            categories: [{"id":"002","name":"课程","type":"mail"}]
        });
    })

});

describe("测试header模块",function(){

    it("测试logoutin功能",function(){
        let result = actionTest("LOGOUT");
        console.log(result);
        expert(result.type).to.eql("LOGOUT");
    })
})