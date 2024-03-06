import { Prop, Schema } from '@nestjs/mongoose';
import { HydratedDocument } from 'mongoose';
import { SchemaFactoryHelper } from 'src/commons/helpers/schema-factory.helper';
import { IUser } from 'src/users/interfaces/user';

export type UserDocument = HydratedDocument<User>;

@Schema()
export class User implements IUser {
  @Prop()
  id: string;

  @Prop()
  username: string;

  @Prop()
  password: string;

  getId(): string {
    return this.id;
  }
  getUsername(): string {
    return this.username;
  }
  getPassword(): string {
    return this.password;
  }
}

export const UserSchema =
  SchemaFactoryHelper.createSchemaForClassWithInstanceMethods(User);
