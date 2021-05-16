export default interface TokenAdapter {
  encrypt(data: string | object): Promise<string>;
  decrypt(data: string): Promise<string | object>;
}
