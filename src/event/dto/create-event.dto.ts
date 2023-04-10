import { IsString, IsNotEmpty } from 'class-validator';
export class CreateEventDto {
  @IsString()
  @IsNotEmpty()
  title: string;
  startDate: Date;
  endDate: Date;
}
