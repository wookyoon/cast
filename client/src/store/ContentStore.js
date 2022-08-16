import {makeAutoObservable, runInAction} from "mobx";
import ContentApi from "../api/ContentApi";
import LoginStore from "./LoginStore";

class ContentStore{
    title = "";
    tags = [];
    searchTag="";
    video=[];
    videos=[];
    url = "";
    menu="0";
    frommain=true;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setVideoList(videos){
        this.videos = videos;
    }

    async getVideoList(category, param){
        try{            
            const results = await ContentApi.getVideos(category, param);
            console.log(results);
            runInAction(() => this.videos = results);
        }
        catch (err){
            console.log(err);
        }
    }

    async contentUpload(){
        try {
            const result = await ContentApi.contentUpload(localStorage.getItem('name'),this.title, this.tags, this.url);
            console.log(result['message'])
            return result['message'];
        } catch (error) {
            console.log(error)
            runInAction(this.message = error.message);
        }
    }


    setTitle(title){
        this.title = title;
    }

    addTags(newtag){
        this.tags = [...this.tags, newtag];
    }

    getTags(){
        return this.tags ;
    }

    resetTags(newtag){
        this.tags = [];
    }

    removeTags(x){
        this.tags = this.tags.filter((tag) => tag !== x);
        console.log(this.tags);
    }

    setUrl(url){
        this.url = url;
    }

    setUser(user){
        this.username = user;
    }

    setVideo(video){
        this.video=video;
        console.log("current video", this.video);
    }

    setMenu(menu){
        this.menu=menu;
    }
}
export default new ContentStore();



