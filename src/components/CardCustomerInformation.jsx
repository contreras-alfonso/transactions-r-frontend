import React from "react";

export const CardCustomerInformation = ({dataCustomer}) => {
  return (
    <div className="w-full shadow py-10 px-10 rounded-lg bg-white flex flex-col gap-3">
      <h2 className="font-bold text-center">Customer Information</h2>
      <div className="space-y-1">
        <p className="font-semibold text-sm">
          DNI: <span className="font-normal">{dataCustomer.dni}</span>
        </p>
        <p className="font-semibold text-sm">
          Names: <span className="font-normal">{dataCustomer.names}</span>
        </p>
        <p className="font-semibold text-sm">
          Last names:{" "}
          <span className="font-normal">{dataCustomer.last_names}</span>
        </p>
        <p className="font-semibold text-sm">
          Birthdate:{" "}
          <span className="font-normal">{dataCustomer.birthdate}</span>
        </p>
        <p className="font-semibold text-sm">
          Phone Number:{" "}
          <span className="font-normal">{dataCustomer.phone}</span>
        </p>
        <p className="font-semibold text-sm">
          Email: <span className="font-normal">{dataCustomer.email}</span>
        </p>
        <p className="font-semibold text-sm">
          Bank: <span className="font-normal">{dataCustomer.bank}</span>
        </p>
        <p className="font-semibold text-sm">
          Account Number or CCI number:{" "}
          <span className="font-normal">{dataCustomer.cci_number}</span>
        </p>
      </div>
    </div>
  );
};
