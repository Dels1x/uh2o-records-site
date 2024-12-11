import React from "react";

interface MemberListProps {
    members: string[];
}

const MemberList: React.FC<MemberListProps> = ({members}) => {
    return (
        <ul className="member-list">
            {members.map((member, index) => (
                <li key={index} className="member-list-item">
                    {member}
                </li>
            ))}
        </ul>
    );
}

export default MemberList;