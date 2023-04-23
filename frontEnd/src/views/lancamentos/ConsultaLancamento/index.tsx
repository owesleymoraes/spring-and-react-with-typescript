import React, { useState } from "react";
import { Card } from "../../../components/Card";
import { Input } from "../../../components/Input";
import { LancamentoTable } from "./LancamentoTable";
import { Button } from "../../../components/Button";
import { FieldRegister } from "../../../components/FieldRegister";
import { OptionsSelect, Select } from "../../../components/Select";
import { ContainerRegister } from "../../../components/ConatinerRegister";
import {
  LancamentoService,
  lancamentos,
} from "../../../_app/service/lancamentoService";
import { LocalStorageService } from "../../../_app/service/localStorageService";

export const ConsultaLancamento: React.FC = () => {
  const lancamentosService = new LancamentoService();

  const userLogger = LocalStorageService.getItemLocalStorage("user_logged");

  const [ano, setAno] = useState<string>();
  const [mes, setMes] = useState<string>();
  const [tipo, setTipo] = useState<string>();
  const [lancamento, setLancamento] = useState([]);
  const [descricao, setDescricao] = useState<string>();

  let enableButton = ano ? false : true;

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

  const lancamentosMocked = [
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

  const handleClickConsult = () => {
    const lancamentoFiltro: lancamentos = {
      ano: Number(ano),
      mes: Number(mes),
      tipo: tipo!,
      descricao: descricao,
      usuarioId: userLogger?.id,
    };

    lancamentosService
      .consultaLancamento(lancamentoFiltro)
      .then((response) => {
        setLancamento(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <ContainerRegister>
      <Card title="Consulta Lançamentos">
        <FieldRegister widthField={6}>
          <Input
            label="Ano"
            value={ano}
            placeholder="Ex: 2023"
            onChangeValue={(e) => setAno(e)}
            id="inputNameRegister"
            ariaDescribedby="name"
            name="nome"
          />

          <Select
            value={mes}
            onChange={(e) => setMes(e.target.value)}
            className="form-control"
            label="Mês"
            id="inputMes"
            options={months}
          />

          <Input
            label="Descrição"
            value={descricao}
            placeholder="Ex: Fatura do Cartão"
            onChangeValue={(e) => setDescricao(e)}
            id="inputDescricaoRegister"
            ariaDescribedby="name"
            name="nome"
          />
          <Select
            value={tipo}
            onChange={(e) => setTipo(e.target.value)}
            className="form-control"
            label="Tipo"
            id="inputTipo"
            options={releaseTypes}
          />
          <br />
          <Button
            enabledButton={enableButton}
            title="Buscar"
            typeButton="success"
            onClick={handleClickConsult}
          />
          <Button title="Voltar" typeButton="danger" onClick={() => {}} />
        </FieldRegister>
        <br />
        <LancamentoTable lancamentos={lancamento} />
      </Card>
    </ContainerRegister>
  );
};
