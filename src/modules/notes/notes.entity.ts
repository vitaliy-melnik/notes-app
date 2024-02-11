import { Column, CreateDateColumn, Entity } from 'typeorm';
import { ApiProperty } from '@nestjs/swagger';

@Entity('notes', { schema: 'public' })
export class Note {
  @Column('uuid', {
    primary: true,
    name: 'id',
    generated: 'uuid',
    default: () => 'uuid_generate_v4()',
  })
  @ApiProperty()
  id: string;

  @Column('character varying', { name: 'title', length: 100 })
  @ApiProperty()
  title: string;

  @Column('character varying', { name: 'description', length: 100 })
  @ApiProperty()
  description: string;

  @CreateDateColumn({
    type: 'timestamp',
    name: 'timestamp',
    default: () => 'CURRENT_TIMESTAMP(6)',
  })
  @ApiProperty()
  timestamp: Date;
}
