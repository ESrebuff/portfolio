import React from 'react';
import Tag from '../ui/Tag';

interface TabNavigationProps {
    toggleState: number;
    setToggleState: (index: number) => void;
}

const TabNavigation: React.FC<TabNavigationProps> = ({ toggleState, setToggleState }) => {
    const handleTagClick = (name: string) => {
        if (name === "Education") {
            setToggleState(1);
        } else if (name === "Experience") {
            setToggleState(2);
        }
    };

    return (
        <div className="flex justify-center mb-8 gap-2">
            <div className="">
                <Tag
                    name="Education"
                    onClick={handleTagClick}
                    isSelected={toggleState === 1}
                />
            </div>
            <div>
                <Tag
                    name="Experience"
                    onClick={handleTagClick}
                    isSelected={toggleState === 2}
                />
            </div>
        </div>
    );
};

export default TabNavigation;
