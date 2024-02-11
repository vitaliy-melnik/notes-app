import {
  Body,
  Controller,
  Delete,
  Get,
  InternalServerErrorException,
  Param,
  Post,
  Put,
  Res,
  UseGuards,
} from '@nestjs/common';
import { JwtAuthGuard } from '../../modules/auth/guards/jwt-auth.guard';
import { NoteReqDto } from '../../modules/notes/dto/NoteReqDto';
import { NotesService } from './notes.service';
import { Note } from '../../modules/notes/notes.entity';
import {
  ApiBearerAuth,
  ApiCreatedResponse,
  ApiOkResponse,
  ApiOperation,
  ApiTags,
  ApiUnauthorizedResponse,
} from '@nestjs/swagger';
import { UpdateNoteReqDto } from '../../modules/notes/dto/UpdateNoteReqDto';

@ApiTags('Notes Endpoints')
@ApiBearerAuth()
@UseGuards(JwtAuthGuard)
@Controller({ version: '1', path: 'notes' })
export class NotesController {
  constructor(private readonly notesService: NotesService) {}

  @Get('/')
  @ApiOkResponse({ description: 'Get all notes', type: Note, isArray: true })
  @ApiOperation({
    summary: 'Get all notes',
  })
  public async list(): Promise<Note[]> {
    return this.notesService.list();
  }

  @Get('/:id')
  @ApiOkResponse({ description: 'Get note by id', type: Note })
  @ApiOperation({
    summary: 'Get note by id',
  })
  public async findOne(@Param('id') noteId: string): Promise<Note> {
    return this.notesService.findOne(noteId);
  }

  @Post()
  @ApiOperation({ summary: 'Create a new note' })
  @ApiCreatedResponse({
    description: 'A new note',
    type: Note,
  })
  @ApiUnauthorizedResponse({
    description: 'Access denied if not login',
  })
  public async create(@Body() accountParams: NoteReqDto): Promise<Note> {
    return this.notesService.create(accountParams);
  }

  @Put('/:id')
  @ApiOkResponse({ description: 'Update note', type: Note })
  @ApiOperation({
    summary: 'Update note',
  })
  public async update(
    @Param('id') accountId: string,
    @Body() accountParams: UpdateNoteReqDto,
  ): Promise<Note> {
    return this.notesService.update(accountId, accountParams);
  }

  @Delete('/:id')
  @ApiOkResponse({ description: 'Delete note' })
  @ApiOperation({
    summary: 'Delete note',
  })
  async delete(@Res() response: Response, @Param('id') accountId: string) {
    try {
      await this.notesService.delete(accountId);
      return response.json();
    } catch (err) {
      throw new InternalServerErrorException();
    }
  }
}
