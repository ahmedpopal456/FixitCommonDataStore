import UserService from '../../../services/userService';

export default function authenticateUserAzureB2C(id:number, token:string, userService:UserService)
:Promise<number> {
  return new Promise<number>((resolve, reject) => {
    userService.logUserIn(id, token)
      .then((response) => response.json())
      .then((data:Record<string, unknown>) => {
        // logic from API data goes here
        console.log(data);
        resolve(id);
      })
      .catch((e) => {
        reject(e);
      });
  });
}
