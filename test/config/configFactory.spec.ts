import ConfigFactory from '../../src/config/factory/configFactory';
import ApplicationTypesEnum from '../../src/models/config/applicationTypesEnum';

const factory = new ConfigFactory();

const mockConfig = {
  production: false,
  userApiBaseUrl: 'userurl',
  fixApiBaseUrl: 'fixurl',
  getUserAccountRoute: 'userAccountRoute',
  getUserProfileRoute: 'userProfileRoute',
  getUserRatingsRoute: 'userRatingsRoute',
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

  it('should return the user accounr route', () => {
    expect(factory.config.getUserAccountRoute()).toBe('userAccountRoute');
  });

  it('should return the user profile route', () => {
    expect(factory.config.getUserProfileRoute()).toBe('userProfileRoute');
  });

  it('should return the user ratings route', () => {
    expect(factory.config.getUserRatingRoute()).toBe('userRatingsRoute');
  });
});
