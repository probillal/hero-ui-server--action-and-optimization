import AddTask from "@/components/AddTask";
import TaskCard from "@/components/TaskCard";
import { getTask } from "@/lib/task";
import React from "react";

const TaskPage = async () => {
  const task = await getTask();
  return (
    <div className="container mx-auto">
      <h2 className="mb-6">Task Management: {task.length}</h2>
      <AddTask></AddTask>
      <div className="grid grid-cols-3 gap-4  my-5 pt-8">
        {task.map((item) => (
          <TaskCard key={item.id} item={item}></TaskCard>
        ))}
      </div>
    </div>
  );
};

export default TaskPage;
