import React, { useContext, useEffect, useState } from "react";
// import jwt_decode from "jwt-decode";
import { AuthContext } from "../../_context";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { ApiService } from "../../_app/apiservice";
import { Container } from "../../components/Container";
import { showMessageError } from "../../components/Toastr";
import { UsuarioService } from "../../_app/service/userService";
import { LocalStorageService } from "../../_app/service/localStorageService";

export const Login: React.FC = () => {
  const navigate = useNavigate();
  const {
    tokenLogged,
    setUserIsLogged,
    changeTokenLogged,
    changeUserIdLogged,
  } = useContext(AuthContext);

  const [email, setEmail] = useState("");
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const service = new UsuarioService();
  // useEffect(() => {
  //   if (tokenLogged) {
  //     const claims: { [key: string]: any } = jwt_decode(tokenLogged);
  //     changeUserIdLogged(claims.userid);
  //   }
  // }, [tokenLogged]);

  const handleClickEntry = () => {
    service
      .autenticar({ email: email, senha: password })
      .then((response) => {
        setUserId(JSON.stringify(response.data.id));
        ApiService.registrarToken(response.data.token);
        LocalStorageService.addItemLocalStorage(
          "user_logged",
          response.data.token
        );

        changeTokenLogged(response.data.token);
        setUserIsLogged(true);
        setTimeout(() => {
          navigate("/home");
        }, 300);
      })
      .catch((error) => {
        showMessageError(error.response.data);
      });
  };

  const handleClickRegister = () => {
    navigate("/cadastrar");
  };

  return (
    <Container>
      <Card title="Login">
        <Input
          value={email}
          onChangeValue={(e) => setEmail(e)}
          type="email"
          label="Email"
          id="inputEmailFirst"
          ariaDescribedby="emailHelp"
          placeholder="nome@email.com"
          name="email"
        />

        <br />
        <Input
          value={password}
          onChangeValue={(e) => setPassword(e)}
          label="Senha"
          type="password"
          placeholder="**********"
          id="inputPasswordFirst"
          ariaDescribedby="password"
          name="password"
        />
        <br />

        <Button
          title="Entrar"
          icon="sign-in"
          typeButton="success"
          onClick={handleClickEntry}
        />
        <Button
          title="Cadastrar"
          icon="plus"
          typeButton="danger"
          onClick={handleClickRegister}
        />
      </Card>
    </Container>
  );
};
