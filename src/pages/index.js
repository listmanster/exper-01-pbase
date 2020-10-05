import React from 'react';
import {Link} from 'gatsby'; 

import Layout from '../components/layout';

export default() => (
    <Layout>
    <h1> ParserBase </h1>
    <p>Login</p>
    <Link to="/dashboard">Login to Admin Panel</Link>
    </Layout>
);