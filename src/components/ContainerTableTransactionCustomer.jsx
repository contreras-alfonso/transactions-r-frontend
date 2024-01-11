import React from "react";

export const ContainerTableTransactionCustomer = () => {
  return (
    <div className="h-full shadow rounded-lg py-10 px-5 max-w-full mx-auto overflow-x-auto bg-white">
      <h2 className="text-center font-black uppercase text-sm w-full">
        Transactions List
      </h2>
      <table className="w-full mt-5">
        <thead>
          <tr>
            <th className="font-semibold text-sm px-3">Date</th>
            <th className="font-semibold text-sm px-3">Amount Paid</th>
            <th className="font-semibold text-sm px-3">Deposited Paid (91%)</th>
            <th className="font-semibold text-sm px-3">Category</th>
          </tr>
        </thead>

        <tbody className="">
          <tr>
            <td className="text-sm text-center px-3 py-3">23/10/199</td>
            <td className="text-sm text-center px-3 py-3">56</td>
            <td className="text-sm text-center px-3 py-3">34</td>
            <td className="text-sm text-center px-3 py-3">Consumo</td>
          </tr>
        </tbody>
      </table>
      <div className="max-sm:text-base text-center w-full flex items-center justify-center font-black text-2xl text-gray-300">
      The customer has not made any transactions.
      </div>
    </div>
  );
};
