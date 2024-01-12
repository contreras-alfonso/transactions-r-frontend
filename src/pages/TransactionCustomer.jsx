import React, { useEffect, useState } from "react";
import { ContainerTableTransactionCustomer } from "../components/ContainerTableTransactionCustomer";
import { Link, useNavigate, useParams } from "react-router-dom";
import { getAllByCustomerId } from "../api/transactions/transactions";
import { CardCustomerInformation } from "../components/CardCustomerInformation";
import { CardTotalTransactions } from "../components/CardTotalTransactions";

export const TransactionCustomer = () => {
    const navigate = useNavigate();
    const [dataCustomer,setDataCustomer] = useState({});
    const [loadingData,setLoadingData] = useState(false);
    const [totalTransactions,setTotalTransactions] = useState('');
    const [page,setPage] = useState(1);

    const {id} = useParams();
    
    useEffect(()=>{
        const getTransactionsByCustomerID = async () => {
            setLoadingData(true);
            const data = await getAllByCustomerId(id,page)
            setDataCustomer(data.customer);
            setTotalTransactions(data.totalTransactions)
            setLoadingData(false);
            if(!data.status) return navigate('/')

        }
        getTransactionsByCustomerID();
    },[])

    if(loadingData) return

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
         <CardCustomerInformation dataCustomer={dataCustomer}/>

          <CardTotalTransactions  totalTransactions={totalTransactions}/>

        </div>

        <div className="max-sm:w-full sm:w-full lg:w-9/12 w-9/12">
          <ContainerTableTransactionCustomer page={page} setPage={setPage} customerTransactions={dataCustomer} dataCustomer={dataCustomer} setDataCustomer={setDataCustomer} id={id}/>
        </div>
      </div>
    </main>
  );
};
