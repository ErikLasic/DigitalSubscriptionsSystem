# -*- coding: utf-8 -*-
# Generated by the protocol buffer compiler.  DO NOT EDIT!
# NO CHECKED-IN PROTOBUF GENCODE
# source: revije.proto
# Protobuf Python Version: 5.29.0
"""Generated protocol buffer code."""
from google.protobuf import descriptor as _descriptor
from google.protobuf import descriptor_pool as _descriptor_pool
from google.protobuf import runtime_version as _runtime_version
from google.protobuf import symbol_database as _symbol_database
from google.protobuf.internal import builder as _builder
_runtime_version.ValidateProtobufRuntimeVersion(
    _runtime_version.Domain.PUBLIC,
    5,
    29,
    0,
    '',
    'revije.proto'
)
# @@protoc_insertion_point(imports)

_sym_db = _symbol_database.Default()




DESCRIPTOR = _descriptor_pool.Default().AddSerializedFile(b'\n\x0crevije.proto\x12\x06revije\"2\n\x13\x43reateRevijaRequest\x12\r\n\x05naziv\x18\x01 \x01(\t\x12\x0c\n\x04opis\x18\x02 \x01(\t\"\x1e\n\x10GetRevijaRequest\x12\n\n\x02id\x18\x01 \x01(\t\">\n\x13UpdateRevijaRequest\x12\n\n\x02id\x18\x01 \x01(\t\x12\r\n\x05naziv\x18\x02 \x01(\t\x12\x0c\n\x04opis\x18\x03 \x01(\t\"!\n\x13\x44\x65leteRevijaRequest\x12\n\n\x02id\x18\x01 \x01(\t\"1\n\x06Revija\x12\n\n\x02id\x18\x01 \x01(\t\x12\r\n\x05naziv\x18\x02 \x01(\t\x12\x0c\n\x04opis\x18\x03 \x01(\t\"!\n\x0e\x44\x65leteResponse\x12\x0f\n\x07success\x18\x01 \x01(\x08\x32\x85\x02\n\rRevijeService\x12;\n\x0c\x43reateRevija\x12\x1b.revije.CreateRevijaRequest\x1a\x0e.revije.Revija\x12\x35\n\tGetRevija\x12\x18.revije.GetRevijaRequest\x1a\x0e.revije.Revija\x12;\n\x0cUpdateRevija\x12\x1b.revije.UpdateRevijaRequest\x1a\x0e.revije.Revija\x12\x43\n\x0c\x44\x65leteRevija\x12\x1b.revije.DeleteRevijaRequest\x1a\x16.revije.DeleteResponseb\x06proto3')

_globals = globals()
_builder.BuildMessageAndEnumDescriptors(DESCRIPTOR, _globals)
_builder.BuildTopDescriptorsAndMessages(DESCRIPTOR, 'revije_pb2', _globals)
if not _descriptor._USE_C_DESCRIPTORS:
  DESCRIPTOR._loaded_options = None
  _globals['_CREATEREVIJAREQUEST']._serialized_start=24
  _globals['_CREATEREVIJAREQUEST']._serialized_end=74
  _globals['_GETREVIJAREQUEST']._serialized_start=76
  _globals['_GETREVIJAREQUEST']._serialized_end=106
  _globals['_UPDATEREVIJAREQUEST']._serialized_start=108
  _globals['_UPDATEREVIJAREQUEST']._serialized_end=170
  _globals['_DELETEREVIJAREQUEST']._serialized_start=172
  _globals['_DELETEREVIJAREQUEST']._serialized_end=205
  _globals['_REVIJA']._serialized_start=207
  _globals['_REVIJA']._serialized_end=256
  _globals['_DELETERESPONSE']._serialized_start=258
  _globals['_DELETERESPONSE']._serialized_end=291
  _globals['_REVIJESERVICE']._serialized_start=294
  _globals['_REVIJESERVICE']._serialized_end=555
# @@protoc_insertion_point(module_scope)
