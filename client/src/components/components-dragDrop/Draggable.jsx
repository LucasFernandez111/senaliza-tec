import { useDraggable } from "@dnd-kit/core";
import React from "react";
import "../../ModosDeJuego/JuegoOperaciones/JuegoOperaciones.css";

const Draggable = ({ id, children }) => {
  const { listeners, attributes, setNodeRef, transform } = useDraggable({
    id: id,
  });

  const style = transform
    ? {
        transform: `translate3d(${transform.x}px, ${transform.y}px, 0)`,
      }
    : undefined;

  return (
    <div
      className="div"
      ref={setNodeRef}
      {...attributes}
      {...listeners}
      style={style}
    >
      {children}
    </div>
  );
};

export default Draggable;
