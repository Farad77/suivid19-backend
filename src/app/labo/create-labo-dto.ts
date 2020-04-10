import { CreateUserDto } from '../create-user-dto';

export class CreateLaboDto extends CreateUserDto {
  company: string;
  
  constructor() {
    super();

    this.company = '';
  }
}
