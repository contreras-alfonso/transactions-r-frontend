import React from "react";

export const CardTotalTransactions = ({totalTransactions}) => {
  return (
    <div className="bg-white p-10 rounded-lg flex flex-col gap-5 shadow mt-5">
      <div className="flex justify-between items-center gap-5">
        <div className="flex flex-col gap-2">
          <span className="text-3xl font-bold">
            <span>{totalTransactions}</span>
          </span>
          <p className="text-sm">Total transactions</p>
        </div>
        <span
          className={`w-1 h-1 px-7 py-6 rounded-2xl text-2xl flex items-center justify-center  ${
            totalTransactions === 0
              ? "bg-red-100"
              : "bg-emerald-100"
          }`}
        >
          <i
            className={`fa-solid fa-money-bill-1-wave  ${
              totalTransactions === 0
                ? "text-red-500"
                : "text-emerald-500"
            }`}
          ></i>
        </span>
      </div>
      <p className="text-emerald-500 font-bold text-sm">
        <i
          className={`fa-solid fa-arrow-up ${
            totalTransactions === 0
              ? "text-red-500"
              : "text-emerald-500"
          }`}
        ></i>
        <span className="text-gray-600 font-normal text-xs">
          {" "}
          Summary of client transactions
        </span>
      </p>
    </div>
  );
};
