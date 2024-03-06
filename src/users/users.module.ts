import { Module } from '@nestjs/common';
import { UsersService } from './services/users.service';
import { UserMongoRepository } from './repositories/mongo/user-mongo.repository';
import { User, UserSchema } from './repositories/mongo/schemas/user.schema';
import { MongooseModule } from '@nestjs/mongoose';
import { UserRepository } from './repositories/user.repository';

@Module({
  imports: [
    MongooseModule.forFeature([{ name: User.name, schema: UserSchema }]),
  ],
  providers: [
    UsersService,
    {
      provide: UserRepository,
      useClass: UserMongoRepository,
    },
  ],
  exports: [UsersService],
})
export class UsersModule {}
