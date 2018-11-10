import React, { PureComponent } from 'react';
import { actionCreator } from './store';
import { actionCreator as loginActionCreator } from '../../pages/login/store';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { HeaderWrapper, Logo, Nav, NavItem, NavWrapper, NavSearch, Addition, Button, SearchInfo, SearchInfoTitle, SearchInfoSwitch, SearchInfoList, SearchInfoItem } from './style';
import { CSSTransition } from 'react-transition-group';

class Header extends PureComponent {
    getListArea() {
        const { focused, list, mouseIn, page, totalPage, handleMouseEnter, handleMouseLeave, handleChangePage } = this.props;
        const newList = list.toJS();
        const pageList = [];
        const length = newList.length > page * 10 ? page * 10 : newList.length;
        if (newList.length > 0) {
            for(let i = (page - 1) * 10; i < length; i++) {
                pageList.push(<SearchInfoItem key={newList[i]}>{newList[i]}</SearchInfoItem>);
            }
        }
        if (focused || mouseIn) {
            return (
                <SearchInfo onMouseEnter={() => {handleMouseEnter(mouseIn);}} onMouseLeave={() => {handleMouseLeave(mouseIn);}}>
                    <SearchInfoTitle>
                        热门搜索
                        <SearchInfoSwitch onClick={() => {handleChangePage(page, totalPage);}}>换一批</SearchInfoSwitch>
                    </SearchInfoTitle>
                    <SearchInfoList>
                        {pageList}
                    </SearchInfoList>
                </SearchInfo>
            );
        }
    }

    render() {
        const { focused, list, loginState, handleInpuFocus, handleInputBlur } = this.props;
        return (
            <HeaderWrapper>
                <Link to="/">
                    <Logo />
                </Link>
                <Nav>
                    <NavItem className="left active">首页</NavItem>
                    <NavItem className="left">下载App</NavItem>
                    {
                        loginState ? <NavItem className="right" onClick={this.props.logout}>退出</NavItem>: <Link to="/login"><NavItem className="right">登录</NavItem></Link>
                    }
                    <NavItem className="right">
                        <i className="iconfont">&#xe636;</i>
                    </NavItem>
                    <NavWrapper>
                        <CSSTransition
                            in={focused}
                            timeout={200}
                            classNames="slide">
                            <NavSearch className={focused ? 'focused' : ''} onFocus={() => {handleInpuFocus(list);}} onBlur={handleInputBlur}/>
                        </CSSTransition>
                        <i className={focused ? 'iconfont focused' : 'iconfont'}>&#xe629;</i>
                        {this.getListArea()}
                    </NavWrapper>
                    <Addition>
                        <Link to="/write">
                            <Button className="write iconfont">&#xe615;写文章</Button>
                        </Link>
                        <Button className="reg">注册</Button>
                    </Addition>
                </Nav>
            </HeaderWrapper>
        );
    }
}

const mapStateToProps = (state) => ({
    focused: state.getIn(['header', 'focused']),
    list: state.getIn(['header', 'list']),
    mouseIn: state.getIn(['header', 'mouseIn']),
    page: state.getIn(['header', 'page']),
    totalPage: state.getIn(['header', 'totalPage']),
    // focused: state.get('header').get('focused')
    loginState: state.getIn(['login', 'loginState'])
});

const mapDispatchToProps = (dispatch) => ({
    handleInpuFocus(list) {
        (list.size === 0) && dispatch(actionCreator.getList());
        dispatch(actionCreator.searchFocus());
    },
    handleInputBlur() {
        dispatch(actionCreator.searchBlur());
    },
    handleMouseEnter(mouseIn) {
        if (!mouseIn) {
            dispatch(actionCreator.mouseIn());
        }
    },
    handleMouseLeave(mouseIn) {
        if (mouseIn) {
            dispatch(actionCreator.mouseOut());
        }
    },
    handleChangePage(page, totalPage) {
        if (page >= totalPage) {
            page = 1;
        } else {
            page = page + 1;
        }
        dispatch(actionCreator.changePage(page));
    },
    logout() {
        dispatch(loginActionCreator.logout());
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Header);