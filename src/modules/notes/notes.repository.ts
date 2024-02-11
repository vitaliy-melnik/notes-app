import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { DeleteResult, InsertResult, Repository, UpdateResult } from 'typeorm';
import { NoteReqDto } from './dto/NoteReqDto';
import { Note } from './notes.entity';

@Injectable()
export class NotesRepository {
  constructor(
    @InjectRepository(Note)
    private readonly repository: Repository<Note>,
  ) {}

  public async findById(id: string): Promise<Note> {
    return this.repository.findOneByOrFail({ id });
  }

  public async list(params?: Partial<Note>): Promise<Note[]> {
    return this.repository.findBy(params);
  }

  public async create(accountParams: Partial<NoteReqDto>): Promise<Note> {
    const note = this.repository.manager.create(Note, accountParams);
    await this.repository.insert(note);
    return note;
  }

  public async update(
    id: string,
    accountParams: Partial<NoteReqDto>,
  ): Promise<UpdateResult> {
    return this.repository.update({ id }, accountParams);
  }

  public async delete(id: string): Promise<DeleteResult> {
    return this.repository.delete({ id });
  }
}
