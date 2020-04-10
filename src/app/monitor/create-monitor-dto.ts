import { CreateUserDto } from '../create-user-dto';

export class CreateMonitorDto extends CreateUserDto {
  company: string;

  constructor() {
    super();

    this.company = '';
  }
}
