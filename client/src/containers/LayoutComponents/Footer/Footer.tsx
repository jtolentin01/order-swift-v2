import React from "react";
import * as misc from "../../../enum/Misc";

const FooterComponent: React.FC = () => {
    return (
        <footer className="text-gray-500 dark:text-[#a8a2a2] text-sm w-full text-center p-2 bg-[#fff] dark:bg-[#1E1E1E]">
            {misc.SystemInfo.SYS_FOOTER}
        </footer>
    )
}

export default FooterComponent;