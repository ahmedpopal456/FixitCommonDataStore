import { Config } from '../../models/config/config';

export default abstract class BaseConfigProvider {
  protected config!: Config;

  public defineConfig(config: Config): void {
    this.config = config;
  }

  public getIsProduction(): boolean {
    return this.config.production;
  }

  public getUserApiBaseUrl(): string {
    return this.config.userApiBaseUrl;
  }

  public getFixApiBaseUrl(): string {
    return this.config.fixApiBaseUrl;
  }
}
