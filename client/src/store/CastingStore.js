import {makeAutoObservable, runInAction} from "mobx";
import CastingApi from "../api/CastingApi";

class CastingStore{
    castings = [];
    saveCastings = [];
    applyCastings = [];
    createCastings = [];
    filteredCasting = [];
    casting=[];
    open = false;
    mypageOpen = false;
    motivation=""

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        this.casting.tag=[];
    }

    async castingCreate(data) {
        console.log(data)

        try {
            const result = await CastingApi.createCasting(data);
            console.log(result);
            return result;
        } catch (error) {
            console.log(error)
            runInAction(this.message = error.message);
        }
    }

    async getCastingList(category, param){
        try{            
            const results = await CastingApi.getCastings(category, param);
            if(category==="all"){
                runInAction(() => this.castings = results);
            }else{
                return results;
            }
        }
        catch (err){
            console.log(err);
        }
    }

    async applyCasting(id, motivation, save){
        const data = {
            id : id,
            name : localStorage.getItem("name"),
            motivation : motivation,
            save : save
        }
        try{            
            const results = await CastingApi.applyCasting(data);
            runInAction(() => this.castings = results);
            console.log(results);
            return results.message;
        }
        catch (err){
            console.log(err);
        }
    }

    async deleteCastingList(type, id, name) {
		try {
			const results = await CastingApi.deleteCasting(type, id, name);
			console.log(results);
		} catch (err) {
			console.log(err);
		}
	}

    setCasting(casting, save){
        this.casting = casting;
        if(save==="update"){
            this.filteredCasting = this.casting.apply.filter((user) => user.name === localStorage.getItem("name"));
            this.motivation = this.filteredCasting[0].motivation
            console.log("$", this.motivation )
        }else{
        }
        // if(save === "save"){
        //     this.filteredCasting = casting.apply.filter(apply => apply.name === localStorage.getItem("name"));
        // // this.motivation = filteredCasting.motivation
        // }else if(save === "apply"){
        //     this.filteredCasting = casting.apply.filter(apply => apply.name === localStorage.getItem("name") 
        // && apply.save === "apply");
        // // this.motivation = filteredCasting.motivation
        // }
        // this.motivation = filteredCasting.motivation
    }

    setModal(open){
        this.open = open;
    }

    setMyPageModal(open){
        this.mypageOpen = open;
    }
}
export default new CastingStore();
