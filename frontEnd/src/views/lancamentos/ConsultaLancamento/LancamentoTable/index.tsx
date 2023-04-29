import React from "react";
import { Button } from "../../../../components/Button";
import { FieldRegister } from "../../../../components/FieldRegister";

interface LancamentoTableProps {
  lancamentos: lancamentosResponse[];
  onEditRelease: (id: number) => void;
  onDeleteRelease: (release: lancamentosResponse) => void;
}

export interface lancamentosResponse {
  id: number;
  mes: number;
  tipo: string;
  valor: number;
  status: string;
  descricao: string;
}

export const LancamentoTable: React.FC<LancamentoTableProps> = ({
  lancamentos,
  onEditRelease,
  onDeleteRelease,
}) => {
  const formatterMoney = new Intl.NumberFormat("pt-BR", {
    style: "currency",
    currency: "BRL",
  });

  return (
    <FieldRegister widthField={12} typeColumn="md">
      <table className="table table-hover">
        <thead>
          <tr>
            <th scope="col">Descrição</th>
            <th scope="col">Valor</th>
            <th scope="col">Tipo</th>
            <th scope="col">Mês</th>
            <th scope="col">Situação</th>
            <th scope="col">Ações</th>
          </tr>
        </thead>
        <tbody>
          {lancamentos.map((item, index) => {
            return (
              <tr key={index}>
                <th scope="row">{item.descricao}</th>
                <td>{formatterMoney.format(item.valor)}</td>
                <td>{item.tipo}</td>
                <td>{item.mes}</td>
                <td>{item.status}</td>
                <td>
                  <Button
                    title="Editar"
                    typeButton="primary"
                    onClick={() => {
                      onEditRelease(item.id!);
                    }}
                  />
                  <Button
                    title="Deletar"
                    typeButton="danger"
                    onClick={() => {
                      onDeleteRelease(item);
                    }}
                  />
                </td>
              </tr>
            );
          })}
        </tbody>
      </table>
    </FieldRegister>
  );
};
