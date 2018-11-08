import React from 'react';
import { actionCreator } from './store';
import { connect } from 'react-redux';
import { HeaderWrapper, Logo, Nav, NavItem, NavWrapper, NavSearch, Addition, Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style';
import { CSSTransition } from 'react-transition-group';

const getListArea = (show) => {
    if (show) {
        return (
            <SearchInfo>
                <SearchInfoTitle>
                    热门搜索
                    <SearchInfoSwitch>换一批</SearchInfoSwitch>
                </SearchInfoTitle>
                <SearchInfoList>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                    <SearchInfoItem>教育</SearchInfoItem>
                </SearchInfoList>
            </SearchInfo>
        );
    }
};

const Header = (props) => {
    const { focused, handleInpuFocus, handleInputBlur } = props;
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
                        in={focused}
                        timeout={200}
                        classNames="slide">
                        <NavSearch className={focused ? 'focused' : ''} onFocus={handleInpuFocus} onBlur={handleInputBlur}/>
                    </CSSTransition>
                    <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe629;</i>
                    {getListArea(focused)}
                </NavWrapper>
                <Addition>
                    <Button className="write iconfont">&#xe615;写文章</Button>
                    <Button className="reg">注册</Button>
                </Addition>
            </Nav>
        </HeaderWrapper>
    );
};

const mapStateToProps = (state) => ({
    focused: state.getIn(['header', 'focused'])
    // focused: state.get('header').get('focused')
});

const mapDispatchToProps = (dispatch) => ({
    handleInpuFocus() {
        dispatch(actionCreator.searchFocus());
    },
    handleInputBlur() {
        dispatch(actionCreator.searchBlur());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);