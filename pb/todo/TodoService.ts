// Original file: proto/todo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateTodoRequest as _todo_CreateTodoRequest, CreateTodoRequest__Output as _todo_CreateTodoRequest__Output } from '../todo/CreateTodoRequest';
import type { CreateTodoResponse as _todo_CreateTodoResponse, CreateTodoResponse__Output as _todo_CreateTodoResponse__Output } from '../todo/CreateTodoResponse';
import type { array as _todo_array, array__Output as _todo_array__Output } from '../todo/array';
import type { updaredTodoRequest as _todo_updaredTodoRequest, updaredTodoRequest__Output as _todo_updaredTodoRequest__Output } from '../todo/updaredTodoRequest';

export interface TodoServiceClient extends grpc.Client {
  CreateTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_array__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_array__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_array__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, callback: grpc.requestCallback<_todo_array__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_array__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_array__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_array__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, callback: grpc.requestCallback<_todo_array__Output>): grpc.ClientUnaryCall;
  
  updateTodo(argument: _todo_updaredTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_updaredTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_updaredTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_updaredTodoRequest, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_updaredTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_updaredTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_updaredTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  updateTodo(argument: _todo_updaredTodoRequest, callback: grpc.requestCallback<_todo_CreateTodoResponse__Output>): grpc.ClientUnaryCall;
  
}

export interface TodoServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateTodo: grpc.handleUnaryCall<_todo_CreateTodoRequest__Output, _todo_array>;
  
  updateTodo: grpc.handleUnaryCall<_todo_updaredTodoRequest__Output, _todo_CreateTodoResponse>;
  
}

export interface TodoServiceDefinition extends grpc.ServiceDefinition {
  CreateTodo: MethodDefinition<_todo_CreateTodoRequest, _todo_array, _todo_CreateTodoRequest__Output, _todo_array__Output>
  updateTodo: MethodDefinition<_todo_updaredTodoRequest, _todo_CreateTodoResponse, _todo_updaredTodoRequest__Output, _todo_CreateTodoResponse__Output>
}
