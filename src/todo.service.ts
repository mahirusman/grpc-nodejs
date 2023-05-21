import * as grpc from "@grpc/grpc-js";
import { CreateTodoResponse } from "../pb/todo/CreateTodoResponse";
import { CreateTodoRequest } from "../pb/todo/CreateTodoRequest";

import { UpdaredTodoRequest } from "../pb/todo/UpdaredTodoRequest";

const todos: any = [];

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
      responseinArray: todos,
    });
  } catch (err: any) {
    console.log("err", err);
    res({
      code: grpc.status.INTERNAL,
      message: err.message,
    });
  }
};

export const updateTodoHandler = async (
  req: grpc.ServerUnaryCall<UpdaredTodoRequest, UpdaredTodoRequest>,
  res: grpc.sendUnaryData<CreateTodoResponse>
) => {
  try {
    const matchIndex = todos.findIndex(
      (data: any) => data.id == req.request?.id
    );

    console.log("matchIndex", matchIndex);
    console.log("todos[matchIndex]", todos);

    todos[matchIndex] = {
      id: req.request?.id,
      name: req.request.name,
    };

    console.log("todos[after]", todos);

    res(null, {
      responseinArray: todos,
    });
  } catch (err: any) {
    console.log("err", err);
    // res({
    //   code: grpc.status.INTERNAL,
    //   message: err.message,
    // });
  }
};
