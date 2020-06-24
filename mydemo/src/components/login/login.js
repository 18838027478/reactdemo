import React, { Component } from "react";
import { Form, Input, Button } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";
import "./login.css";
class Login extends Component {
  render() {
    return (
      <div id="login">
        <header>
          <p>商品管理系统</p>
        </header>
        <div className="content">
          <div className="section">
            <h1>用户登录</h1>
            <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true
              }}
              onFinish={this.onFinish}
            >
              {/* onFinish={onFinish} */}
              <Form.Item
                name="username"
                rules={[
                  {
                    required: true,
                    message: "Please input your Username!" //错误提醒
                  },
                  {
                    max: 8,
                    message: "用户名最长为8位"
                  },
                  {
                    min: 4,
                    message: "用户名最小为4位"
                  },
                  {
                    pattern: /^[a-zA-Z0-9]+$/,
                    message: "用户名必须是英文字母、数字、下划线等组成"
                  }
                ]}
              >
                {/* */}
                <Input
                  prefix={<UserOutlined className="site-form-item-icon" />}
                  placeholder="Username"
                />
              </Form.Item>
              <Form.Item
                name="password"
                rules={[
                  {
                    required: true,
                    message: "Please input your Password!"
                  },
                  {
                    max: 10,
                    message: "密码最长为不能超过10位"
                  },
                  {
                    min: 6,
                    message: "密码最小为6位"
                  },
                  {
                    pattern: /^[a-zA-Z0-9]+$/,
                    message: "用户名必须是英文字母、数字、下划线等组成"
                  }
                ]}
              >
                {/*  */}
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="Password"
                />
              </Form.Item>
              <Form.Item>
                <Form.Item
                  name="remember"
                  valuePropName="checked"
                  noStyle
                ></Form.Item>
              </Form.Item>

              <Form.Item>
                <Button
                  type="primary"
                  htmlType="submit"
                  className="login-form-button"
                >
                  Log in
                </Button>
              </Form.Item>
            </Form>
          </div>
        </div>
        {/* 3B625B */}
      </div>
    );
  }
  onFinish = value => {
    console.log(value, "获取结果");
  };
}

export default Login;
