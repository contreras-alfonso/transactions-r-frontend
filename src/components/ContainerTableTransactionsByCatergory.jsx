import React, { useEffect, useState } from "react";
import { formatDate } from "../helpers/herlpers";
import { getAllByCategory } from "../api/transactions/transactions";
import { Spinner } from "./Spinner";
import { useNavigate } from "react-router-dom";

export const ContainerTableTransactionsByCatergory = ({

    categoria,
    page,
    setPage,
}) => {

   
  const [isLoading, setIsLoading] = useState(false);
  const [transactions,setTransactions] = useState([]);

  useEffect(() => {
    const getTransactionsByCustomerID = async () => {
      setIsLoading(true);
      const data = await getAllByCategory(categoria,page);
      setTransactions(data.transactionsByCategory);
      setIsLoading(false);
    };
    if(Number(categoria)>0){
        getTransactionsByCustomerID();
    }

  }, [categoria,page]);

  return (

    <>
    {Number(categoria)!==0 ? (<div className="mt-5 shadow rounded-lg py-10 px-5 bg-white">
    
    {isLoading ? (
      <Spinner />
    ) : transactions?.length === 0 ? (
      <>
        <div className=" h-full max-sm:text-base text-center w-full flex items-center justify-center font-black text-2xl text-gray-300">
          No results found.
        </div>
      </>
    ) : (
 
      <div className="flex flex-col justify-between overflow-x-auto p-5">
        <div>
        <h2 className="text-center font-black uppercase text-sm w-full">
          Transactions by category
        </h2>
        <table className="w-full mt-5">
          <thead>
            <tr>
              <th className="font-semibold text-sm px-3">Date</th>
              <th className="font-semibold text-sm px-3">Amount Paid</th>
              <th className="font-semibold text-sm px-3">
                Deposited Paid (91%)
              </th>
              <th className="font-semibold text-sm px-3">DNI</th>
              <th className="font-semibold text-sm px-3">Names</th>
              <th className="font-semibold text-sm px-3">Lastnames</th>
              <th className="font-semibold text-sm px-3">Bank</th>
            </tr>
          </thead>

          <tbody className="">
            {transactions?.map((e) => (
              <tr key={e.id} className="hover:bg-color-bg">
                <td className="text-sm text-center px-3 py-3">
                  {formatDate(e.operation_date)}
                </td>
                <td className="text-sm text-center px-3 py-3">
                  S/ {e.amount_paid}
                </td>
                <td className="text-sm text-center px-3 py-3">
                  S/ {e.deposited_amount}
                </td>
                <td className="text-sm text-center px-3 py-3">
                  {e.customer?.dni}
                </td>
                <td className="text-sm text-center px-3 py-3">
                  {e.customer?.names}
                </td>
                <td className="text-sm text-center px-3 py-3">
                  {e.customer?.last_names}
                </td>
                <td className="text-sm text-center px-3 py-3">
                  {e.customer?.bank}
                </td>

              </tr>
            ))}
          </tbody>
        </table>
        </div>
        <div
          className={`mt-10 w-full flex ${
            page == 1 ? "justify-end" : "justify-between"
          } `}
        >
          <button
            onClick={() => {
              setPage(page - 1);
            }}
            className={`duration-300 text-xs border border-dashed border-emerald-600 hover:text-white hover:bg-emerald-500 hover:border-solid text-black rounded-lg py-3 px-5 ${
              page == 1 && "hidden"
            }`}
          >
            See less -
          </button>
          <button
            onClick={() => {
              setPage(page + 1);
            }}
            className={`duration-300 text-xs border border-dashed border-emerald-600 hover:text-white hover:bg-emerald-500 hover:border-solid text-black rounded-lg py-3 px-5 ${
              transactions?.length < 10 && "hidden"
            }`}
          >
            See more +
          </button>
        </div>
      </div>
    )}
</div>)  : (
    <div className="py-10 max-sm:text-xl text-center w-full flex items-center justify-center font-black text-2xl text-gray-300">Select a category to view transactions.</div>
)}
    

  
    </>
  );
};
