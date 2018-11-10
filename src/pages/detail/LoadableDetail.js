import React from 'react';
import loadable from 'react-loadable';

const LoadableDetail = loadable({
    loader: () => import('./index'),
    loading() {
        return <div>正在加载</div>;
    }
});

export default () => <LoadableDetail />;