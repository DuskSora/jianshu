import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { LoginWarpper, LoginBox, Input, Button } from './style';
import { actionCreator } from './store';

class Login extends PureComponent {
    render() {
        if (!this.props.loginState) {
            return (
                <LoginWarpper>
                    <LoginBox>
                        <Input placeholder="帐号" ref={input => {this.account = input;}}></Input>
                        <Input placeholder="密码" type="password" ref={input => {this.password = input;}}></Input>
                        <Button onClick={() => {this.props.login(this.account.value, this.password.value);}}>登录</Button>
                    </LoginBox>
                </LoginWarpper>
            );
        } else {
            return <Redirect to="/" />;
        }
    }
}

const mapState = state => ({
    loginState: state.getIn(['login', 'loginState'])
});

const mapDispatch = dispatch => ({
    login(account, password) {
        dispatch(actionCreator.login(account, password));
    }
});

export default connect(mapState, mapDispatch)(Login);