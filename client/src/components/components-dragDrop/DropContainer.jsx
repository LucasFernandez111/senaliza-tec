import { useDroppable } from "@dnd-kit/core";
import React, { useEffect, useState } from "react";

const DropContainer = ({ id, children }) => {
  const [obtenerId, setObtenerId] = useState({ id: id });
  useEffect(() => {
    console.log(obtenerId);
  }, [obtenerId]);

  const { setNodeRef } = useDroppable(obtenerId);

  return (
    <div className="drop" ref={setNodeRef}>
      {children}
    </div>
  );
};

export default DropContainer;
