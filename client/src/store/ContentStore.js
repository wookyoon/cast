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
			console.log(results);
			runInAction(() => (this.videos = results));
		} catch (err) {
			console.log(err);
		}
	}

	async getIntroVideo(category, param) {
		try {
			const results = await ContentApi.getVideos(category, param);
			console.log(results);
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

    async setVideo(video){
        this.video=video;
        console.log("current video", this.video);
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
