import * as grpc from "@grpc/grpc-js";
import { TodoServiceHandlers } from "../pb/todo/TodoService";
import { proto } from "./grpc";
import {
  createTodoHandler,
  updateTodoHandler,
  GreateManyTime,
} from "./todo.service";
import { constants } from "../constants";

const server = new grpc.Server();

// Todo Services
server.addService(proto.todo.TodoService.service, {
  CreateTodo: createTodoHandler,
  updateTodo: updateTodoHandler,
  greateManyTime: GreateManyTime,
} as any);

server.bindAsync(
  `${constants.HOST}:${constants.PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    server.start();
    console.log(`Server running at http://${constants.HOST}:${constants.PORT}`);
  }
);
