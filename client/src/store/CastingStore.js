import {makeAutoObservable, runInAction} from "mobx";
import CastingApi from "../api/CastingApi";

class CastingStore{
    castings = [];
    saveCastings = [];
    applyCastings = [];
    createCastings = [];
    filteredCasting = [];
    filteredResultCasting = [];
    casting=[];
    open = false;
    mypageOpen = false;
    mypageUpdateOpen = false;
    mypageApplyOpen = false;
    motivation=""
    type=""

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        this.casting.tag=[];
    }

    async castingCreate(type, data) {
        console.log(data)
        var result = "";
        try {
            if(type === "new"){
                result = await CastingApi.createCasting(type, data);
            }else if(type==="update"){
                result = await CastingApi.createCasting(type, this.casting);
            }
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

    async applyCasting(id, motivation, save, type){

        if(type==="reply"){
            var data = {
                id : id,
                rid: save,
                reply : motivation,
                type : type
            }
        }else{
            data = {
                id : id,
                name : localStorage.getItem("name"),
                motivation : motivation,
                save : save,
                type : type
            }
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
    
    async updateCasting(){
        try{            
            const results = await CastingApi.updateCasting(this.casting);
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

    setCastingValue(category, value){
        console.log("1",category)
        console.log("2",value)
        this.casting[category] = value;
        console.log("3",this.casting[category])
    }

    setCasting(casting, save){
        this.casting = casting;
        if(save==="update"){
            this.filteredCasting = this.casting.apply.filter((user) => user.name === localStorage.getItem("name"));
            this.motivation = this.filteredCasting[0].motivation
            console.log("$", this.motivation )
        }else if(save==="check"){
            this.filteredCasting = this.casting.apply.filter((user) => user.save === "apply");
            this.type=save
        }else if(save==="reply"){
            this.filteredResultCasting = this.casting.apply.filter((user) => user.save === "reply");
            this.type=save
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

    setMotivation(value){
        this.motivation = value
    }

    setModal(open){
        this.open = open;
    }

    setMyPageModal(open){
        this.mypageOpen = open;
    }

    setMyPageUpdateModal(open){
        this.mypageUpdateOpen = open;
    }

    setMyPageApplyModal(open){
        this.mypageApplyOpen = open;
    }
}
export default new CastingStore();
