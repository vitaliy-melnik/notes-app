import { Module } from '@nestjs/common';
import { NotesController } from './notes.controller';
import { NotesService } from './notes.service';
import { NotesModule } from '../../modules/notes/notes.module';

@Module({
  imports: [NotesModule],
  controllers: [NotesController],
  providers: [NotesService],
})
export class NotesHttpModule {}
