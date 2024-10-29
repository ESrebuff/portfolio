interface TabNavigationProps {
    toggleState: number;
    setToggleState: (index: number) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ toggleState, setToggleState }) => (
    <div className="flex justify-center mb-8">
        <div
            className={`cursor-pointer text-xl font-normal mx-2 hover:text-primary hover:scale-105 ${toggleState === 1 ? "text-primary scale-105" : "text-muted"
                }`}
            onClick={() => setToggleState(1)}
        >
            <i className="uil uil-graduation-cap mr-2"></i> Education
        </div>
        <div
            className={`cursor-pointer text-xl font-normal mx-2 hover:text-primary hover:scale-105 ${toggleState === 2 ? "text-primary scale-105" : "text-muted"
                }`}
            onClick={() => setToggleState(2)}
        >
            <i className="uil uil-briefcase-alt mr-2"></i> Experience
        </div>
    </div>

);

export default TabNavigation;
