import ButtonBase from "./button-base";
import { HCAButtonProps } from "../../../types/hca-button-props";

const HCAButtonSearch: React.FC<HCAButtonProps> = ({buttonAction, ariaLabel, disabled = false, children, className}): React.ReactNode => {

    return (
        <ButtonBase onClick={buttonAction} buttonTheme='search' disabled={disabled} className={className} ariaLabel={ariaLabel} >
            {children}
        </ButtonBase>
    );
}

export default HCAButtonSearch;