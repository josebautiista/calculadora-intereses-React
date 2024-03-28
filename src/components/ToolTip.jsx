/* eslint-disable react/prop-types */
import { Tooltip } from "@nextui-org/tooltip";
import { FaCircleInfo } from "react-icons/fa6";
import { useState } from "react";

const ToolTip = ({ message }) => {
  const [openTool, setOpenTool] = useState(false);

  return (
    <Tooltip className="w-full" isOpen={openTool} size="md" color="primary" content={message}>
      <div onClick={() => setOpenTool(!openTool)}>
        <FaCircleInfo className="text-small text-blue-400 cursor-pointer" />
      </div>
    </Tooltip>
  );
};

export default ToolTip;
