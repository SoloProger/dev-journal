import bcrypt from 'bcrypt';

export class HashService {
  public static async equal(
    field: string,
    hashedField: string
  ): Promise<boolean> {
    return await bcrypt.compare(field, hashedField);
  }

  public static async hash(password: string, sault = 10): Promise<string> {
    return await bcrypt.hash(password, sault);
  }
}
