import ConfigFactory from '../../src/config/factory/configFactory';
import ApplicationTypesEnum from '../../src/models/config/applicationTypesEnum';
import { ConfigModel } from '../../src/models/config/configModel';

const factory = new ConfigFactory();

const mockConfig: ConfigModel = {
  production: false,
  userApiBaseUrl: 'userurl',
  fixApiBaseUrl: 'fixurl',
  mdmBaseApiUrl: 'mdmBaseApiUrl',
  addressApiBaseUrl: '',
  chatApiUrl: '',
  chatTriggerUrl: '',
  instrumentationKey: '',
  notificationApiUrl: ''

};

describe('config factory', () => {
  it('should create a config provider', () => {
    factory.init(ApplicationTypesEnum.MOBILE, mockConfig);
    expect(factory.config.rawConfig).toMatchObject(mockConfig);
  });

  it('should return the production environment', () => {
    expect(factory.config.isProduction).toBe(false);
  });

  it('should return the user api url', () => {
    expect(factory.config.userApiBaseUrl).toBe('userurl');
  });

  it('should return the fix api url', () => {
    expect(factory.config.fixApiBaseUrl).toBe('fixurl');
  });

});
