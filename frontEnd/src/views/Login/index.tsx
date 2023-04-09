import React, { useState } from "react";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";
import { useNavigate } from "react-router-dom";

export const Login: React.FC = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickEntry = () => {};

  const handleClickRegister = () => {
    navigate("/cadastrar")
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
