import path from 'path';
import * as grpc from '@grpc/grpc-js';
import * as protoLoader from '@grpc/proto-loader';
import { ProtoGrpcType } from '../pb/todo';

// import { createPostHandler, deletePostHandler, findAllPostsHandler, findPostHandler, UpdatePostHandler } from './controllers/post.controller';

const options: protoLoader.Options = {
  keepCase: true,
  longs: String,
  enums: String,
  defaults: true,
  oneofs: true,
};

// const PORT = 3000;
const PROTO_FILE = '../proto/todo.proto';
const packageDef = protoLoader.loadSync(
  path.resolve(__dirname, PROTO_FILE),
  options
);

export const proto = grpc.loadPackageDefinition(
  packageDef
) as unknown as ProtoGrpcType;

// export const server = new grpc.Server();
