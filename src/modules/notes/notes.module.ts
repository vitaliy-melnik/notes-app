import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { NotesRepository } from './notes.repository';
import { Note } from './notes.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Note])],
  providers: [NotesRepository],
  exports: [NotesRepository],
})
export class NotesModule {}
