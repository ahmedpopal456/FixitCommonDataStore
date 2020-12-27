import ApplicationTypesEnum from '../../models/config/applicationTypesEnum';
import { Config } from '../../models/config/config';
import MobileConfigProvider from '../providers/mobileConfigProvider';

export default class ConfigFactory {
  private configProvider!: MobileConfigProvider;

  public init(type: ApplicationTypesEnum, config: Config): void {
    switch (type) {
      case 'mobile':
        this.configProvider = new MobileConfigProvider();
        break;
      default:
        this.configProvider = new MobileConfigProvider();
        break;
    }
    this.configProvider.defineConfig(config);
  }

  public get config(): MobileConfigProvider {
    return this.configProvider;
  }
}
