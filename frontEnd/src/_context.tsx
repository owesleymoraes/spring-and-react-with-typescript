import React, { ReactNode, createContext, useState } from "react";

interface UserContextProps {
  userIsLogged: boolean;
  setUserIsLogged: (value: boolean) => void;
  tokenLogged: string | null;
  changeTokenLogged: (value: string) => void;
  userIdLogged: string | null;
  changeUserIdLogged: (value: string) => void;
}

interface ChildrenProps {
  children: ReactNode | ReactNode[];
}

const AuthContext = createContext<UserContextProps>({
  userIsLogged: false,
  setUserIsLogged: () => {},
  tokenLogged: "",
  changeTokenLogged: (value: string) => {},
  userIdLogged: "",
  changeUserIdLogged: (value: string) => {},
});

const AuthContextProvider = ({ children }: ChildrenProps) => {
  const [tokenLogged, setTokenLogged] = useState("");
  const [userIdLogged, setUserIdLogged] = useState("");
  const [userIsLogged, setUserIsLogged] = useState(false);

  const changeTokenLogged = (value: string) => {
    setTokenLogged(value);
  };

  const changeUserIdLogged = (value: string) => {
    setUserIdLogged(value);
  };

  const value: UserContextProps = {
    userIsLogged,
    setUserIsLogged,
    tokenLogged,
    changeTokenLogged,
    userIdLogged,
    changeUserIdLogged
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export { AuthContextProvider, AuthContext };
