"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.updateTodoHandler = exports.createTodoHandler = void 0;
const todos = [];
const createTodoHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('req', req.request);
        const todo = {
            id: todos.length + 1,
            name: req.request.name,
        };
        console.log('todo', todo);
        todos.push(todo);
        res(null, {
            todo: todos,
        });
    }
    catch (err) {
        console.log('err', err);
        // res({
        //   code: grpc.status.INTERNAL,
        //   message: err.message,
        // });
    }
});
exports.createTodoHandler = createTodoHandler;
const updateTodoHandler = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        console.log('update is here', req.request);
        const todo = {
            id: todos.length + 1,
            name: req.request.name,
        };
        console.log('todo', todo);
        todos.push(todo);
        res(null, {
            todo: todos,
        });
    }
    catch (err) {
        console.log('err', err);
        // res({
        //   code: grpc.status.INTERNAL,
        //   message: err.message,
        // });
    }
});
exports.updateTodoHandler = updateTodoHandler;
//# sourceMappingURL=todo.service.js.map