import * as grpc from "@grpc/grpc-js";
import { CreateTodoRequest } from "../pb/todo/CreateTodoRequest";
import { CreateTodoResponse } from "../pb/todo/CreateTodoResponse";

const todos = [];

export const createTodoHandler = async (
  req: grpc.ServerUnaryCall<CreateTodoRequest, CreateTodoResponse>,
  res: grpc.sendUnaryData<CreateTodoResponse>
) => {
  try {
    const todo = {
      id: todos.length + 1,
      name: req.request.name,
    };
    todos.push(todo);
    res(null, {
      todo: todo,
    });
  } catch (err: any) {
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};
