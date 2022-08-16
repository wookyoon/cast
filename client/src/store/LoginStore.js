import {makeAutoObservable, runInAction} from "mobx";
import UserApi from "../api/UserApi";
import ContentStore from "./ContentStore";

class LoginStore{
    email ='';
    user=[];
    isLoggedIn=localStorage.getItem('isLoggedIn')? true : false;
    emailIsExist='';
    nameExist='';
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }
    tags=[]

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

    async profileCreate(email, name, url,insta,facebook,youtube,info) {
            try {
                const result = await UserApi.profileCreate(email, name, url, insta, facebook, youtube, info, ContentStore.tags);
                console.log(result)
                localStorage.setItem('name',result['name']);
                return result.message;
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

