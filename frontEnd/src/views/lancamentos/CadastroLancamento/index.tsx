import React from "react";
import { months } from "../../../_utils/months";
import { Card } from "../../../components/Card";
import { status } from "../../../_utils/status";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { releaseTypes } from "../../../_utils/typesRelease";
import { FieldRegister } from "../../../components/FieldRegister";
import { ContainerRegister } from "../../../components/ConatinerRegister";
import { LancamentoService } from "../../../_app/service/lancamentoService";
import { Button } from "../../../components/Button";

export const CadastroDeLancamento: React.FC = () => {
  const releaseService = new LancamentoService();

  return (
    <ContainerRegister>
      <Card title="Cadastro de Lançamento">
        <FieldRegister widthField={6}>
          <Input
            value={""}
            onChangeValue={() => {}}
            type="text"
            label="Descrição"
            id="inputDescriptionRegister"
            ariaDescribedby="name"
            placeholder="Ex: Fatura do Cartão"
            name="nome"
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Input
            value={""}
            onChangeValue={() => {}}
            type="text"
            label="Ano"
            id="inputDescriptionRegister"
            ariaDescribedby="name"
            placeholder="Ex: 2023"
            name="nome"
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Select
            value={""}
            onChange={() => {}}
            className="form-control"
            label="Mês"
            id="inputMes"
            options={months}
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Select
            value={""}
            onChange={() => {}}
            className="form-control"
            label="Tipo"
            id="inputTipo"
            options={releaseTypes}
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Input
            value={""}
            onChangeValue={() => {}}
            type="text"
            label="Valor"
            id="inputValorRegister"
            ariaDescribedby="name"
            placeholder="5,00"
            name="nome"
          />
        </FieldRegister>
        <br />
        <FieldRegister widthField={3}>
          <Select
            value={""}
            onChange={() => {}}
            className="form-control"
            label="Status"
            id="inputTipo"
            options={status}
          />
        </FieldRegister>
        <br />

        <Button title="Salvar" typeButton="success" onClick={() => {}} />
        <Button title="Cancelar" typeButton="danger" onClick={() => {}} />
      </Card>
    </ContainerRegister>
  );
};
