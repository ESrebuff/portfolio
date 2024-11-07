const ProjectTag = ({ name, onClick, isSelected }: {
    name: string,
    onClick: (name: string) => void,
    isSelected: boolean
}) => {
    const buttonStyles = isSelected
        ? "text-white bg-muted border-muted scale-105"
        : "text-muted border-muted hover:text-white hover:bg-muted hover:border-muted";

    return (
        <button
            onClick={() => onClick(name)}
            className={`border-2 rounded-full px-4 text-md cursor-pointer transition-all duration-200 ease-in-out max-md:text-xs ${buttonStyles}`}
        >
            {name}
        </button>
    );
};

export default ProjectTag;
