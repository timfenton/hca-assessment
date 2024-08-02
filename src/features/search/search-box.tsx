import { faSearch } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { twMerge } from "tailwind-merge";
import HCAButtonSearch from "../../components/shared/buttons/hca-search-btn";

interface SearchBoxProps {
    className?: string;
    onBlurStateHandler?: (state:boolean) => void;
}

const SearchBox: React.FC<SearchBoxProps> = ({className, onBlurStateHandler}) => {
    const divClasses = twMerge(className, "relative");

    return (
        <div className={divClasses}>
            <input onBlur={() => onBlurStateHandler ? onBlurStateHandler(false) : {}} id="searchbox" type="search" placeholder="What are you looking for?" className="pl-3 py-1 pr-0 placeholder:text-gray-700 text-sm w-full border rounded-md focus:outline-none h-11 text-black"></input>
            <HCAButtonSearch buttonAction={() => {alert("searching...")}} ariaLabel="Search" className="absolute right-3 top-1/2 transform -translate-y-1/2 translate-x-3 text-gray-600 text-xs border-l-2 h-full pr-3 rounded-r-md">
                <FontAwesomeIcon icon={faSearch} />
            </HCAButtonSearch>
        </div>
    );
}

export default SearchBox;