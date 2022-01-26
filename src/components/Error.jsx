
export const Error = ( {children} ) => {
    return (
        <div className="bg-red-800 text-white text-center uppercase p-3 mb-3 font-bold rounded">
            <p>{ children }</p>
        </div>
    )
}
