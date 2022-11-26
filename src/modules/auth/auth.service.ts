import { HttpStatus, Injectable } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { comparePassword } from 'src/utils/compare-password';
import { encodePassword } from 'src/utils/encode-password';
import { BadRequestException } from 'src/utils/exception';
import { UserService } from '../user/user.service';
import { LoginRequest } from './dto/LoginRequest.dto';

@Injectable()
export class AuthService {
  constructor(
    private jwtService: JwtService,
    private userService: UserService,
  ) {}

  async login(data: LoginRequest): Promise<any> {
    const user = await this.userService.findOneBy({ email: data.email });

    if (!user)
      return new BadRequestException('Email or password is incorrect!');

    const isMatch = await comparePassword(user.password, data.password);

    if (!isMatch)
      return new BadRequestException('Email or password is incorrect!');

    const payload = {
      id: user.id,
      name: user.name,
      type: user.type,
    };

    return {
      user: { ...user, password: null },
      accessToken: this.jwtService.sign(payload),
    };
  }

  async register(user: any): Promise<any> {
    const userExisted = await this.userService.findOneBy({ email: user.email });

    if (userExisted) {
      return new BadRequestException(`User ${user.email} is existed`);
    }

    const passwordEncoded = await encodePassword(user.password);

    await this.userService.create({
      ...user,
      password: passwordEncoded,
    });

    return { status: HttpStatus.CREATED };
  }
}
