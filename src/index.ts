import * as grpc from "@grpc/grpc-js";
import { TodoServiceHandlers } from "../pb/todo/TodoService";
import { proto } from "./grpc";
import { createTodoHandler } from "./todo.service";

const server = new grpc.Server();
const PORT = 3000;

// Todo Services
server.addService(proto.todo.TodoService.service, {
  CreateTodo: createTodoHandler,
} as TodoServiceHandlers);

server.bindAsync(
  `0.0.0.0:${PORT}`,
  grpc.ServerCredentials.createInsecure(),
  (err, port) => {
    if (err) {
      console.error(err);
      return;
    }
    server.start();
    console.log(`🚀 Server listening on ${port}`);
  }
);
