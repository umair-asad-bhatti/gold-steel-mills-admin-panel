import {PageHeader} from "../../components/PageHeader.jsx";
import {usePaginationAndFiltering} from "../../hooks/usePaginationAndFiltering.js";
import {InputField} from "../../components/InputField.jsx";
import {Table} from "../../components/Table.jsx";
import {Button} from "../../components/Button.jsx";
import {Modal} from "../../components/Modal.jsx";
import {PaginatedButtons} from "../../components/PaginatedButtons.jsx";
import {PurchaseCreate} from "../../components/PurchaseCreate.jsx";

export const Purchases=()=>{
    const ITEMS_PER_PAGE = 5;
    const {
        filteredData,
        searchQuery,
        setSearchQuery,
        currentPage,
        setCurrentPage,
        getPaginatedData,
        setData,
        refresh,
        goOnNextPage,
        goOnPrevPage
    }=  usePaginationAndFiltering('http://localhost:8080/api/v1/purchases','itemName',ITEMS_PER_PAGE)


 return <div className="flex flex-col gap-3 ">
     <PageHeader title={'Purchases'}/>
     <InputField
         value={searchQuery}
         setValue={setSearchQuery}
         placeholder="Search*"
     />
     {filteredData.length === 0 ? (
         'No Data Found...'
     ) : (
         <Table deleteURL={"http://localhost:8080/api/v1/purchases"} columns={['supplierName', 'quantity', 'price','itemName','createdAt','total']} data={getPaginatedData()} />
     )}
     <PaginatedButtons currentPage={currentPage} setCurrentPage={setCurrentPage} data={filteredData} ITEMS_PER_PAGE={ITEMS_PER_PAGE} goOnNextPage={goOnNextPage} goOnPrevPage={goOnPrevPage}/>

     {/*Footer*/}
     <div className="flex space-x-4">
         <Button title="Refresh" onClickHandler={refresh}>
             <svg className="w-5 h-5 mx-1" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor">
                 <path fillRule="evenodd" d="M4 2a1 1 0 011 1v2.101a7.002 7.002 0 0111.601 2.566 1 1 0 11-1.885.666A5.002 5.002 0 005.999 7H9a1 1 0 010 2H4a1 1 0 01-1-1V3a1 1 0 011-1zm.008 9.057a1 1 0 011.276.61A5.002 5.002 0 0014.001 13H11a1 1 0 110-2h5a1 1 0 011 1v5a1 1 0 11-2 0v-2.101a7.002 7.002 0 01-11.601-2.566 1 1 0 01.61-1.276z" clipRule="evenodd" />
             </svg>
         </Button>
         {/* Add new supplier modal */}
         <Modal title="Add New Purchase">
             <PurchaseCreate />
         </Modal>
     </div>
 </div>
}
