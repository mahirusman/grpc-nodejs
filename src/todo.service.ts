import * as grpc from "@grpc/grpc-js";
import { CreateTodoRequest } from "../pb/todo/CreateTodoRequest";
import { CreateTodoResponse } from "../pb/todo/CreateTodoResponse";

const todos: any = [];

export const createTodoHandler = async (
  req: grpc.ServerUnaryCall<CreateTodoRequest, CreateTodoResponse>,
  res: grpc.sendUnaryData<CreateTodoResponse>
) => {
  try {
    console.log("req", req.request);
    const todo = {
      id: todos.length + 1,
      name: req.request.name,
    };
    console.log("todo", todo);
    todos.push(todo);
    res(null, {
      todo: todos,
    });
  } catch (err: any) {
    console.log("err", err);
    // res({
    //   code: grpc.status.INTERNAL,
    //   message: err.message,
    // });
  }
};

export const updateTodoHandler = async (
  req: grpc.ServerUnaryCall<CreateTodoRequest, CreateTodoResponse>,
  res: grpc.sendUnaryData<CreateTodoResponse>
) => {
  try {
    console.log("update is here", req.request);
    const todo = {
      id: todos.length + 1,
      name: req.request.name,
    };
    console.log("todo", todo);
    todos.push(todo);
    res(null, {
      todo: todos,
    });
  } catch (err: any) {
    console.log("err", err);
    // res({
    //   code: grpc.status.INTERNAL,
    //   message: err.message,
    // });
  }
};
