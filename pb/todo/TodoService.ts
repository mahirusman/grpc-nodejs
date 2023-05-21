// Original file: proto/todo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateTodoRequest as _todo_CreateTodoRequest, CreateTodoRequest__Output as _todo_CreateTodoRequest__Output } from '../todo/CreateTodoRequest';
import type { createTodoResponse as _todo_createTodoResponse, createTodoResponse__Output as _todo_createTodoResponse__Output } from '../todo/createTodoResponse';
import type { updaredTodoRequest as _todo_updaredTodoRequest, updaredTodoRequest__Output as _todo_updaredTodoRequest__Output } from '../todo/updaredTodoRequest';

export interface TodoServiceClient extends grpc.Client {
  CreateTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  
  updateTodo(argument: _todo_updaredTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_updaredTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_updaredTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_updaredTodoRequest, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_updaredTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_updaredTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_updaredTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_updaredTodoRequest, callback: grpc.requestCallback<_todo_createTodoResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TodoServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateTodo: grpc.handleUnaryCall<_todo_CreateTodoRequest__Output, _todo_createTodoResponse>;
  
  updateTodo: grpc.handleUnaryCall<_todo_updaredTodoRequest__Output, _todo_createTodoResponse>;
  
}

export interface TodoServiceDefinition extends grpc.ServiceDefinition {
  CreateTodo: MethodDefinition<_todo_CreateTodoRequest, _todo_createTodoResponse, _todo_CreateTodoRequest__Output, _todo_createTodoResponse__Output>
  updateTodo: MethodDefinition<_todo_updaredTodoRequest, _todo_createTodoResponse, _todo_updaredTodoRequest__Output, _todo_createTodoResponse__Output>
}
