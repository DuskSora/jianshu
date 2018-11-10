import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { actionCreator } from './store';
import { DetailWrapper, Header, Content } from './style';

class Detail extends PureComponent {
    render() {
        return (
            <Fragment>
                <DetailWrapper>
                    <Header>{this.props.title}</Header>
                    <Content dangerouslySetInnerHTML={{__html: this.props.content}}></Content>
                </DetailWrapper>
            </Fragment>
        );
    }

    componentDidMount() {
        this.props.getDetail(this.props.match.params.id);
    }
}

const mapState = state => ({
    title: state.getIn(['detail', 'title']),
    content: state.getIn(['detail', 'content'])
});

const mapDispatch = dispatch => ({
    getDetail(id) {
        dispatch(actionCreator.getDetail(id));
    }
});

export default connect(mapState, mapDispatch)(withRouter(Detail));