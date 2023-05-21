// Original file: proto/todo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateTodoRequest as _todo_CreateTodoRequest, CreateTodoRequest__Output as _todo_CreateTodoRequest__Output } from '../todo/CreateTodoRequest';
import type { CreateTodoResponse as _todo_CreateTodoResponse, CreateTodoResponse__Output as _todo_CreateTodoResponse__Output } from '../todo/CreateTodoResponse';
import type { UpdaredTodoRequest as _todo_UpdaredTodoRequest, UpdaredTodoRequest__Output as _todo_UpdaredTodoRequest__Output } from '../todo/UpdaredTodoRequest';

export interface TodoServiceClient extends grpc.Client {
  CreateTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  
  updateTodo(argument: _todo_UpdaredTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_UpdaredTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_UpdaredTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_UpdaredTodoRequest, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_UpdaredTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_UpdaredTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_UpdaredTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_UpdaredTodoRequest, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TodoServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateTodo: grpc.handleUnaryCall<_todo_CreateTodoRequest__Output, _todo_CreateTodoResponse>;
  
  updateTodo: grpc.handleUnaryCall<_todo_UpdaredTodoRequest__Output, _todo_CreateTodoResponse>;
  
}

export interface TodoServiceDefinition extends grpc.ServiceDefinition {
  CreateTodo: MethodDefinition<_todo_CreateTodoRequest, _todo_CreateTodoResponse, _todo_CreateTodoRequest__Output, _todo_CreateTodoResponse__Output>
  updateTodo: MethodDefinition<_todo_UpdaredTodoRequest, _todo_CreateTodoResponse, _todo_UpdaredTodoRequest__Output, _todo_CreateTodoResponse__Output>
}
