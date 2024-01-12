import React, { useEffect, useState } from "react";
import { formatDate } from "../helpers/herlpers";
import { getAllByCustomerId } from "../api/transactions/transactions";
import { Spinner } from "./Spinner";
import { useNavigate } from "react-router-dom";
import { ModalDetailTransaction } from "./ModalDetailTransaction";

export const ContainerTableTransactionCustomer = ({
  customerTransactions,
  page, 
  setPage,
  setDataCustomer,
  id,
}) => {
  const [isLoading, setIsLoading] = useState(false);
  const [transaction,setTransaction] = useState({});
  const [modalDetailTransaction,setModalDetailTransaction] = useState(false);
  const { transactions } = customerTransactions;
  const navigate = useNavigate()

  useEffect(() => {
    const getTransactionsByCustomerID = async () => {
      setIsLoading(true);
      const data = await getAllByCustomerId(id, page);
      setDataCustomer(data.customer);
      setIsLoading(false);
      if (!data.status) return navigate("/");
    };
    getTransactionsByCustomerID();
  }, [page]);

  return (

    <>
    <div className="h-full shadow rounded-lg py-10 px-5 max-w-full mx-auto overflow-x-auto bg-white">
    
        {isLoading ? (
          <Spinner />
        ) : transactions?.length === 0 ? (
          <>
            <div className=" h-full max-sm:text-base text-center w-full flex items-center justify-center font-black text-2xl text-gray-300">
              The customer has not made any transactions.
            </div>
          </>
        ) : (
     
          <div className="flex flex-col justify-between h-full">
            <div>
            <h2 className="text-center font-black uppercase text-sm w-full">
              Transactions List
            </h2>
            <table className="w-full mt-5">
              <thead>
                <tr>
                  <th className="font-semibold text-sm px-3">Date</th>
                  <th className="font-semibold text-sm px-3">Amount Paid</th>
                  <th className="font-semibold text-sm px-3">
                    Deposited Paid (91%)
                  </th>
                  <th className="font-semibold text-sm px-3">Category</th>
                  <th></th>
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
                      {e.operation_category.category_name}
                    </td>
                    <td className="px-3 flex items-center justify-center">
                      <button onClick={()=>{setModalDetailTransaction(true); setTransaction(e)}} className="min-w-36 bg-emerald-500 rounded-lg py-3 px-5 text-white text-xs hover:bg-emerald-600 duration-300 max-sm:w-full flex items-center justify-center gap-2 ">
                        <i className="fa-solid fa-eye"></i>
                        <span>View Details</span>
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            </div>
            <div
              className={`mt-10 flex w-full order-last ${
                page == 1 ? "justify-end" : "justify-between"
              }`}
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
    </div>

    <ModalDetailTransaction modalDetailTransaction={modalDetailTransaction} setModalDetailTransaction={setModalDetailTransaction} transaction={transaction}/>
    </>
  );
};
