// Original file: proto/todo.proto

import type * as grpc from '@grpc/grpc-js'
import type { MethodDefinition } from '@grpc/proto-loader'
import type { CreateTodoRequest as _todo_CreateTodoRequest, CreateTodoRequest__Output as _todo_CreateTodoRequest__Output } from '../todo/CreateTodoRequest';
import type { Todo as _todo_Todo, Todo__Output as _todo_Todo__Output } from '../todo/Todo';

export interface TodoServiceClient extends grpc.Client {
  CreateTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  CreateTodo(argument: _todo_CreateTodoRequest, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, metadata: grpc.Metadata, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, options: grpc.CallOptions, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  createTodo(argument: _todo_CreateTodoRequest, callback: grpc.requestCallback<_todo_Todo__Output>): grpc.ClientUnaryCall;
  
}

export interface TodoServiceHandlers extends grpc.UntypedServiceImplementation {
  CreateTodo: grpc.handleUnaryCall<_todo_CreateTodoRequest__Output, _todo_Todo>;
  
}

export interface TodoServiceDefinition extends grpc.ServiceDefinition {
  CreateTodo: MethodDefinition<_todo_CreateTodoRequest, _todo_Todo, _todo_CreateTodoRequest__Output, _todo_Todo__Output>
}
