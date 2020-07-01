import { useEffect } from 'react';
import { navigate } from 'gatsby';

export default () => {
    useEffect(() => {
        navigate('/');
    }, []);
    return null;
};

// import React from 'react';
// import Layout from '../components/layout';
// import SEO from '../components/seo';
// import './index.css';

// const NotFoundPage = () => (
//     <Layout>
//         <SEO title="404: Not found" />
//         <div className="app">
//             <div className="header">
//                 <h1>
//                     <span>
//                         FANCYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYYY
//                     </span>
//                 </h1>
//                 <div className="about">
//                     <span>
//                         Page not found{' '}
//                         <span role="img" aria-label="crying">
//                             😢😢😢
//                         </span>
//                     </span>
//                 </div>
//             </div>
//         </div>
//     </Layout>
// );

// export default NotFoundPage;
