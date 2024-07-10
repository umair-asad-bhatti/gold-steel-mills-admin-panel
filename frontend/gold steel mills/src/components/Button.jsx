export const Button=({title,onClickHandler,disabled=false,children})=>{
    return (
        <button
            disabled={disabled}
            onClick={onClickHandler}
            className="flex items-center px-4 py-2 font-medium tracking-wide text-white capitalize transition-colors duration-300 transform bg-blue-600 rounded-lg hover:bg-blue-500 focus:outline-none focus:ring focus:ring-blue-300 focus:ring-opacity-80">
            {children}
            <span className="mx-1">{title}</span>
        </button>
    )
}