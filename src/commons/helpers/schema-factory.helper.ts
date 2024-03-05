import { SchemaFactory } from '@nestjs/mongoose';
import mongoose from 'mongoose';
import { Type } from '@nestjs/common';

export class SchemaFactoryHelper {
  static createSchemaForClassWithInstanceMethods(
    target: Type<unknown>,
  ): mongoose.Schema<any> {
    const schema = SchemaFactory.createForClass(target);
    const proto = target.prototype;
    for (const name of Object.getOwnPropertyNames(proto)) {
      if (name != 'constructor' && typeof proto[name] === 'function') {
        schema.methods[name] = proto[name];
      }
    }
    return schema;
  }
}
