import React, { useState } from "react";
import {
  showMessageError,
  showMessageSuccess,
} from "../../../components/Toastr";
import { Card } from "../../../components/Card";
import {
  LancamentoService,
  lancamentos,
} from "../../../_app/service/lancamentoService";
import { months } from "../../../_utils/months";
import { Input } from "../../../components/Input";
import { ModalConfirm } from "../components/Modal";
import { Button } from "../../../components/Button";
import { releaseTypes } from "../../../_utils/typesRelease";
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
  const [lancamentoResponseApi, setLancamentoResponseApi] = useState<
    lancamentosResponse[]
  >([]);
  const [listaDeLancamentoClicado, setListaDeLancamentoClicado] =
    useState<lancamentosResponse>({
      id: 0,
      mes: 0,
      tipo: "",
      valor: 0,
      status: "",
      descricao: "",
    });
  const [showConfirmDialog, setShowConfirmDialog] = useState<boolean>(false);

  let enableButton = ano ? false : true;

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
        setLancamentoResponseApi(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleClickEditRelease = (id: number) => {};

  const handleOpenConfirmDeleteRelease = (release: lancamentosResponse) => {
    setShowConfirmDialog(true);
    setListaDeLancamentoClicado(release);
  };

  const handleClickCalcelDeleteRelease = () => {
    console.log("Clicou em cancelar deletar lançamento ");

    setShowConfirmDialog(false);
    setListaDeLancamentoClicado({
      id: 0,
      mes: 0,
      tipo: "",
      valor: 0,
      status: "",
      descricao: "",
    });
  };

  const handleClickDeleteRelease = () => {
    console.log("Clicou em deletar lançamento ");
    lancamentosService
      .deletaLancamento(listaDeLancamentoClicado?.id!)
      .then(() => {
        const index = lancamentoResponseApi.indexOf(listaDeLancamentoClicado!);

        setLancamentoResponseApi((prevState) => {
          const newListaDeLancamento = [...prevState];

          if (index !== -1) {
            newListaDeLancamento.splice(index, 1);
          }
          return newListaDeLancamento;
        });

        setShowConfirmDialog(false);

        showMessageSuccess("Lançamento deletado com sucesso!");
      })
      .catch(() => {
        showMessageError("Ocorreu um erro ao tentar deletar o lançamento");
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
            onChangeSelected={(e) => setMes(e)}
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
            onChangeSelected={(e) => setTipo(e)}
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
          releases={lancamentoResponseApi}
          onEditRelease={handleClickEditRelease}
          onDeleteRelease={handleOpenConfirmDeleteRelease}
        />

        <ModalConfirm
          showModal={showConfirmDialog}
          header="Deletar Lançamento"
          labelButtonCancel="Cancela"
          labelButtonConfirm="Confirma"
          onClickCancel={handleClickCalcelDeleteRelease}
          onClickConfirm={handleClickDeleteRelease}
        >
          Confirma a exclusão desse lançamento ?
        </ModalConfirm>
      </Card>
    </ContainerRegister>
  );
};
