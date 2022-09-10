import { makeAutoObservable, runInAction } from 'mobx';
import ContentApi from '../api/ContentApi';

class ContentStore {
	title = '';
	tags = [];
	searchTag = '';
	video = [];
	videos = [];
	introVideo = [];
	url = '';
	menu = '0';
	open = false;

    constructor() {
        makeAutoObservable(this, {}, { autoBind: true });
        this.video.tag=[];
    }

	async getVideoList(category, param) {
		try {
			const results = await ContentApi.getVideos(category, param);
			// console.log(results);
			runInAction(() => (this.videos = results));
		} catch (err) {
			console.log(err);
		}
	}

	async getIntroVideo(category, param) {
		try {
			const results = await ContentApi.getVideos(category, param);
			// console.log(results);
			runInAction(() => (this.introVideo = results));
		} catch (err) {
			console.log(err);
		}
	}

	async contentUpload(data) {
		try {
			const result = await ContentApi.contentUpload(data);
			console.log(result['message']);
			return result['message'];
		} catch (error) {
			console.log(error);
			runInAction((this.message = error.message));
		}
	}

	setVideoList(videos) {
		this.videos = videos;
	}

	setTitle(title) {
		this.title = title;
	}

	addTags(newtag) {
		this.tags = new Set([...this.tags, newtag]);
		this.tags = [...this.tags.data_];
		console.log(this.tags);
	}

	getTags() {
		return this.tags;
	}

    async setVideo(video, categoty, param){
        this.video=video;
        console.log("current video", this.video);
		if(categoty === "hit"){
			const data = {
				category : "hit",
				id : video._id
			}
			try {
				const result = await ContentApi.updateVideo(data);
				console.log(result['message'])
				// return result['message'];
			} catch (error) {
				console.log(error)
				runInAction(this.message = error.message);
			}
		}else if(categoty === "like"){
			if(param === "dislike"){
				video.likeUser = video.likeUser.filter((user) => user !== localStorage.getItem("name")); 
				video.like = video.like-1
			}else if(param === "like"){
				video.likeUser = [...video.likeUser, localStorage.getItem("name")]; 
				video.like = video.like+1
			}
		}
    }

    async setLike(id, param){
        console.log("current video", id);
        const data = {
            category : "like",
            id : id,
            name: localStorage.getItem("name"),
            param:param
        }
        try {
            const result = await ContentApi.updateVideo(data);
            console.log(result['message'])
            // return result['message'];
        } catch (error) {
            console.log(error)
            runInAction(this.message = error.message);
        }
    }

	async deleteVideoList(id) {
		try {
			const results = await ContentApi.deleteVideo(id);
			console.log(results);
		} catch (err) {
			console.log(err);
		}
	}

	deleteVideo(title){
		this.videos = this.videos.filter((video) => video.title !== title);
		return this.videos
	}

	removeTags(x) {
		this.tags = this.tags.filter((tag) => tag !== x);
		console.log(this.tags);
	}

	resetTags(){
		this.tags = [];
	}

	setUrl(url) {
		this.url = url;
	}

	setUser(user) {
		this.username = user;
	}

	setMenu(menu) {
		this.menu = menu;
	}

	setModal(open) {
		this.open = open;
		return this.open;
	}
}
export default new ContentStore();
