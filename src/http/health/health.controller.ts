import { Controller, Get, HttpStatus } from '@nestjs/common';
import { ApiOkResponse, ApiOperation, ApiTags } from '@nestjs/swagger';

@ApiTags('Service Endpoints')
@Controller()
export class HealthController {
  @Get('/healthz')
  @ApiOperation({ summary: 'Always returns HTTP 200' })
  @ApiOkResponse({
    description: 'Always returns HTTP 200',
  })
  async check(): Promise<any> {
    return { status: HttpStatus.OK };
  }
}
