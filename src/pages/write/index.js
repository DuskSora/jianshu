import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';

const Write = (props) => (
    props.loginState ? <div>写文章</div> : <Redirect to="/"/>
);

const mapState = state => ({
    loginState: state.getIn(['login', 'loginState'])
});

export default connect(mapState, null)(Write);