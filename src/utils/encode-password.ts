import * as bcrypt from 'bcrypt';

export const encodePassword = async (password: string): Promise<string> => {
  const SALT = bcrypt.genSaltSync();
  return bcrypt.hash(password, SALT);
};
