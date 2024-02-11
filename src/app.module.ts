import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/common/database';
import { ConfigModule } from '@nestjs/config';
import databaseConfig from './modules/common/config/database.config';
import { HealthModule } from './http/health/health.module';
import { AuthHttpModule } from './http/auth/auth.http.module';
import { AuthModule } from './modules/auth/auth.module';
import { NotesModule } from './modules/notes/notes.module';
import { NotesHttpModule } from './http/notes/notes.http.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [databaseConfig],
    }),
    DatabaseModule,
    HealthModule,
    AuthHttpModule,
    AuthModule,
    NotesHttpModule,
    NotesModule,
  ],
  controllers: [],
  providers: [],
})
export class AppModule {}
