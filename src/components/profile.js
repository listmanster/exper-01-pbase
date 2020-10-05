import React from 'react';
import {Link} from 'gatsby'; 


const Profile = () => {
    return(
        <div className="dashboard-header">
            <nav>
                <Link to="/dashboard/secret" activeClassName="active">
                    Secret
                </Link>
                <Link to="/dashboard/base" activeClassName="active">
                    Base
                </Link>
            </nav>
            <span>Show Login Status</span>
        </div>
    )
};

export default Profile ;
