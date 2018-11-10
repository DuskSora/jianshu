import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { ListItem, ListInfo, LoadMore } from '../style';
import { actionCreator } from '../store';

class List extends PureComponent {
    render() {
        return (
            <Fragment>
                {
                    this.props.articleList.map((item, index) => (<Link key={item.get('id')} to={'/detail/' + item.get('id')}><ListItem><ListInfo><img className="pic" src={item.get('imgUrl')} alt="" /><p className="title">{item.get('title')}</p><p className="desc">{item.get('desc')}</p></ListInfo></ListItem></Link>))
                }
                <LoadMore onClick={() => {this.props.getMoreList(this.props.articlePage + 1);}}>查看更多</LoadMore>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    articleList: state.getIn(['home', 'articleList']),
    articlePage: state.getIn(['home', 'articlePage'])
});

const mapDispatchToProps = dispatch => ({
    getMoreList(articlePage) {
        dispatch(actionCreator.getMoreList(articlePage));
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(List);