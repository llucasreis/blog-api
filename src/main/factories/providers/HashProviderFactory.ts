import HashProvider from 'providers/HashProvider/contracts/HashProvider';
import BCryptHashProvider from 'providers/HashProvider/implementations/BcryptHashProvider';

export default function HashProviderFactory(): HashProvider {
  const hashProvider = new BCryptHashProvider();

  return hashProvider;
}
