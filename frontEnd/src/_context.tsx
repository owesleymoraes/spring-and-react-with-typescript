import React, { ReactNode, createContext, useState } from "react";

interface UserContextProps {
  userIsLogged: boolean;
  setUserIsLogged: (value: boolean) => void;
  tokenLogged: string | null;
  changeTokenLogged: (value: string) => void;
}

interface ChildrenProps {
  children: ReactNode | ReactNode[];
}

const AuthContext = createContext<UserContextProps>({
  userIsLogged: false,
  setUserIsLogged: () => {},
  tokenLogged: "",
  changeTokenLogged: (value: string) => {},
});

const AuthContextProvider = ({ children }: ChildrenProps) => {
  const [userIsLogged, setUserIsLogged] = useState(false);
  const [tokenLogged, setTokenLogged] = useState("");

  const changeTokenLogged = (value: string) => {
    setTokenLogged(value);
  };

  const value: UserContextProps = {
    userIsLogged,
    setUserIsLogged,
    tokenLogged,
    changeTokenLogged,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider, AuthContext };
