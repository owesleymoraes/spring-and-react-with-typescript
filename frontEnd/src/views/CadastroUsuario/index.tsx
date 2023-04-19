import React, { useState } from "react";
import { Card } from "../../components/Card";
import { Input } from "../../components/Input";
import { useNavigate } from "react-router-dom";
import { Button } from "../../components/Button";
import { FieldRegister } from "../../components/FieldRegister";
import { UsuarioService } from "../../_app/service/userService";
import { MessageValidated } from "../../components/MessageValidated";
import { ContainerRegister } from "../../components/ConatinerRegister";
import { showMessageError, showMessageSuccess } from "../../components/Toastr";

export const CadastroUsuario: React.FC = () => {
  const navigate = useNavigate();

  const service = new UsuarioService();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [hasLetter, setLetter] = useState(false);
  const [hasNumber, setHasNumber] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState("");
  const [specialCharacter, setSpecialCharacter] = useState(false);

  const validatedPassword = (password: string) => {
    if (!password.match(/[A-Z]/)) {
      setLetter(false);
    }

    if (password.match(/[A-Z]/)) {
      setLetter(true);
    }

    if (!password.match(/[0-9]/)) {
      setHasNumber(false);
    }

    if (password.match(/[0-9]/)) {
      setHasNumber(true);
    }

    if (!password.match(/[@]|[*]|[$]|[&]|[_]|[!]|[%]/)) {
      setSpecialCharacter(false);
    }

    if (password.match(/[@]|[*]|[$]|[&]|[_]|[!]|[%]/)) {
      setSpecialCharacter(true);
    }
  };

  const validatedField = () => {
    let messageFieldValidated = [];

    if (!name) {
      messageFieldValidated.push("O Campo nome é obrigatório");
    }

    if (!email.match(/^[a-z0-9.]+@[a-z0-9]+\.[a-z]/)) {
      messageFieldValidated.push("Digite um email válido.");
    }

    if (!password) {
      messageFieldValidated.push("Digite no campo senha.");
    }

    if (!confirmPassword) {
      messageFieldValidated.push("Digite no campo repetir senha.");
    }

    if (password !== confirmPassword) {
      messageFieldValidated.push(
        "Senha não corresponde com o valor do repetir senha."
      );
    }

    return messageFieldValidated;
  };

  const handleChangePassword = (password: string) => {
    setPassword(password);
    validatedPassword(password);
  };

  const handleClickRegister = () => {
    const messageError = validatedField();

    if (messageError && messageError.length > 0) {
      messageError.forEach((item) => {
        showMessageError(item);
      });
      return false;
    }

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
    <ContainerRegister>
      <Card title="Cadastro de Usuário">
        <FieldRegister widthField={12}>
          <Input
            value={name}
            onChangeValue={(e) => setName(e)}
            type="text"
            label="Nome"
            id="inputNameRegister"
            ariaDescribedby="name"
            placeholder="Ex: José Pereira"
            name="nome"
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
          />

          <Input
            value={password}
            onChangeValue={(e) => handleChangePassword(e)}
            type="password"
            label="Senha "
            id="inputPasswordRegister"
            ariaDescribedby="passwordRegister"
            placeholder="**********"
            name="senha"
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
      {password && (
        <>
          <MessageValidated isValidated={hasLetter}>
            Pelo menos uma letra maiúscula
          </MessageValidated>
          <MessageValidated isValidated={hasNumber}>
            Pelo menos um número
          </MessageValidated>
          <MessageValidated isValidated={specialCharacter}>
            Um caracter especial: @ ! _ * & % $
          </MessageValidated>
        </>
      )}
    </ContainerRegister>
  );
};
