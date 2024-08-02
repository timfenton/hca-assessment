const PageContentSection: React.FC<{children: React.ReactNode}> = ({children}): React.ReactNode => {
    return (
        <div id="pageHeader" className='flex flex-row justify-center items-center w-full font-sans'>
            <div className="flex justify-center w-full bg-white text-black">
                <div className="pt-4 flex flex-col w-full">
                    {children}
                </div>
            </div>
        </div>
    );
};

export default PageContentSection;