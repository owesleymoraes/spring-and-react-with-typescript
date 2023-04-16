import React, { useState } from "react";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { FieldRegister } from "../../components/FieldRegister";
import { UsuarioService } from "../../_app/service/userService";
import { showMessageError, showMessageSuccess } from "../../components/Toastr";

export const CadastroUsuario: React.FC = () => {
  const navigate = useNavigate();

  const service = new UsuarioService();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleClickRegister = () => {
    const user = {
      nome: name,
      email: email,
      senha: password,
    };

    service
      .salvar(user)
      .then((response) => {
        showMessageSuccess("Usuário cadastrado com sucesso. Faça o login.");
        setTimeout(() => {
          navigate("/login");
        }, 2000);
      })
      .catch((error) => {
        showMessageError(error.response?.data);
      });
  };

  const handleClickGoBack = () => {
    navigate("/login");
  };

  return (
    <div className="container">
      <Card title="Cadastro de Usuário">
        <FieldRegister>
          <Input
            value={name}
            onChangeValue={(e) => setName(e)}
            type="text"
            label="Nome"
            id="inputNameRegister"
            ariaDescribedby="name"
            placeholder="Ex: José Pereira"
            name="nome"
            required = {true}
          />

          <Input
            value={email}
            onChangeValue={(e) => setEmail(e)}
            type="email"
            label="Email "
            id="inputEmailRegister"
            ariaDescribedby="emailRegister"
            placeholder="meuemail@email.com"
            name="email"
            required
          />

          <Input
            value={password}
            onChangeValue={(e) => setPassword(e)}
            type="password"
            label="Senha "
            id="inputPasswordRegister"
            ariaDescribedby="passwordRegister"
            placeholder="**********"
            name="senha"
            required
          />

          <Input
            value={confirmPassword}
            onChangeValue={(e) => setConfirmPassword(e)}
            type="password"
            label="Repita a Senha "
            id="inputValidatedPasswordRegister"
            ariaDescribedby="validatedPasswordRegister"
            placeholder="**********"
            name="confirmaSenha"
            required
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
