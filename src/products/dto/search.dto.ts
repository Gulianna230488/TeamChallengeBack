import { IsString } from 'class-validator';

export class SearchDto {
  @IsString()
  q: string;

  @IsString()
  category: string;
}