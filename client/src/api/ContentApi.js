import axios from 'axios';

class ContentApi{
    URL = '/api/content';

    contentUpload(name, title, tags, url) {
        return axios.post(this.URL,  { name:`${name}`, title:`${title}`,tag:`${tags}`,url:`${url}`})
            .then((response) => response.data);
    }

    getVideos(category,param) {
        return axios.get(this.URL+"/?category="+category+"&param="+param)
        .then((response) => response.data);
    }

    getUsers(name) {
        return axios.post(this.URL + `/get/users`,{name:`${name}`})
        .then((response) => response.data);
    }
}
export default new ContentApi();
