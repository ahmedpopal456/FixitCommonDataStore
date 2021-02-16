import ConfigFactory from '../../src/config/factory/configFactory';
import ApplicationTypesEnum from '../../src/models/config/applicationTypesEnum';

const factory = new ConfigFactory();

const mockConfig = {
  production: false,
  userApiBaseUrl: 'userurl',
  fixApiBaseUrl: 'fixurl',
};

describe('config factory', () => {
  it('should create a config provider', () => {
    factory.init(ApplicationTypesEnum.MOBILE, mockConfig);
    expect(factory.config.rawConfig).toMatchObject(mockConfig);
  });

  it('should return the production environment', () => {
    expect(factory.config.getIsProduction()).toBe(false);
  });

  it('should return the user api url', () => {
    expect(factory.config.getUserApiBaseUrl()).toBe('userurl');
  });

  it('should return the fix api url', () => {
    expect(factory.config.getFixApiBaseUrl()).toBe('fixurl');
  });
});
