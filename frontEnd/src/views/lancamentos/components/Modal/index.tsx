import React, { useEffect, useState } from "react";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";

interface ModalConfirmProps {
  header: string;
  showModal: boolean;
  children: React.ReactNode;
  labelButtonCancel: string;
  labelButtonConfirm: string;

  onClickConfirm: () => void;
  onClickCancel: () => void;
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

  useEffect(() => {
    setVisible(showModal);
  }, [showModal]);

  const footerContent = (
    <div>
      <Button
        label={labelButtonCancel}
        icon="pi pi-times"
        onClick={() => onClickCancel()}
        className="p-button-text"
      />
      <Button
        label={labelButtonConfirm}
        icon="pi pi-check"
        onClick={() => onClickConfirm()}
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
        modal={true}
        closable={visible}
      >
        <p className="m-0">{children}</p>
      </Dialog>
    </div>
  );
};
