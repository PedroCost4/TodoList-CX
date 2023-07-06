import { Prisma, Task } from "@prisma/client";
import CreateTaskRepository from "../repositories/create";

class createTaskUseCase {
  static stringToDate(stringDate: string | null | undefined ): Date | null {
    if (stringDate === "" || stringDate === undefined || stringDate === null) {
      return null;
    }
    const date = new Date(stringDate);
    return date;
  }

  static async execute({ title, content, completionDate, status, authorId, collectionId }: Prisma.TaskUncheckedCreateInput) {
    const task = await CreateTaskRepository.create({
      title,
      content,
      status,
      completionDate,
      authorId,
      collectionId,
    });
    return task;
  }
}

export default createTaskUseCase;
