import TokenAdapter from '@adapters/TokenAdapter/contracts/TokenAdapter';
import JWTTokenAdapter from '@adapters/TokenAdapter/implementations/JWTTokenAdapter';

export default function TokenAdapterFactory(): TokenAdapter {
  const tokenProvider = new JWTTokenAdapter();

  return tokenProvider;
}
