/**
 * Created by
 * User iAmMao
 * Date 2018/6/2
 * Time 14:09
 */
import React, {Component} from 'react';
import ReactDom from 'react-dom';
import { Row, Col, Menu, Icon, Button, Modal, Tabs, Form, Input } from 'antd';

const TabPane = Tabs.TabPane;
const FormItem = Form.Item;

class HeaderUiComponent extends Component{
    constructor(props){
        super(props);
        this.onSubmit = this.onSubmit.bind(this);
    }
    onSubmit(e) {
        e.preventDefault();
        //console.log('收到表单值：', this.props.form.getFieldsValue());

        //validateFields???
        this.props.form.validateFields((err,values) => {
            //console.log(err);
            if(!err){
                this.props.handleSubmit();
            }else{

            }
        });
    }
    componentWillMount(){
        //console.log(this.props.login);
    }
    render(){
        const { getFieldProps } = this.props.form;
        const formItemLayout = {
            labelCol: { span: 6 },
            wrapperCol: { span: 14 }
        };
        return(
            <div>
                <Row>
                    <Col span={12}>
                        <Menu onClick={this.handleClick}
                              mode="horizontal">
                            {
                                this.props.categories.map((value, key)=>{
                                    return(
                                        <Menu.Item key={value.id}>
                                            <Icon type={value.type} />{value.name}
                                        </Menu.Item>
                                    )
                                })
                            }
                        </Menu>
                    </Col>
                    <Col offset={10} span={2}>
                        {
                            !this.props.login ?
                                <Button onClick={this.props.handleModelToggle} type="primary" style={{top:'8px'}}>登陆/注册</Button>:
                                <Button onClick={this.props.handleLogout} type="" style={{top:'8px'}}>退出</Button>
                        }

                    </Col>
                </Row>
                <Modal title="登陆/注册" visible={this.props.visible}
                       onOk={this.props.handleModelToggle} onCancel={this.props.handleModelToggle}>
                    <Tabs type="card">
                        <TabPane tab="登陆" key="1">
                            <Form onSubmit={this.onSubmit}>
                                <FormItem
                                    {...formItemLayout}
                                    label="用户名"
                                >
                                    <Input placeholder="Please enter username" {...getFieldProps('userName')} />
                                </FormItem>
                                <FormItem
                                    {...formItemLayout}
                                    label="密码"
                                >
                                    <Input type="password" placeholder="Please enter password" {...getFieldProps('password')} />
                                </FormItem>
                                <FormItem wrapperCol={{ span: 16, offset: 6 }} style={{ marginTop: 24 }}>
                                    <Button type="primary" htmlType="submit">确定</Button>
                                </FormItem>
                            </Form>
                        </TabPane>
                        <TabPane tab="注册" key="2">注册</TabPane>
                    </Tabs>
                </Modal>
            </div>


        )
    }
}

export default Form.create()(HeaderUiComponent);