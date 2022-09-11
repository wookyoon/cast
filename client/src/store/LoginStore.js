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

    async updateUser(name){
        try{            
            const results = await UserApi.updateUser(name);
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

    async setLike(name, param){
        console.log("current intro", name);
        const data = {
            category : "like",
            name : name,
            loginname: localStorage.getItem("name"),
            param:param
        }
        try {
            const result = await UserApi.updateUser(data);
            console.log(result['message'])
            // return result['message'];
        } catch (error) {
            console.log(error)
            runInAction(this.message = error.message);
        }
    }

    async setIntro(intro, categoty, param){
        this.intro=intro;
        console.log("current intro ##", this.intro);

        if(param === "dislike"){
            intro.likedUser = intro.likedUser.filter((user) => user !== localStorage.getItem("name")); 
            intro.bookmark = intro.bookmark-1
        }else if(param === "like"){
            intro.likedUser = [...intro.likedUser, localStorage.getItem("name")]; 
            intro.bookmark = intro.bookmark+1
        }
        console.log("current intro likedUser", this.intro.likedUser);
        console.log("current intro bookmark", this.intro.bookmark);
    
    }
}
export default new LoginStore();

