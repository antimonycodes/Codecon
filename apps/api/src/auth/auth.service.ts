import { Injectable } from '@nestjs/common';
import { DatabaseService } from 'src/database/database.service';
import { SignupDto } from 'src/dto/auth.dto';

@Injectable()
export class AuthService {
  constructor(private databaseService: DatabaseService) {}
  signin(dto: SignupDto) {
    console.log(dto);
    console.log('sign up route');
  }
}
