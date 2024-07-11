import {Button} from "./Button.jsx";

export const PaginatedButtons=({currentPage,setCurrentPage,data,ITEMS_PER_PAGE,goOnPrevPage,goOnNextPage})=>{
    return    <div className="flex items-center justify-between">
        <div className="flex items-center">
            <span>Page:</span>
            <select
                name="page-number"
                onChange={(e) => setCurrentPage(parseInt(e.target.value))}
                value={currentPage}
                className="mx-2"
            >
                {Array.from(Array(Math.ceil(data.length / ITEMS_PER_PAGE)), (_, i) => i + 1).map((val,index) => (
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
                disabled={currentPage * ITEMS_PER_PAGE >= data.length}
            />
        </div>
    </div>
}