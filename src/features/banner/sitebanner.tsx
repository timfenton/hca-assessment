import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import ERWaitTimes from "../../components/er-wait-times";
import { faCalendar, faWarning } from "@fortawesome/free-solid-svg-icons";
import AlertBubble from "../../components/shared/alert-bubble";
import HCAButtonPrimary from "../../components/shared/buttons/hca-btn-primary";
import HCAButtonAlert from "../../components/shared/buttons/hca-btn-alert";

const SiteBanner: React.FC = () => {
    return (
        <div className="bg-white p-3 flex flex-col md:flex-row justify-between items-center w-full text-base h-auto space-y-4">
            <ERWaitTimes />
            <div className="md:flex-grow"/>
            <div className="flex flex-row space-x-4">
                <HCAButtonPrimary buttonAction={() => alert("test")} ariaLabel="Make An Appointment">
                    <FontAwesomeIcon icon={faCalendar} />
                    <span className="ml-3">Make An Appointment</span>
                </HCAButtonPrimary>
                <HCAButtonAlert buttonAction={() => alert("test")} ariaLabel="View alerts" className="flex justify-center md:space-x-3">
                    <FontAwesomeIcon icon={faWarning} className="hidden md:inline text-hca-alert-dark text-xl top-auto bottom-auto" />
                    <span className="hidden font-bold md:inline">Alerts</span>
                    <AlertBubble alertCount={2} />
                </HCAButtonAlert>
            </div>
        </div>
    );
}

export default SiteBanner;
