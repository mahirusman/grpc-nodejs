const grpc = require("@grpc/grpc-js");
import { constants } from "../constants";
import { proto } from "./grpc";




// Initialize the client
const client = new proto.todo.TodoService(
  `${constants.HOST}:${constants.PORT}`,
  grpc.credentials.createInsecure()
);

// Send a request to the server
client.CreateTodo({ name: "how are you sir" }, (err: any, response: any) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('here is goes',response);
});

// Send a request to the server
client.updateTodo({ id:1 }, (err: any, response: any) => {
  if (err) {
    console.error(err);
    return;
  }
  console.log('updateTodo result',response);
});



