import React, { useEffect, useState } from "react";
import {
  showMessageError,
  showMessageSuccess,
} from "../../../components/Toastr";
import { Card } from "../../../components/Card";
import {
  LancamentoService,
  lancamentos,
} from "../../../_app/service/lancamentoService";
import { Input } from "../../../components/Input";
import { ModalConfirm } from "../components/Modal";
import { Button } from "../../../components/Button";
import { FieldRegister } from "../../../components/FieldRegister";
import { OptionsSelect, Select } from "../../../components/Select";
import { LancamentoTable, lancamentosResponse } from "./LancamentoTable";
import { ContainerRegister } from "../../../components/ConatinerRegister";
import { LocalStorageService } from "../../../_app/service/localStorageService";

export const ConsultaLancamento: React.FC = () => {
  const lancamentosService = new LancamentoService();

  const userLogger = LocalStorageService.getItemLocalStorage("user_logged");

  const [ano, setAno] = useState<string>("");
  const [mes, setMes] = useState<string>();
  const [tipo, setTipo] = useState<string>();
  const [descricao, setDescricao] = useState<string>("");
  const [lancamento, setLancamento] = useState<lancamentosResponse[]>([]);
  const [listLancamento, setListLancamento] = useState<lancamentosResponse>();
  const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false);
  const [confirmDeleteRelease, setConfirmDeleteRelease] =
    useState<boolean>(false);

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

  // useEffect(() => {
  //   if (lancamento?.id) {
  //     setShowConfirmDialog(true);
  //   }

  //   if (confirmDeleteRelease) {
  //     lancamentosService
  //       .deletaLancamento(lancamento?.id!)
  //       .then(() => {
  //         const indexReleaseDeleted =
  //         });

  //         setLancamento((prevState) => {
  //           const newArray = [...prevState];

  //           if (indexReleaseDeleted !== -1) {
  //             newArray.splice(indexReleaseDeleted, 1);
  //           }
  //           return newArray;
  //         });

  //         showMessageSuccess("Lançamento deletado com sucesso!");
  //       })
  //       .catch(() => {
  //         showMessageError("Ocorreu um erro ao tentar deletar o lançamento");
  //       });

  //     setStoredId(undefined);
  //     setShowConfirmDialog(false);
  //     setConfirmDeleteRelease(false);
  //   }
  // }, [storedId, confirmDeleteRelease]);

  const handleClickEditRelease = (id: number) => {};

  const handleClickDeleteRelease = (release: lancamentosResponse ) => {

  }

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

        <LancamentoTable
          lancamentos={lancamento}
          onDeleteRelease={handleClickDeleteRelease}
          onEditRelease={handleClickEditRelease}
        />

        <ModalConfirm
          showModal={showConfirmDialog}
          header="Deletar Lançamento"
          labelButtonCancel="Cancela"
          labelButtonConfirm="Confirma"
          onClickCancel={setShowConfirmDialog}
          onClickConfirm={setConfirmDeleteRelease}
        >
          Confirma a exclusão desse lançamento ?
        </ModalConfirm>
      </Card>
    </ContainerRegister>
  );
};
