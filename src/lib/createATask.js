import { revalidatePath } from "next/cache";
import { postTask } from "./task";

export const createATask = async (formData) => {
  "use server";
  //   const title = formData.get("title");
  //   const description = formData.get("description");
  //   const priority = formData.get("priority");
  //   const status = formData.get("status");
  //   const assigneeTo = formData.get("assigneeTo");
  //   const newTask = {
  //     title,
  //     description,
  //     priority,
  //     status,
  //     assigneeTo,
  //   };

  const newTask = Object.fromEntries(formData.entries());

  console.log("Creating a task with title:", newTask);
  const res = await postTask(newTask);
  if (res.ok) {
    revalidatePath("/task");
  }
  return res;
};
