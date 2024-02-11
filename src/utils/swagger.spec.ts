import { INestApplication } from '@nestjs/common';
import { SwaggerModule } from '@nestjs/swagger';
import { initializeSwagger } from './swagger';

describe('initializeSwagger()', () => {
  it('should setup the Swagger Documentation', () => {
    jest.spyOn(SwaggerModule, 'createDocument').mockReturnThis();
    jest.spyOn(SwaggerModule, 'setup').mockReturnThis();
    initializeSwagger({} as INestApplication);
    expect(SwaggerModule.createDocument).toBeCalled();
    expect(SwaggerModule.setup).toBeCalled();
  });
});
