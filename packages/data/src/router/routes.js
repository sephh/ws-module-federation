import React, {lazy} from 'react';

const Search = lazy(() => import('../views/Search'));

const routes = () => {
    return [
        {
            path: '/search',
            component: Search,
            exact: true
        }
    ]
};

export default routes;