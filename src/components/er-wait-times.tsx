import { faClock, faCaretDown } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ERWaitTimes: React.FC = (): React.ReactNode => {
    return (
        <div className="text-hca-accent-3 ml-5">
            <FontAwesomeIcon icon={faClock} className="" />
            <span className="mx-3">View All ER Wait Times</span>
            <FontAwesomeIcon icon={faCaretDown} />
        </div>
    );
}

export default ERWaitTimes;