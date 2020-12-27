import ConfigFactory from '../config/factory/configFactory';

export default class UserService {
    configFactory: ConfigFactory;

    constructor(configFactory : ConfigFactory) {
      this.configFactory = configFactory;
    }

    logUserIn(id:number, token:string):Promise<any> {
      // a real api call would use id and token in the request
      console.log(`login user in with id: ${id} and token: ${token}`);
      return fetch(this.configFactory.config.getUserApiBaseUrl());
    }
}
