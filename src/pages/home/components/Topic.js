import React, { PureComponent, Fragment } from 'react';
import { connect } from 'react-redux';
import { TopicWrapper, TopicItem } from '../style';

class Topic extends PureComponent {
    render() {
        return (
            <Fragment>
                <TopicWrapper>
                    {
                        this.props.topicList.map((item, index) => (<TopicItem key={item.get('id')}><img className="topic-pic" src={item.get('imgUrl')} alt=""/>{item.get('title')}</TopicItem>))
                    }
                </TopicWrapper>
            </Fragment>
        );
    }
}

const mapStateToProps = (state) => ({
    topicList: state.getIn(['home', 'topicList'])
});

export default connect(mapStateToProps, null)(Topic);