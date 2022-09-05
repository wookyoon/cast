import {makeAutoObservable, runInAction} from "mobx";
import CastingApi from "../api/CastingApi";

class CastingStore{
    castings = [];
    casting=[];
    open = false;
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

    async getCastingList(categoty, param){
        try{            
            const results = await CastingApi.getCastings(categoty, param);
            console.log(results);
            runInAction(() => this.castings = results);
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

    setCasting(casting, save){
        this.casting = casting;
        var filteredCasting;
        if(save === "save"){
            filteredCasting = casting.apply.filter(apply => apply.name === localStorage.getItem("name") 
        && apply.save === "save");
        this.motivation = filteredCasting.motivation
        }else if(save === "apply"){
            filteredCasting = casting.apply.filter(apply => apply.name === localStorage.getItem("name") 
        && apply.save === "apply");
        this.motivation = filteredCasting.motivation
        }
        console.log("$$$", casting.apply)
        // this.motivation = filteredCasting.motivation
    }

    setModal(open){
        this.open = open;
    }
}
export default new CastingStore();
