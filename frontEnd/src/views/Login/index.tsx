import React, { useState } from "react";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { Container } from "../../components/Container";

export const Login: React.FC = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleClickEntry = () => {};

  const handleClickRegister = () => {};

  return (
    <Container>
      <Card title="Login">
        <Input
          value={email}
          onChange={(e) => setEmail(e)}
          type="email"
          label="Email"
          id="inputEmailFirst"
          ariaDescribedby="emailHelp"
          placeholder="nome@email.com"
        />

        <Input
          value={password}
          onChange={(e) => setPassword(e)}
          label="Senha"
          type="password"
          placeholder="**********"
          id="inputPasswordFirst"
          ariaDescribedby="password"
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
