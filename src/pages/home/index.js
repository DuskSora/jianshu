import React, { PureComponent } from 'react';
import { connect } from 'react-redux';
import { HomeWrapper, HomeLeft, HomeRight, BakcTop } from './style';
import { actionCreator } from './store';
import Topic from './components/Topic';
import List from './components/List';
import Recommend from './components/Recommend';
import Writer from './components/Writer';

class Home extends PureComponent {
    render() {
        return (
            <HomeWrapper>
                <HomeLeft>
                    <img className="banner-img" src="https://upload-images.jianshu.io/upload_images/1835526-1435323bc2aa6f9c.jpg" alt="" />
                    <Topic />
                    <List />
                </HomeLeft>
                <HomeRight>
                    <Recommend />
                    <Writer />
                </HomeRight>
                {
                    this.props.showScroll? <BakcTop onClick={this.handleScrollTop}>顶部</BakcTop> : null
                }
            </HomeWrapper>
        );
    }

    handleScrollTop() {
        window.scrollTo(0, 0);
    }

    bindEvent() {
        window.addEventListener('scroll', this.props.changeScrollTopShow);
    }
    
    componentDidMount() {
        this.props.changeHomeData();
        this.bindEvent();
    }
    
    componentWillUnmount() {
        window.removeEventListener('scroll', this.props.changeScrollTopShow);
    }
}

const mapStateToProps = state => ({
    showScroll: state.getIn(['home', 'showScroll'])
});

const mapDispatchToProps = dispatch => ({
    changeHomeData() {
        dispatch(actionCreator.getHomeData());
    },
    changeScrollTopShow() {
        const scrollTop = document.documentElement.scrollTop || document.body.scrollTop;
        if (scrollTop > 100) {
            dispatch(actionCreator.toggleScrollShow(true));
        } else {
            dispatch(actionCreator.toggleScrollShow(false));
        }
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);