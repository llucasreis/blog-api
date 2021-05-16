export default interface HashAdapter {
  generateHash(payload: string): Promise<string>;
  compareHash(payload: string, hashed: string): Promise<boolean>;
}
