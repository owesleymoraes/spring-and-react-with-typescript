import React, { useState } from "react";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { Button } from "../../components/Button";
import { FieldRegister } from "../../components/FieldRegister";

export const CadastroUsuario: React.FC = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClickRegister = () => {};

  const handleClickGoBack = () => {};

  return (
    <div className="container">
      <Card title="Cadastro de Usuário">
        <FieldRegister>
          <Input
            value={name}
            onChange={(e) => setName(e)}
            type="text"
            label="Nome"
            id="inputNameRegister"
            ariaDescribedby="name"
            placeholder="Ex: José Pereira"
            name="nome"
          />

          <Input
            value={email}
            onChange={(e) => setEmail(e)}
            type="email"
            label="Email "
            id="inputEmailRegister"
            ariaDescribedby="emailRegister"
            placeholder="meuemail@email.com"
            name="email"
          />

          <Input
            value={password}
            onChange={(e) => setPassword(e)}
            type="password"
            label="Senha "
            id="inputPasswordRegister"
            ariaDescribedby="passwordRegister"
            placeholder="**********"
            name="senha"
          />

          <Input
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e)}
            type="password"
            label="Repita a Senha "
            id="inputValidatedPasswordRegister"
            ariaDescribedby="validatedPasswordRegister"
            placeholder="**********"
            name="confirmaSenha"
          />

          <Button
            title="Salvar"
            typeButton="success"
            onClick={handleClickRegister}
          />
          <Button
            title="Voltar"
            typeButton="danger"
            onClick={handleClickGoBack}
          />
        </FieldRegister>
      </Card>
    </div>
  );
};
