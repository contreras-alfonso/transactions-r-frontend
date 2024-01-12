import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useEffect, useState } from "react";
import { formatDate } from "../helpers/herlpers";

export const ModalDetailTransaction = ({
  modalDetailTransaction,
  setModalDetailTransaction,
  transaction,
}) => {
  const {
    id,
    operation_date,
    amount_paid,
    deposited_amount,
    operationCategoryId,
    operation_category,
  } = transaction;
  return (
    <>
      <Transition appear show={modalDetailTransaction} as={Fragment}>
        <Dialog
          as="div"
          className="relative z-10"
          onClose={() => {
            setModalDetailTransaction(false);
          }}
        >
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/80" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center p-4 text-center">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-[600px] transform overflow-hidden rounded-lg bg-white p-10 text-left align-middle shadow-xl transition-all">
                  <Dialog.Title
                    as="h3"
                    className="leading-6 text-gray-900 font-black uppercase text-center"
                  >
                    transaction details
                  </Dialog.Title>

                  <div className="my-7 w-full flex flex-col gap-[10px]">
                    <p className="text-sm uppercase font-semibold">
                    Transaction number: <span className="font-normal">{id}</span>
                    </p>
                    <p className="text-sm uppercase font-semibold">
                    Date: <span className="font-normal">{formatDate(operation_date)}</span>
                    </p>
                    <p className="text-sm uppercase font-semibold">
                    Amount Paid: <span className="font-normal">S/{amount_paid}</span>
                    </p>
                    <p className="text-sm uppercase font-semibold">
                    Deposited Amount (91%): <span className="font-normal">S/{deposited_amount}</span>
                    </p>
                    <p className="text-sm uppercase font-semibold">
                    Category: <span className="font-normal">{operation_category?.category_name}</span>
                    </p>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
};
