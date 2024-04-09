import React from 'react';
import { Button, Divider, Form, Input } from 'antd';
import LoginWrap from './components/login_wrap';
import { Link } from 'react-router-dom';
function Login() {

    const [form] = Form.useForm();

    async function login_click() {
        const form_data = await form.validateFields()
        if (form_data) {
            console.log(form_data)
        }
    }
    return (
        <LoginWrap>
            <Form
                form={form}
            >
                <div className='login_box_header'>
                    <button className='switch'>请登录</button>
                </div>
                <p className='login_box_p'>登录界面</p>
                <Form.Item name="username" rules={[{ required: true, message: '请输入用户名' }]}>
                    <Input type="text" id="username" placeholder={'用户名'} />
                </Form.Item>
                <Form.Item name="password" rules={[{ required: true, message: '请输入密码' }]}>
                    < Input type="password" id="password" placeholder={'密码'} />
                </Form.Item>
                <Button onClick={login_click} className='login_button' type="primary">登录</Button>
                <Divider />
                <Link className='login_enroll' to="/register">没有账号？注册新账号</Link>
            </Form>
        </LoginWrap>
    )

}


export default Login;