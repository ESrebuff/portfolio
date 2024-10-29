import QualificationItem from "./QualificationItem";

interface Qualification {
    title: string;
    subtitle: string;
    calendar: string;
}

interface QualificationListProps {
    data: Qualification[];
    condition: boolean;
}

const QualificationList: React.FC<QualificationListProps> = ({ data, condition }) => (
    <>
        {data.map((qualification, index) => (
            <QualificationItem
                key={index}
                qualification={qualification}
                isRightAligned={condition ? index % 2 !== 0 : index % 2 === 0}
            />
        ))}
    </>
);

export default QualificationList;
