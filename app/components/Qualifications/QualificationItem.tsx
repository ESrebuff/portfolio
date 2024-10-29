interface Qualification {
    title: string;
    subtitle: string;
    calendar: string;
}

interface QualificationItemProps {
    qualification: Qualification;
    isRightAligned: boolean;
}

const QualificationItem: React.FC<QualificationItemProps> = ({ qualification, isRightAligned }) => (
    <div className="grid grid-cols-[1fr_max-content_1fr] gap-6">
        {!isRightAligned ? (
            <>
                <div className="text-end">
                    <h3 className="text-lg text-primary mt-[-5px]">{qualification.title}</h3>
                    <span>{qualification.subtitle}</span>
                    <div>
                        <i className="uil uil-calendar-alt"></i> {qualification.calendar}
                    </div>
                </div>
                <div className="flex flex-col justify-center">
                    <span className="w-[13px] h-[13px] bg-accent rounded-full"></span>
                    <span className="w-px h-full bg-accent transform translate-x-[6px]"></span>
                </div>
            </>
        ) : (
            <>
                <div></div>
                <div className="flex flex-col justify-center">
                    <span className="w-[13px] h-[13px] bg-accent rounded-full"></span>
                    <span className="w-px h-full bg-accent transform translate-x-[6px]"></span>
                </div>
                <div>
                    <h3 className="text-lg text-primary mt-[-5px]">{qualification.title}</h3>
                    <span>{qualification.subtitle}</span>
                    <div>
                        <i className="uil uil-calendar-alt"></i> {qualification.calendar}
                    </div>
                </div>
            </>
        )}
    </div>
);

export default QualificationItem;
