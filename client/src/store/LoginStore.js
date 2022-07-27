import {makeAutoObservable, runInAction} from "mobx";
import UserApi from "../api/UserApi";

class LoginStore{
    email ='';
    isLoggedIn=localStorage.getItem('isLoggedIn')? true : false;
    emailIsExist='';
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    async emailValidation(email){
        try {
            const result = await UserApi.emailValidation(localStorage.getItem('email'));
            this.emailIsExist = result['exist'];
            // false : not exist => go to create profile page
            // true : exist => go to home page
        } catch (error) {
            console.log(error)
            runInAction(this.message = error.message);
        }
    }

    setIsLoggedIn(bool){
        this.isLoggedIn = bool;
        localStorage.setItem('isLoggedIn',bool);
    }

    setUser(data){
        localStorage.setItem('email', data.user.email);
        localStorage.setItem('name', data.user.name);
        localStorage.setItem('profilePic', data.user.profilePic);
    }

    async profileCreate(email, name, text) {
        try {
            await UserApi.profileCreate(email, name, text);
        } catch (error) {
            console.log(error)
            runInAction(this.message = error.message);
        }
      }

}
export default new LoginStore();

