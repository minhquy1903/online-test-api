import * as bcrypt from 'bcrypt';

export const comparePassword = async (
  hashPassword: string,
  password: string,
): Promise<boolean> => {
  return await bcrypt.compare(password, hashPassword);
};
