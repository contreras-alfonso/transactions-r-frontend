import React, { useEffect, useState } from "react";
import { getAllCustomers } from "../api/customers/customers";
import { ContainerTableCustomer } from "../components/ContainerTableCustomer";

export const TransactionsHome = () => {
  const [customers, setCustomers] = useState([]);
  const [page, setPage] = useState(1);
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
      </main>

    </>
  );
};
