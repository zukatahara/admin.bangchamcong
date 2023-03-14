import React, { useEffect } from "react";
import { Redirect, Route } from "react-router-dom";
import { setAuthorization } from "../helpers/api_helper";
import { useDispatch } from "react-redux";

import { useProfile } from "../Components/Hooks/UserHooks";

import { logoutUser } from "../store/actions";
import axios from "axios";

const AuthProtected =  (props) =>  {
  const dispatch = useDispatch();
  const { userProfile, loading, token } = useProfile();
  useEffect(  () => {
    const getUser = async () =>
    {
      const userList = await axios.get(process.env.REACT_APP_API_URL + "/api/v1/users/init",{headers:{
        Authorization:"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyX2lkIjoiNjQwZmQ3NWU4YTNkODg4NTIyNmY0OGIwIiwiaWF0IjoxNjc4NzYwMTY2LCJleHAiOjE2Nzg4NDY1NjZ9.Z0_vlnWiAFx1rPHeJx09cvkCj1Np43et-qqtLgXRj2g"
      }}).then((res) =>{

      }).catch(() =>
      {
      dispatch(logoutUser());
      
      })


    }
    if (userProfile && !loading && token) {
      setAuthorization(token);
    } else if (!userProfile && loading && !token) {
      dispatch(logoutUser());
    }
   getUser()
  }, [token, userProfile, loading, dispatch]);

  /*
    redirect is un-auth access protected routes via url
    */

  if (!userProfile && loading && !token) {
    return (
      <Redirect to={{ pathname: "/login", state: { from: props.location } }} />
    );
  }

  return <>{props.children}</>;
};

const AccessRoute = ({ component: Component, ...rest }) => {
  return (
    <Route
      {...rest}
      render={props => {
        return (<> <Component {...props} /> </>);
      }}
    />
  );
};

export { AuthProtected, AccessRoute };