"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
const grpc = __importStar(require("@grpc/grpc-js"));
const grpc_1 = require("./grpc");
const todo_service_1 = require("./todo.service");
const constants_1 = require("../constants");
const server = new grpc.Server();
// Todo Services
server.addService(grpc_1.proto.todo.TodoService.service, {
    CreateTodo: todo_service_1.createTodoHandler,
    updateTodo: todo_service_1.updateTodoHandler,
});
server.bindAsync(`${constants_1.constants.HOST}:${constants_1.constants.PORT}`, grpc.ServerCredentials.createInsecure(), (err, port) => {
    if (err) {
        console.error(err);
        return;
    }
    server.start();
    console.log(`Server running at http://${constants_1.constants.HOST}:${constants_1.constants.PORT}`);
});
//# sourceMappingURL=index.js.map