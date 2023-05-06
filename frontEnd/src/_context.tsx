import React, { ReactNode, createContext, useState } from "react";

interface UserContextProps {
  userIsLogged: boolean;
  setUserIsLogged: (value: boolean) => void;
}

interface ChildrenProps {
  children: ReactNode | ReactNode[];
}

const AuthContext = createContext<UserContextProps>({
  userIsLogged: false,
  setUserIsLogged: () => {},
});

const AuthContextProvider = ({ children }: ChildrenProps) => {
  const [userIsLogged, setUserIsLogged] = useState(false);

  const value: UserContextProps = {
    userIsLogged,
    setUserIsLogged,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider, AuthContext };
