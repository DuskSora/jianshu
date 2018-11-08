import React, { Component } from 'react';
import { actionCreator } from './store';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, Nav, NavItem, NavWrapper, NavSearch, Addition, Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style';
import { CSSTransition } from 'react-transition-group';

class Header extends Component {
    getListArea() {
        if (this.props.focused) {
            return (
                <SearchInfo>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {this.props.list.map((item, index) => <SearchInfoItem key={index}>{item}</SearchInfoItem>)}
                    </SearchInfoList>
                </SearchInfo>
            );
        }
    }

    render() {
        return (
            <HeaderWrapper>
                <Logo />
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    <NavItem className="right">登录</NavItem>
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <NavWrapper>
                        <CSSTransition
                            in={this.props.focused}
                            timeout={200}
                            classNames="slide">
                            <NavSearch className={this.props.focused ? 'focused' : ''} onFocus={this.props.handleInpuFocus} onBlur={this.props.handleInputBlur}/>
                        </CSSTransition>
                        <i className={this.props.focused ? 'iconfont focused' : 'iconfont'}>&#xe629;</i>
                        {this.getListArea()}
                    </NavWrapper>
                    <Addition>
                        <Button className="write iconfont">&#xe615;写文章</Button>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list'])
    // focused: state.get('header').get('focused')
});

const mapDispatchToProps = (dispatch) => ({
    handleInpuFocus() {
        dispatch(actionCreator.getList());
        dispatch(actionCreator.searchFocus());
    },
    handleInputBlur() {
        dispatch(actionCreator.searchBlur());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);