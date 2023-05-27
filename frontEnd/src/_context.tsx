import React, { ReactNode, createContext, useState } from "react";

interface UserContextProps {
  userIsLogged: boolean;
  setUserIsLogged: (value: boolean) => void;
  claimsTokenLogged: string[];
  getClaimsTokenLogged: (value: { [key: string]: any }) => void;
 
}

interface ChildrenProps {
  children: ReactNode | ReactNode[];
}

const AuthContext = createContext<UserContextProps>({
  userIsLogged: false,
  setUserIsLogged: () => {},
  claimsTokenLogged:[],
  getClaimsTokenLogged: (value:  { [key: string]: any }) => {},

});

const AuthContextProvider = ({ children }: ChildrenProps) => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [claimsTokenLogged, setClaimsTokenLogged] = useState([]);

  const getClaimsTokenLogged = (value: any) => {
    setClaimsTokenLogged(value);
  };

  const value: UserContextProps = {
    userIsLogged,
    setUserIsLogged,
    claimsTokenLogged,
    getClaimsTokenLogged,
   
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider, AuthContext };
