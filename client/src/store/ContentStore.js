import {makeAutoObservable, runInAction} from "mobx";
import ContentApi from "../api/ContentApi";
import LoginStore from "./LoginStore";

class ContentStore{
    title = "";
    tags = [];
    searchTag="바이올린";
    video=[];
    videos=[];
    // profiletags = [];
    url = "";

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
    }

    setVideoList(videos){
        this.videos = videos;
    }

    async getVideoList(tags){
        try{            
            const results = await ContentApi.getVideos(tags);
            // this.setVideoList(results.docs);
            runInAction(() => this.videos = results.docs);
            console.log(this.videos);
            console.log(results.docs);
        }
        catch (err){
            console.log(err);
        }
    }

    async getVideoListByEmail(){
        try{            
            const results = await ContentApi.getVideosByEmail(localStorage.email);
            // const results = await ContentApi.getVideosByEmail('hahihihihehehe@gmail.com');
            runInAction(() => this.videos = results.docs);
            console.log("!",this.videos);
        }
        catch (err){
            console.log(err);
        }
    }

    async getVideoListByTag(tag){
        try{            
            const results = await ContentApi.getVideosByTag(this.searchTag);
            runInAction(() => this.videos = results.docs.videos);
            console.log("#",this.videos);
        }
        catch (err){
            console.log(err);
        }
    }

    async contentUpload(){
        try {
            const result = await ContentApi.contentUpload(localStorage.getItem('email'), localStorage.getItem('name'),this.title, this.tags, this.url);
            return result['success'];
        } catch (error) {
            console.log(error)
            runInAction(this.message = error.message);
        }
    }

    async titleValidation(){
        try {
            const result = await ContentApi.titleValidation(this.title, (localStorage.getItem('email')));
            return result['exist'];
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
        console.log("###");

        this.video=video;
        console.log("current video", this.video);
    }
}
export default new ContentStore();



