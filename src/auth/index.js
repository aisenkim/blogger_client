import { createContext, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import apis from "../api";

// export type Auth = {
//   user: { name: string; username: string; email: string } | null;
//   loggedIn: boolean;
//   getLoggedIn: () => void;
// };

// type Action = {
//   type: string;
//   payload: any;
// };

const AuthContext = createContext();

export const AuthActionType = {
  GET_LOGGED_IN: "GET_LOGGED_IN",
  REGISTER_USER: "REGISTER_USER",
  LOGIN_USER: "LOGIN_USER",
  SET_LOGGED_IN: "SET_LOGGED_IN",
  LOGOUT_USER: "LOGOUT_USER",
};

function AuthContextProvider(props) {
  const [auth, setAuth] = useState({ user: null, loggedIn: false });

  const navigate = useNavigate();

  // useEffect(() => {
  //   try {
  //     auth.getLoggedIn();
  //   } catch (err) {
  //     console.log("USER NOT LOGGED IN YET");
  //   }
  // }, []);

  const authReducer = (action) => {
    const { type, payload } = action;
    switch (type) {
      case AuthActionType.GET_LOGGED_IN: {
        return setAuth({
          user: payload.user,
          loggedIn: payload.loggedIn,
        });
      }
      case AuthActionType.REGISTER_USER: {
        return setAuth({
          user: payload.user,
          loggedIn: true,
        });
      }
      case AuthActionType.LOGIN_USER: {
        return setAuth({
          user: payload.user,
          loggedIn: true,
        });
      }
      case AuthActionType.SET_LOGGED_IN: {
        return setAuth({
          user: payload.user,
          loggedIn: true,
        });
      }
      case AuthActionType.LOGOUT_USER: {
        return setAuth({
          user: payload.user,
          loggedIn: false,
        });
      }
      default:
        return auth;
    }
  };

  auth.getLoggedIn = async function () {
    try {
      const response = await apis.getLoggedIn();
      console.log("Response: ", response);
      if (response.status === 200) {
        const user = {
          name: response.data.name,
          username: response.data.username,
          email: response.data.email,
        };
        authReducer({
          type: AuthActionType.SET_LOGGED_IN,
          payload: {
            loggedIn: user.name !== null || user.name !== "",
            user: user,
          },
        });
      } else {
        console.log("user not logged in");
      }
    } catch (err) {
      console.log("getLoggedIn Error: ", err);
    }
  };

  auth.login = async function (payload) {
    try {
      const response = await apis.login(payload);
      const accessToken = response.headers.authorization;
      localStorage.setItem("accessToken", accessToken);
      await auth.getLoggedIn();
    } catch (err) {
      console.log(err);
    }
  };

  auth.logout = () => {
    localStorage.clear();
    authReducer({
      type: AuthActionType.LOGOUT_USER,
      payload: {
        loggedIn: false,
        user: null,
      },
    });
  };

  return (
    <AuthContext.Provider
      value={{
        auth,
      }}
    >
      {props.children}
    </AuthContext.Provider>
  );
}

export default AuthContext;
export { AuthContextProvider };
