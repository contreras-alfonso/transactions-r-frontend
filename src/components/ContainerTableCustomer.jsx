import React, { useEffect, useState } from "react";
import { Spinner } from "./Spinner";
import { getAllCustomers, getCustomer } from "../api/customers/customers";
import { Link } from "react-router-dom";

export const ContainerTableCustomer = ({
  customers,
  setCustomers,
  page,
  setPage,
  loading,
  setLoading,
}) => {
  const [searchByDniOrName, setSearchByDniOrName] = useState("");

  const searchCustomer = async (e) => {
    setSearchByDniOrName(e.target.value);

    if (e.target.value !== "") {
      setLoading(true);
      const data = await getCustomer(e.target.value);
      setLoading(false);
      setCustomers(data.customers);
    }else{
      setLoading(true);
      const data = await getAllCustomers(page)
      setLoading(false);
      setCustomers(data.customers);
    }
  };

  return (
    <div className="shadow rounded-lg p-5 max-w-full mx-auto overflow-x-auto bg-white">
      <div className="w-full flex items-center justify-end gap-2 py-3">
        <input
          value={searchByDniOrName}
          onChange={(e) => {
            searchCustomer(e);
          }}
          type="text"
          placeholder="search by DNI or 'Names'"
          className="rounded border border-gray-400 py-2 px-5 w-[250px] text-sm focus:outline-none"
        />
      </div>

      <h2 className="text-center font-black uppercase text-sm w-full">Customer List</h2>

      {!loading ? (
        <>
          {customers?.length !== 0 ? (
            <>
              <table className="w-full mt-10">
                <thead className="">
                  <tr>
                    <th className="font-semibold text-sm pb-5">DNI</th>
                    <th className="font-semibold text-sm pb-5">Names</th>
                    <th className="font-semibold text-sm pb-5">Last names</th>
                    {/* <th className="font-semibold text-sm">Birthdate</th> */}
                    {/* <th className="font-semibold text-sm py-3">Phone Number</th> */}
                    {/* <th className="font-semibold text-sm">Email</th> */}
                    <th className="font-semibold text-sm pb-5">Bank</th>
                    {/* <th className="font-semibold text-sm">
                      Account Number or CCI number
                    </th> */}
                    <th className="font-semibold text-sm pb-5">Transactions</th>
                  </tr>
                </thead>

                <tbody className="">
                  {customers?.map((e) => (
                    <tr key={e.id} className="hover:bg-color-bg">
                      <td className="text-sm text-center px-5 py-3 mb-2">
                        {e?.dni}
                      </td>
                      <td className="text-sm text-center px-5  py-3 mb-2">{e?.names}</td>
                      <td className="text-sm text-center px-5 py-3 mb-2">
                        {e?.last_names}
                      </td>
                      {/* <td className="text-sm text-center px-3 py-3">
                        {e?.birthdate}
                      </td> */}
                      {/* <td className="text-sm text-center px-3 py-3">
                        {e?.phone}
                      </td> */}
                      {/* <td className="text-sm text-center px-3 py-3">
                        {e.email}
                      </td> */}
                      <td className="text-sm text-center px-5 py-3 mb-2">
                        {e?.bank}
                      </td>
                      {/* <td className="text-sm text-center px-3 py-3">
                        {e?.cci_number}
                      </td> */}
                      <td className="min-w-44 flex items-center justify-center"><Link to={`transactions/customer/${e?.id}`} className="border-[1px] border-dashed border-emerald-600 rounded-lg py-3 px-5 text-black text-xs hover:bg-emerald-500 duration-300 max-lg:w-full my-1 hover:text-white hover:border-solid"><i className="fa-solid fa-sack-dollar"></i> Show Transactions</Link></td>
                    </tr>
                  ))}
                </tbody>
              </table>
              {searchByDniOrName === "" && (
                <div
                  className={`mt-10 flex  w-full ${
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
                      customers?.length < 10 && "hidden"
                    }`}
                  >
                    See more +
                  </button>
                </div>
              )}
            </>
          ) : (
            <div className="mt-3 text-center font-black text-2xl text-gray-400">
              No information available.
            </div>
          )}
        </>
      ) : (
        <Spinner />
      )}
    </div>
  );
};
