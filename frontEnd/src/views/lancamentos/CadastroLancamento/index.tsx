import React, { useEffect, useState } from "react";
import { AxiosError } from "axios";
import { months } from "../../../_utils/months";
import { Card } from "../../../components/Card";
import { status } from "../../../_utils/status";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { Button } from "../../../components/Button";
import * as message from "../../../components/Toastr";
import { useNavigate, useParams } from "react-router-dom";
import { releaseTypes } from "../../../_utils/typesRelease";
import { FieldRegister } from "../../../components/FieldRegister";
import { ContainerRegister } from "../../../components/ConatinerRegister";
import { LancamentoService } from "../../../_app/service/lancamentoService";
import { LocalStorageService } from "../../../_app/service/localStorageService";

export interface FormValuesParams {
  id?: null;
  ano: string;
  mes: string;
  tipo: string;
  valor: string;
  status?: string;
  usuario?: string;
  descricao: string;
}

export const CadastroDeLancamento: React.FC = () => {
  const releaseService = new LancamentoService();

  const { id } = useParams();
  const navigate = useNavigate();

  const [formValues, setFormValues] = useState<FormValuesParams>({
    usuario: "",
    ano: "",
    mes: "",
    valor: "",
    descricao: "",
    tipo: "",
    status: "",
  });

  const handleChange = (value: string, name: string) => {
    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubmit = () => {
    const { descricao, mes, valor, tipo, ano } = formValues;
    const userLogged = LocalStorageService.getItemLocalStorage("user_logged");

    const releases: FormValuesParams = {
      ano: ano,
      mes: mes,
      tipo: tipo,
      valor: valor,
      usuario: userLogged.id,
      descricao: descricao,
    };

    releaseService
      .salvarLancamento(releases)
      .then(() => {
        message.showMessageSuccess("Lançamento cadastrado com sucesso!");
        setFormValues({
          usuario: "",
          ano: "",
          mes: "",
          valor: "",
          descricao: "",
          tipo: "",
          status: "",
        });
        navigate("/consulta-lancamento");
      })
      .catch((error: any) => {
        message.showMessageError(error.response.data);
      });
  };

  // const handleUpdate = () => {
  //   const { descricao, mes, valor, tipo, ano, id, status, usuario } =
  //     formValues;
  //   const userLogged = LocalStorageService.getItemLocalStorage("user_logged");
  //   const releases: FormValuesParams = {
  //     id: id,
  //     mes: mes,
  //     ano: ano,
  //     tipo: tipo,
  //     valor: valor,
  //     status: status,
  //     usuario: userLogged,
  //     descricao: descricao,
  //   };

  //   releaseService
  //     .atualizaLancamento(releases)
  //     .then(() => {
  //       message.showMessageSuccess("Lançamento Atualizado com sucesso!");
  //       navigate("/consulta-lancamento");
  //     })
  //     .catch((error: any) => {
  //       message.showMessageError(error.response.data);
  //     });
  // };

  useEffect(() => {
    if (id) {
      releaseService
        .obterLancamentoPorId(id)
        .then((response) => {
          setFormValues({ ...response.data });
        })
        .catch((error: AxiosError) => {
          message.showMessageError(String(error.response?.data));
        });
    }
  }, []);

  return (
    <ContainerRegister>
      <Card title="Cadastro de Lançamento">
        <FieldRegister widthField={6}>
          <Input
            value={formValues.descricao!}
            onChangeValue={(valueInput, nameInput) =>
              handleChange(valueInput, nameInput)
            }
            type="text"
            label="Descrição"
            id="inputDescriptionRegister"
            ariaDescribedby="name"
            placeholder="Ex: Fatura do Cartão"
            name="descricao"
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Input
            value={formValues.ano!}
            onChangeValue={(valueInput, nameInput) =>
              handleChange(valueInput, nameInput)
            }
            type="text"
            label="Ano"
            id="inputDescriptionRegister"
            ariaDescribedby="name"
            placeholder="Ex: 2023"
            name="ano"
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Select
            value={formValues.mes!}
            onChangeSelected={(valueInput, nameInput) =>
              handleChange(valueInput, nameInput)
            }
            className="form-control"
            label="Mês"
            id="inputMes"
            options={months}
            name="mes"
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Select
            value={formValues.tipo!}
            onChangeSelected={(valueInput, nameInput) =>
              handleChange(valueInput, nameInput)
            }
            className="form-control"
            label="Tipo"
            id="inputTipo"
            options={releaseTypes}
            name="tipo"
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Input
            value={formValues.valor!}
            onChangeValue={(valueInput, nameInput) =>
              handleChange(valueInput, nameInput)
            }
            type="text"
            label="Valor"
            id="inputValorRegister"
            ariaDescribedby="name"
            placeholder="R$: 5,00"
            name="valor"
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Select
            value={formValues.status!}
            onChangeSelected={(valueInput, nameInput) =>
              handleChange(valueInput, nameInput)
            }
            className="form-control"
            label="Status"
            id="inputTipo"
            options={status}
            name="status"
          />
        </FieldRegister>
        <br />
        {id ? (
          <Button title="Atualizar" typeButton="success" onClick={() => {}} />
        ) : (
          <Button
            title="Salvar"
            typeButton="success"
            onClick={() => handleSubmit()}
          />
        )}

        <Button
          title="Cancelar"
          typeButton="danger"
          onClick={() => navigate("/consulta-lancamento")}
        />
      </Card>
    </ContainerRegister>
  );
};
