import React, { useState } from "react";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { UsuarioService } from "../../_app/service/userService";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userId, setUserId] = useState("");
  const [messageError, setMessageError] = useState("");

  const service = new UsuarioService();

  const handleClickEntry = () => {
    service
      .autenticar({ email: email, senha: password })
      .then((response) => {
        setUserId(JSON.stringify(response.data.id));
        localStorage.setItem("user_logged", JSON.stringify(response.data));
        navigate("/home", {
          state: {
            logged: true,
            id: userId,
          },
        });
      })
      .catch((error) => {
        setMessageError(error.response.data);
      });
  };

  const handleClickRegister = () => {
    navigate("/cadastrar");
  };

  return (
    <Container>
      <Card title="Login">
        <div className="row">
          <span>{messageError}</span>
        </div>
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

        <Button
          title="Entrar"
          typeButton="success"
          onClick={handleClickEntry}
        />
        <Button
          title="Cadastrar"
          typeButton="danger"
          onClick={handleClickRegister}
        />
      </Card>
    </Container>
  );
};
