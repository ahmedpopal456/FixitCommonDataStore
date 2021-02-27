import { ConfigModel } from '../../models/config/configModel';

export default abstract class BaseConfigProvider {
  protected config!: ConfigModel;

  public defineConfig(config: ConfigModel): void {
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

  public getUserAccountRoute(): string {
    return this.config.getUserAccountRoute;
  }

  public getUserProfileRoute(): string {
    return this.config.getUserProfileRoute;
  }

  public getUserRatingRoute(): string {
    return this.config.getUserRatingsRoute;
  }

  public get rawConfig(): ConfigModel {
    return this.config;
  }
}
