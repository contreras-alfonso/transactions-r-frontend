import React from "react";
import { ContainerTableTransactionCustomer } from "../components/ContainerTableTransactionCustomer";
import { Link } from "react-router-dom";

export const TransactionCustomer = () => {
  return (
    <main className="max-sm:p-5 p-10 bg-color-bg h-screen overflow-y-auto">
      <div className="flex flex-row max-sm:flex-col max-sm:gap-5 justify-between items-center mb-5">
        <h1 className="font-black text-xl uppercase">Transactions</h1>
        <Link to={'/'} className="bg-emerald-500 rounded-lg py-3 px-5 text-white text-xs hover:bg-emerald-600 duration-300 max-sm:w-full flex items-center justify-center gap-2 ">
          <i className="fa-solid fa-chevron-left text-xs w-fit"></i>
          <span>Return</span>
        </Link>
      </div>

      <div className="flex max-md:flex-col gap-5">
        <div className="max-sm:w-full sm:w-full lg:w-3/12  w-3/12 flex flex-col justify-center">
          <div className="w-full shadow py-10 px-10 rounded-lg bg-white flex flex-col gap-3">
            <h2 className="font-bold text-center">Customer Information</h2>
            <div className="space-y-1">
              <p className="font-semibold text-sm">
                DNI: <span className="font-normal">74905162</span>
              </p>
              <p className="font-semibold text-sm">
                Names: <span className="font-normal">Paulino Alfonso</span>
              </p>
              <p className="font-semibold text-sm">
                Last names: <span className="font-normal">Contreras Gómez</span>
              </p>
              <p className="font-semibold text-sm">
                Birthdate: <span className="font-normal">23/10/1999</span>
              </p>
              <p className="font-semibold text-sm">
                Phone Number: <span className="font-normal">981632216</span>
              </p>
              <p className="font-semibold text-sm">
                Email:{" "}
                <span className="font-normal">1923010051@untels.edu.pe</span>
              </p>
              <p className="font-semibold text-sm">
                Bank:{" "}
                <span className="font-normal">Banco de Crédito del Perú</span>
              </p>
              <p className="font-semibold text-sm">
                Account Number or CCI number:{" "}
                <span className="font-normal">121156484911561</span>
              </p>
            </div>
          </div>

          <div className="bg-white p-10 rounded-lg flex flex-col gap-5 shadow mt-5">
            <div className="flex justify-between items-center gap-5">
              <div className="flex flex-col gap-2">
                <span className="text-3xl font-bold">
                  <span>6</span>+
                </span>
                <p className="text-sm">Total transactions</p>
              </div>
              <span className="w-1 h-1 px-7 py-6 rounded-2xl text-2xl flex items-center justify-center bg-emerald-100">
                <i className="fa-solid fa-money-bill-1-wave text-emerald-500"></i>
              </span>
            </div>
            <p className="text-emerald-500 font-bold text-sm">
              <i className="fa-solid fa-arrow-up"></i> 25.36%{" "}
              <span className="text-gray-600 font-normal text-xs">
                Since last month
              </span>
            </p>
          </div>
        </div>

        <div className="max-sm:w-full sm:w-full lg:w-9/12 w-9/12">
          <ContainerTableTransactionCustomer />
        </div>
      </div>
    </main>
  );
};
