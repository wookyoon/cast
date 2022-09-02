import {makeAutoObservable, runInAction} from "mobx";
import UserApi from "../api/UserApi";
import ContentStore from "./ContentStore";

class LoginStore{
    email ='';
    user=[];
    isLoggedIn=localStorage.getItem('isLoggedIn')? true : false;
    emailIsExist='';

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    async emailValidation(email){
        try {
            const result = await UserApi.emailValidation(email);
            this.emailIsExist = result['message'];
            localStorage.setItem('name',result['name']);
            // false : not exist => go to create profile page
            // true : exist => go to home page
        } catch (error) {
            console.log(error)
            runInAction(this.message = error.message);
        }
    }

    async profileCreate(data) {
        try {
            const result = await UserApi.profileCreate(data);
            localStorage.setItem('name',result['name']);
            return result.message;
        } catch (error) {
            console.log(error)
            runInAction(this.message = error.message);
        }
    }

    async getUser(name){
        try{            
            const results = await UserApi.getUser(name);
            console.log(results);
            runInAction(() => this.user = results);
        }
        catch (err){
            console.log(err);
        }
    }

    setIsLoggedIn(bool){
        this.isLoggedIn = bool;
        localStorage.setItem('isLoggedIn',bool);
    }

    setUser(data){
        localStorage.setItem('email', data.user.email);
    }
    
}
export default new LoginStore();

