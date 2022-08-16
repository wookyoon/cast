import axios from 'axios';

class ContentApi{
    URL = '/api/tag';

    getTags(type) {
        return axios.get(this.URL)
            .then((response) => response.data);
    }

    addTag(newtag) {
        return axios.post(this.URL  , {newtag:`${newtag}`})
            .then((response) => response.data);
    }

}
export default new ContentApi();
