export class UpdateUserDto {
  constructor(
    public lastName: string = '',
    public firstName: string = '',
    public email: string = '',
    public password: string = '',
    public address: string = '',
    public city: string = '',
    public postalCode: number = null,
    public phone: string = ''
  ) { }
}
