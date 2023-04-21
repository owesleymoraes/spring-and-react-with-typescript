import React from "react";
import { Card } from "../../../components/Card";
import { Input } from "../../../components/Input";
import { FieldRegister } from "../../../components/FieldRegister";
import { OptionsSelect, Select } from "../../../components/Select";
import { ContainerRegister } from "../../../components/ConatinerRegister";
import { Button } from "../../../components/Button";
import { LancamentoTable } from "./LancamentoTable";

export const ConsultaLancamento: React.FC = () => {
  const months: OptionsSelect[] = [
    { value: "", label: "Selecione..." },
    { value: "1", label: "Janeiro" },
    { value: "2", label: "Fevereiro" },
    { value: "3", label: "Março" },
    { value: "4", label: "Abril" },
    { value: "5", label: "Maio" },
    { value: "6", label: "Junho" },
    { value: "7", label: "Julho" },
    { value: "8", label: "Agosto" },
    { value: "9", label: "Setembro" },
    { value: "10", label: "Outubro" },
    { value: "11", label: "Novembro" },
    { value: "12", label: "Desembro" },
  ];

  const releaseTypes: OptionsSelect[] = [
    { value: "", label: "Selecione..." },
    { value: "DESPESA", label: "Despesa" },
    { value: "RECEITA", label: "Receita" },
  ];

  const lancamnetosMocked = [
    {
      descricao: "salario",
      valor: 5000,
      tipo: "Receita",
      mes: 1,
      status: "Efetivado",
    },
    {
      descricao: "salario",
      valor: 5000,
      tipo: "Receita",
      mes: 1,
      status: "Efetivado",
    },

    {
      descricao: "salario",
      valor: 5000,
      tipo: "Receita",
      mes: 1,
      status: "Efetivado",
    },
  ];

  return (
    <ContainerRegister>
      <Card title="Consulta Lançamentos">
        <FieldRegister widthField={6}>
          <Input
            label="Ano"
            placeholder="Ex: 2023"
            onChangeValue={() => {}}
            id="inputNameRegister"
            ariaDescribedby="name"
            name="nome"
          />
          <Select
            className="form-control"
            label="Mês"
            id="inputMes"
            options={months}
          />
          <Select
            className="form-control"
            label="Tipo"
            id="inputTipo"
            options={releaseTypes}
          />

          <br />
          <Button title="Salvar" typeButton="success" onClick={() => {}} />
          <Button title="Voltar" typeButton="danger" onClick={() => {}} />
        </FieldRegister>
        <br />
        <LancamentoTable lancamentos={lancamnetosMocked} />
      </Card>
    </ContainerRegister>
  );
};
