export const Button=({title,onClickHandler,disabled=false,children,type='info', size='md'})=>{
    return (
        <button
            disabled={disabled}
            onClick={onClickHandler}
            className={`flex items-center ${size==='sm'?'px-1 py-1':'px-3 py-2'} font-medium ${size==='sm'?'text-sm':''} tracking-wide text-white capitalize transition-colors duration-300 transform ${type==='danger'?'bg-red-500':'bg-blue-500'} rounded-lg `}>
            {children}
            <span className="mx-1">{title}</span>
        </button>
    )
}