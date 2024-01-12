import React, { useEffect, useState } from "react";
import { getAllCustomers } from "../api/customers/customers";
import { ContainerTableCustomer } from "../components/ContainerTableCustomer";
import { ContainerTableTransactionsByCatergory } from "../components/ContainerTableTransactionsByCatergory";

export const TransactionsHome = () => {
  const [customers, setCustomers] = useState([]);
  const [categoria,setCategoria] = useState(0);
  const [page, setPage] = useState(1);
  const [pageTransactionByCategory,setPageTransactionByCategory] = useState(1)
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const getCustomers = async () => {
      setLoading(true);
      const data = await getAllCustomers(page);
      setLoading(false);
      setCustomers(data.customers);
    };
    getCustomers();
  }, [page]);

  return (
    <>
      <main className="max-sm:p-5 p-10 bg-color-bg h-screen overflow-y-auto">
        <h1 className="font-black text-xl uppercase mb-5">Home</h1>

        <ContainerTableCustomer
          loading={loading}
          setLoading={setLoading}
          page={page}
          setPage={setPage}
          customers={customers}
          setCustomers={setCustomers}
        />
    
          <h2 className="font-black text-xl uppercase my-5">Bonus</h2>

          <select value={categoria} onChange={(e)=>{setCategoria(e.target.value); setPageTransactionByCategory(1)}} className="outline-none text-sm border py-2 px-3 rounded-lg" >
            <option value="0">-- Select a category --</option>
            <option value="1">Retiro de efectivo</option>
            <option value="2">
              Préstamo con evaluación
            </option>
            <option value="3">Préstamo con garantía</option>
            <option value="4">Pago con descuento</option>
          </select>

          <ContainerTableTransactionsByCatergory categoria={categoria} setCategoria={setCategoria} page={pageTransactionByCategory} setPage={setPageTransactionByCategory}/>

          
      </main>
    </>
  );
};
