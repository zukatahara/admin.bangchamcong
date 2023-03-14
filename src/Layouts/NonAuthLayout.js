import React, { useEffect } from 'react';
import { useHistory, withRouter } from 'react-router-dom';

//redux
import { useSelector } from "react-redux";
import { useProfile } from '../Components/Hooks/UserHooks';
import { setAuthorization } from '../helpers/api_helper';
import { logoutUser } from '../store/actions';

const NonAuthLayout = ({ children }) => {
    const history = useHistory();

    const {
        layoutModeType,
    } = useSelector(state => ({
        layoutModeType: state.Layout.layoutModeType,
    }));
    const { userProfile, loading, token } = useProfile();
    useEffect(() =>{
        const userToken = sessionStorage.getItem("authUser")
        const Token = JSON.parse(sessionStorage.getItem("authUser"))
        if (userToken) {
            setAuthorization(Token);
            history.push("/user/list")
          }
    })
    useEffect(() => {
        if (layoutModeType === "dark") {
            document.body.setAttribute("data-layout-mode", "dark");
        } else {
            document.body.setAttribute("data-layout-mode", "light");
        }
    }, [layoutModeType]);
    return (
        <div>
            {children}
        </div>
    );
};

export default withRouter(NonAuthLayout);