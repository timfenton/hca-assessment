const PageTitleSection: React.FC<{children: React.ReactNode}> = ({children}): React.ReactNode => {
    return (
        <div id="pageHeader" className='flex flex-row justify-center items-center w-full font-sans'>
            <div className="flex justify-center w-full h-auto bg-hca-accent-3 text-white">
                <div className="w-1/2 p-8 flex flex-row">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PageTitleSection;