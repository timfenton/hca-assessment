const PageTitleSection: React.FC<{children: React.ReactNode}> = ({children}): React.ReactNode => {
    return (
        <div id="pageHeader" className='flex flex-row justify-center items-center w-full font-sans'>
            <div className="flex justify-center w-full h-auto bg-hca-accent-3 text-white">
                <div className="w-11/12 md:w-1/2 p-8 flex flex-col sm:flex-row space-y-2 sm:space-y-0">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PageTitleSection;