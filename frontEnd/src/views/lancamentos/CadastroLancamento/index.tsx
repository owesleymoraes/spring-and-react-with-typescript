import React, { useState } from "react";
import { months } from "../../../_utils/months";
import { Card } from "../../../components/Card";
import { status } from "../../../_utils/status";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { Button } from "../../../components/Button";
import * as message from "../../../components/Toastr";
import { releaseTypes } from "../../../_utils/typesRelease";
import { FieldRegister } from "../../../components/FieldRegister";
import { ContainerRegister } from "../../../components/ConatinerRegister";
import { LancamentoService } from "../../../_app/service/lancamentoService";
import { LocalStorageService } from "../../../_app/service/localStorageService";

export interface FormValuesParams {
  id?: number;
  tipo: string;
  status?: string;
  descricao: string;
  ano: number | null;
  mes: number | null;
  valor: number | null;
  usuario?: number | null;
}

export const CadastroDeLancamento: React.FC = () => {
  const releaseService = new LancamentoService();

  const [formValues, setFormValues] = useState<FormValuesParams>({
    usuario: null,
    ano: null,
    mes: null,
    valor: null,
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
    const { descricao, mes, valor, tipo, ano, usuario } = formValues;
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
      })
      .catch((error: any) => {
        message.showMessageError(error.response.data);
      });
  };

  return (
    <ContainerRegister>
      <Card title="Cadastro de Lançamento">
        <FieldRegister widthField={6}>
          <Input
            value={formValues.descricao}
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
            value={formValues.tipo}
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
            placeholder="5,00"
            name="valor"
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Select
            value={formValues.status}
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

        <Button
          title="Salvar"
          typeButton="success"
          onClick={() => handleSubmit()}
        />
        <Button title="Cancelar" typeButton="danger" onClick={() => {}} />
      </Card>
    </ContainerRegister>
  );
};
