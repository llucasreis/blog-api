import HashAdapter from '@adapters/HashAdapter/contracts/HashAdapter';
import BcryptHashAdapter from '@adapters/HashAdapter/implementations/BcryptHashAdapter';

export default function HashAdapterFactory(): HashAdapter {
  const hashProvider = new BcryptHashAdapter();

  return hashProvider;
}
