import { UserRepository } from '../../user/user.repository';
import { ResponseService } from '../../../core/services/response.service';
import { TokenService } from './token.service';
import { HashService } from './hash.service';
import { User } from '../../../database/entities/user';

export class AuthService {
  private readonly repository: UserRepository;

  constructor() {
    this.repository = new UserRepository();
  }

  public async registration(userData: any): Promise<string> {
    const { email, password, name } = userData;

    const candidate = await this.repository.one({ email });

    ResponseService.check(candidate, 'Пользователь существует');

    const hashedPassword = await HashService.hash(password);

    const login = 'test_user';

    await this.repository.add({
      email,
      password: hashedPassword,
      name,
      login,
    });

    const token = TokenService.generateToken({ email, name, login });

    return token;
  }

  public async login(login: string, password: string): Promise<string> {
    const user = (await this.repository.one({ login })) as User;

    ResponseService.isExist(user, 'Такой пользователь не найден');

    const checkPassword = await HashService.equal(password, user.password);

    ResponseService.isExist(checkPassword, 'Неверный пароль');

    const token = TokenService.generateToken({
      email: user.email,
      name: user.name,
      login: user.login,
    });

    return token;
  }
}
