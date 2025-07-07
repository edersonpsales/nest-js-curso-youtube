import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthResponseDto } from './auth.dto';
import { compareSync as bcryptCompareSync } from 'bcrypt';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class AuthService {
  private jwtExpirationTimeInSeconds: number;

  constructor(
    private readonly usersService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.jwtExpirationTimeInSeconds =
      +this.configService.get<number>('JWT_EXPIRATION_TIME') || 3600; // Default to 1 hour if not set
  }

  signIn(username: string, password: string): AuthResponseDto {
    const foundUser = this.usersService.findByUsername(username);

    if (!foundUser || !bcryptCompareSync(password, foundUser.password)) {
      throw new UnauthorizedException();
    }
    const payload = {
      sub: foundUser.id,
      username: foundUser.username,
    };

    const token = this.jwtService.sign(payload);

    return {
      token: token,
      expireIn: this.jwtExpirationTimeInSeconds,
    };
  }
}
