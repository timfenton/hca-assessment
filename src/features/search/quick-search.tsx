import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";
import { twMerge } from "tailwind-merge";
import SearchBox from "./search-box";

interface QuickSearchProps {
    className?: string;
}

const QuickSearch: React.FC<QuickSearchProps> = ({className}): React.ReactNode => {
    const [quickSearchFocus, setQuickSearchFocus] = useState(false);

    const divClasses = twMerge(className, "relative");

    return (
        <div className={divClasses}>
            {!quickSearchFocus  && <FontAwesomeIcon icon={faSearch} className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 text-xs" />}
            {!quickSearchFocus && <input onFocus={() => setQuickSearchFocus(true)} onBlur={() => setQuickSearchFocus(false)} id="searchbox" type="search" placeholder="Search" className="pl-8 py-1 pr-0 placeholder:text-gray-700 text-xs w-full border rounded-md focus:outline-none h-11 text-black"></input>}
            {quickSearchFocus && <SearchBox />}
        </div>
    );
}

export default QuickSearch;