import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface ModalConfirmProps {
  header: string;
  showModal: boolean;
  children: React.ReactNode;
  labelButtonCancel: string;
  labelButtonConfirm: string;
  onClickConfirm: (confirm: boolean) => void;
  onClickCancel: (cancel: boolean) => void;
}

export const ModalConfirm: React.FC<ModalConfirmProps> = ({
  header,
  children,
  showModal,
  labelButtonCancel,
  labelButtonConfirm,
  onClickCancel,
  onClickConfirm,
}) => {
  const [visible, setVisible] = useState<boolean>(false);

  const handleClickConfirm = (confirm: boolean) => {
    onClickConfirm(confirm);
  };

  useEffect(() => {
    setVisible(showModal);
  }, [showModal]);

  const footerContent = (
    <div>
      <Button
        label={labelButtonCancel}
        icon="pi pi-times"
        onClick={() => onClickCancel(false)}
        className="p-button-text"
      />
      <Button
        label={labelButtonConfirm}
        icon="pi pi-check"
        onClick={() => handleClickConfirm(true)}
        autoFocus
      />
    </div>
  );

  return (
    <div className="card flex justify-content-center">
      <Dialog
        header={header}
        visible={visible}
        style={{ width: "50vw" }}
        onHide={() => setVisible(false)}
        footer={footerContent}
      >
        <p className="m-0">{children}</p>
      </Dialog>
    </div>
  );
};
