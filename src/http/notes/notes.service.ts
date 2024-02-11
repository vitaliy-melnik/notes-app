import { Injectable, InternalServerErrorException } from '@nestjs/common';
import { DeleteResult } from 'typeorm';
import { NotesRepository } from '../../modules/notes/notes.repository';
import { NoteReqDto } from '../../modules/notes/dto/NoteReqDto';
import { Note } from '../../modules/notes/notes.entity';

@Injectable()
export class NotesService {
  constructor(private readonly notesRepository: NotesRepository) {}

  public async list(noteParams?: Partial<NoteReqDto>): Promise<Note[]> {
    try {
      return this.notesRepository.list(noteParams);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
  public async findOne(noteId: string): Promise<Note> {
    try {
      return this.notesRepository.findById(noteId);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  public async create(note: NoteReqDto): Promise<Note> {
    try {
      return this.notesRepository.create(note);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  public async update(
    noteId: string,
    noteParams: Partial<NoteReqDto>,
  ): Promise<Note> {
    try {
      await this.notesRepository.update(noteId, noteParams);
      return this.notesRepository.findById(noteId);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }

  async delete(noteId: string): Promise<DeleteResult> {
    try {
      return this.notesRepository.delete(noteId);
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
