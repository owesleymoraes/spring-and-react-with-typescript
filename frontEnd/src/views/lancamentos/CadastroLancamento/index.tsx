import React, { ChangeEvent, useState } from "react";
import { months } from "../../../_utils/months";
import { Card } from "../../../components/Card";
import { status } from "../../../_utils/status";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { Button } from "../../../components/Button";
import { releaseTypes } from "../../../_utils/typesRelease";
import { FieldRegister } from "../../../components/FieldRegister";
import { ContainerRegister } from "../../../components/ConatinerRegister";
import { LancamentoService } from "../../../_app/service/lancamentoService";

interface FormValues {
  id: number | null;
  value: string;
  year: string;
  month: string;
  typeRelease: string;
  description: string;
  statusRelease: string;
}

export const CadastroDeLancamento: React.FC = () => {
  const releaseService = new LancamentoService();

  const [formValues, setFormValues] = useState<FormValues>({
    id: null,
    year: "",
    month: "",
    value: "",
    description: "",
    typeRelease: "",
    statusRelease: "",
  });

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const { value, name } = event.target;
    

    setFormValues((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  const handleSubit = () => {
    console.log(formValues);
  };

  return (
    <ContainerRegister>
      <Card title="Cadastro de Lançamento">
        <FieldRegister widthField={6}>
          <Input
            value={formValues.description}
            onChangeValue={() => handleChange}
            type="text"
            label="Descrição"
            id="inputDescriptionRegister"
            ariaDescribedby="name"
            placeholder="Ex: Fatura do Cartão"
            name="description"
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Input
            value={formValues.year}
            onChangeValue={() => handleChange}
            type="text"
            label="Ano"
            id="inputDescriptionRegister"
            ariaDescribedby="name"
            placeholder="Ex: 2023"
            name="year"
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Select
            value={formValues.month}
            onChange={() => handleChange}
            className="form-control"
            label="Mês"
            id="inputMes"
            options={months}
            name="month"
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Select
            value={formValues.typeRelease}
            onChange={() => handleChange}
            className="form-control"
            label="Tipo"
            id="inputTipo"
            options={releaseTypes}
            name="typeRelease"
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Input
            value={formValues.value}
            onChangeValue={() => handleChange}
            type="text"
            label="Valor"
            id="inputValorRegister"
            ariaDescribedby="name"
            placeholder="5,00"
            name="value"
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Select
            value={formValues.statusRelease}
            onChange={() => handleChange}
            className="form-control"
            label="Status"
            id="inputTipo"
            options={status}
            name="statusRelease"
          />
        </FieldRegister>
        <br />

        <Button
          title="Salvar"
          typeButton="success"
          onClick={() => handleSubit}
        />
        <Button title="Cancelar" typeButton="danger" onClick={() => {}} />
      </Card>
    </ContainerRegister>
  );
};
