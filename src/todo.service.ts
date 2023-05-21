import * as grpc from "@grpc/grpc-js";
import { createTodoResponse } from "../pb/todo/CreateTodoResponse";
import { CreateTodoRequest } from "../pb/todo/CreateTodoRequest";

import { updaredTodoRequest } from "../pb/todo/updaredTodoRequest";

import { GreatManyTimeRequest } from "../pb/todo/GreatManyTimeRequest";
import { GreatManytimResponse } from "../pb/todo/GreatManytimResponse";

const todos: any = [];

export const createTodoHandler = async (
  req: grpc.ServerUnaryCall<CreateTodoRequest, createTodoResponse>,
  res: grpc.sendUnaryData<createTodoResponse>
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
  req: grpc.ServerUnaryCall<updaredTodoRequest, updaredTodoRequest>,
  res: grpc.sendUnaryData<createTodoResponse>
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

export const GreateManyTime = async (req: any, res: any) => {
  try {
    console.log("req.request", req);

    req.write({ name: "usman" });

    req.end();
  } catch (error) {
    console.log("err", error);
    // res({
    //   code: grpc.status.INTERNAL,
    //   message: err.message,
    // });
  }
};
