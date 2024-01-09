// package: ves.io.schema
// file: ves.io/schema/errors.proto

import * as jspb from "google-protobuf";
import * as google_protobuf_any_pb from "google-protobuf/google/protobuf/any_pb";

export class ErrorType extends jspb.Message {
  getCode(): ErrorCodeMap[keyof ErrorCodeMap];
  setCode(value: ErrorCodeMap[keyof ErrorCodeMap]): void;

  getMessage(): string;
  setMessage(value: string): void;

  hasErrorObj(): boolean;
  clearErrorObj(): void;
  getErrorObj(): google_protobuf_any_pb.Any | undefined;
  setErrorObj(value?: google_protobuf_any_pb.Any): void;

  serializeBinary(): Uint8Array;
  toObject(includeInstance?: boolean): ErrorType.AsObject;
  static toObject(includeInstance: boolean, msg: ErrorType): ErrorType.AsObject;
  static extensions: {[key: number]: jspb.ExtensionFieldInfo<jspb.Message>};
  static extensionsBinary: {[key: number]: jspb.ExtensionFieldBinaryInfo<jspb.Message>};
  static serializeBinaryToWriter(message: ErrorType, writer: jspb.BinaryWriter): void;
  static deserializeBinary(bytes: Uint8Array): ErrorType;
  static deserializeBinaryFromReader(message: ErrorType, reader: jspb.BinaryReader): ErrorType;
}

export namespace ErrorType {
  export type AsObject = {
    code: ErrorCodeMap[keyof ErrorCodeMap],
    message: string,
    errorObj?: google_protobuf_any_pb.Any.AsObject,
  }
}

export interface ErrorCodeMap {
  EOK: 0;
  EPERMS: 1;
  EBADINPUT: 2;
  ENOTFOUND: 3;
  EEXISTS: 4;
  EUNKNOWN: 5;
  ESERIALIZE: 6;
  EINTERNAL: 7;
  EPARTIAL: 8;
}

export const ErrorCode: ErrorCodeMap;

