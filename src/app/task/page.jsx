import TaskCard from "@/components/TaskCard";
import { getTask } from "@/lib/task";
import React from "react";

const TaskPage = async () => {
  const task = await getTask();
  return (
    <div>
      <h2>Task Management: {task.length}</h2>
      <div className="grid grid-cols-3 gap-4 container mx-auto my-5">
        {task.map((item) => (
          <TaskCard key={item.id} item={item}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
