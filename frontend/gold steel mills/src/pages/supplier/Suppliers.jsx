import { Table } from "../../components/Table.jsx";
import { PageHeader } from "../../components/PageHeader.jsx";
import { InputField } from "../../components/InputField.jsx";
import { Button } from "../../components/Button.jsx";

import { Modal } from "../../components/Modal.jsx";
import { SupplierCreate } from "../../components/SupplierCreate.jsx";
import {usePaginationAndFiltering} from "../../hooks/usePaginationAndFiltering.js";

export const Suppliers = () => {

      const {
          filteredData,
          searchQuery,
          setSearchQuery,
          currentPage,
          setCurrentPage,
          getPaginatedData,
          setData,
          refresh
      }=  usePaginationAndFiltering('http://localhost:8080/api/v1/suppliers','firstName',5)
        const ITEMS_PER_PAGE = 5;


    // Handle previous page button click
    const goOnPrevPage = () => {
        if (currentPage === 1) return;
        setCurrentPage(currentPage - 1);
    };

    // Handle next page button click
    const goOnNextPage = () => {
        const totalPages = Math.ceil(filteredData.length / ITEMS_PER_PAGE);
        if (currentPage === totalPages) return;
        setCurrentPage(currentPage + 1);
    };

    return (
        <div className="flex flex-col gap-4">
            <PageHeader title="Suppliers" />
            <InputField
                value={searchQuery}
                setValue={setSearchQuery}
                placeholder="Search*"
            />
            {filteredData.length === 0 ? (
                'Loading...'
            ) : (
                <Table columns={['firstName', 'lastName', 'contactNumber']} data={getPaginatedData()} />
            )}

            <div className="flex items-center justify-between">
                <div className="flex items-center">
                    <span>Page:</span>
                    <select
                        name="page-number"
                        onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                        value={currentPage}
                        className="mx-2"
                    >
                        {Array.from(Array(Math.ceil(filteredData.length / ITEMS_PER_PAGE)), (_, i) => i + 1).map((val,index) => (
                            <option key={index}>{val}</option>
                        ))}
                    </select>
                </div>

                <div className="flex space-x-2">
                    <Button
                        title="Prev"
                        onClickHandler={goOnPrevPage}
                        disabled={currentPage === 1}
                    />
                    <Button
                        title="Next"
                        onClickHandler={goOnNextPage}
                        disabled={currentPage * ITEMS_PER_PAGE >= filteredData.length}
                    />
                </div>
            </div>

            <div className="flex space-x-4">
                <Button title="Refresh" onClick={() => { refresh() }}>
                    <svg className="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                        <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
                    </svg>
                </Button>
                {/* Add new supplier modal */}
                <Modal title="Add New Supplier">
                    <SupplierCreate />
                </Modal>
            </div>
        </div>
    );
};
