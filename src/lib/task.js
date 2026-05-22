import task from "../data/task.json";
export const getTask = async () => {
  return task;
};

export const postTask = async (newTask) => {
  newTask.id = task.length + 1; // Assign a new ID based on the current length of the task array
  task.push(newTask);
  return { ok: true, message: "Task created successfully", task: newTask };
};
