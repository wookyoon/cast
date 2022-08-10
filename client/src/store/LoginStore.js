import {makeAutoObservable, runInAction} from "mobx";
import UserApi from "../api/UserApi";

class LoginStore{
    email ='';
    user=[];
    isLoggedIn=localStorage.getItem('isLoggedIn')? true : false;
    emailIsExist='';
    nameExist='';
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    async emailValidation(email){
        try {
            const result = await UserApi.emailValidation(email);
            this.emailIsExist = result['exist'];
            if(this.emailIsExist){
                const user_result = await UserApi.setUser(email);
                runInAction(() => this.user = user_result.doc)
                localStorage.setItem('name',this.user.name)
                console.log(this.user);
            }
            // false : not exist => go to create profile page
            // true : exist => go to home page
        } catch (error) {
            console.log(error)
            runInAction(this.message = error.message);
        }
    }

    async nameValidation(name){
        try {
            const result = await UserApi.nameValidation(name);
            return result['exist'];
        } catch (error) {
            console.log(error)
            runInAction(this.message = error.message);
        }
    }

    async profileCreate(email, name, tags, url) {
            try {
                console.log(email, name, tags, url);
                await UserApi.profileCreate(email, name, tags,url);
                localStorage.setItem('name', name);
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
        localStorage.setItem('profilePic', data.user.profilePic);
    }

    
}
export default new LoginStore();

