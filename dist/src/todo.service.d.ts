import * as grpc from '@grpc/grpc-js';
import { CreateTodoRequest } from '../pb/todo/CreateTodoRequest';
import { CreateTodoResponse } from '../pb/todo/CreateTodoResponse';
export declare const createTodoHandler: (req: grpc.ServerUnaryCall<CreateTodoRequest, CreateTodoResponse>, res: grpc.sendUnaryData<CreateTodoResponse>) => Promise<void>;
