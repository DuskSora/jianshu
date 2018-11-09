import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { RecommendWrapper, RecommendItem } from '../style';

class Recommend extends PureComponent {
    render() {
        return (
            <Fragment>
                <RecommendWrapper>
                    { this.props.recommendList.map((item, index) => (<RecommendItem key={item.get('id')} url={item.get('imgUrl')} />)) }
                </RecommendWrapper>
            </Fragment>
        );
    }
}

const mapStateToProps = state => ({
    recommendList: state.getIn(['home', 'recommendList'])
});

export default connect(mapStateToProps, null)(Recommend);