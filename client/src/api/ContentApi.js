import axios from 'axios';

class ContentApi{
    URL = '/api/content';

    contentUpload(email, name, title, tags, url) {
        return axios.post(this.URL + `/add` ,      {email:`${email}`, name:`${name}`, title:`${title}`,tags:`${tags}`,url:`${url}`,hit:0,like:0,bookmark:0})
            .then((response) => response.data);
    }

    titleValidation(title,email) {
        return axios.post(this.URL + `/title/exist` , {title:`${title}`, email:`${email}`})
            .then((response) => response.data);
    }

    getVideos(tags) {
        return axios.post(this.URL + `/get`,{tags:`${tags}`})
        .then((response) => response.data);
    }

    getVideosByEmail(email) {
        return axios.post(this.URL + `/get/byEmail`,{email:`${email}`})
        .then((response) => response.data);
    }

    getVideosByTag(tag) {
        return axios.post(this.URL + `/get/byTag`,{tag:`${tag}`})
        .then((response) => response.data);
    }
}
export default new ContentApi();
