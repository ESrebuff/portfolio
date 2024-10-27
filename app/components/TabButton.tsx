import { ReactNode } from "react";

const TabButton = ({ active, selectTab, children }: {
    active: boolean;
    selectTab: () => void;
    children: ReactNode;

}) => {
    const buttonClasses = active ? 'text-white border-b border-primary' : 'text-[#ADB7BE]'

    return (
        <button onClick={selectTab} >
            <p className={`mr-3 font-semibold ${buttonClasses}`}>
                {children}
            </p>
        </button >
    );
}

export default TabButton;