import React from "react";
import { months } from "../../../_utils/months";
import { Card } from "../../../components/Card";
import { Input } from "../../../components/Input";
import { Select } from "../../../components/Select";
import { FieldRegister } from "../../../components/FieldRegister";
import { ContainerRegister } from "../../../components/ConatinerRegister";

export const CadastroDeLancamento: React.FC = () => {
  return (
    <ContainerRegister>
      <Card title="Cadastro de Lançamento">
        <div className="row">
          <FieldRegister widthField={12}>
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
        </div>
        <br />
        <div className="row">
          <FieldRegister widthField={6}>
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
          <FieldRegister widthField={6}>
            <Select
              value={""}
              onChange={() => {}}
              className="form-control"
              label="Mês"
              id="inputMes"
              options={months}
            />
          </FieldRegister>
        </div>
      </Card>
    </ContainerRegister>
  );
};
