import {makeAutoObservable, runInAction} from "mobx";
import CastingApi from "../api/CastingApi";

class CastingStore{
    castings = [];
    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
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
}
export default new CastingStore();
