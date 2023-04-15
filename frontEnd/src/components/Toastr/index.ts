import toastr from "toastr";

Command: toastr["success"]("Inconceivable!");

toastr.options = {
  closeButton: true,
  debug: false,
  newestOnTop: false,
  progressBar: true,
  positionClass: "toast-top-right",
  preventDuplicates: false,
  showDuration: 300,
  hideDuration: 1000,
  timeOut: 1500,
  extendedTimeOut: 1000,
  showEasing: "swing",
  hideEasing: "linear",
  showMethod: "fadeIn",
  hideMethod: "fadeOut",
};

export const showMessageSuccess = (message: string) => {
  toastr["success"](message);
};

export const showMessageError = (message: string) => {
  toastr["error"](message);
};

export const showMessageWarning = (message: string) => {
  toastr["warning"](message);
};
