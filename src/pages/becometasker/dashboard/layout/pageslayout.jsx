



const PagesLayout = ({ buttonText, children, onClick }) => {
    return (
        <div className='p-10 flex-col gap-y-16 pt-4'>

            <div className='flex justify-end gap-4 pb-3'> 
                
                <button className='bg-blue-600 text-white  px-6 py-2 rounded-full flex shadow-inner' onClick={onClick}>
                    {buttonText}
                </button>
            </div>

            <div>{children}</div>
        </div>
    );
};

export default PagesLayout;

