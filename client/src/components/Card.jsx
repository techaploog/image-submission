import React from "react";

import { FiCheckCircle, FiCircle } from 'react-icons/fi';
import { AiOutlineFieldTime } from 'react-icons/ai';

const Card = ({ children }) => {
  const notCheck = "border-gray-400 bg-gray-200";
  const checking = "border-yellow-400 bg-yellow-200";
  const complete = "border-green-400 bg-green-200";

  const cardStyle = [notCheck, checking, complete];
  const iconStyle =[<FiCircle/>,<AiOutlineFieldTime/>,<FiCheckCircle />];

  return (
    <div className={`m-3 px-2 py-3 border rounded-md ${cardStyle[children?.checkStatus]}`}>
      <div className="flex flex-row justify-between">
        <div className="text-md font-extrabold">[ {children?.kanban} ]</div>
        <div>{children?.partNo}</div>
        <div className="text-2xl">{iconStyle[children?.checkStatus]}</div>
      </div>
      <div className="text-xs justify-center overflow-hidden">
        {children?.partName}
      </div>
      {/* <div className="flex flex-row justify-center">
        <div className="mx-2">{children?.address}</div>
        <div className="mx-2">{children?.supplier}</div>
      </div> */}
    </div>
  );
};

export default Card;
