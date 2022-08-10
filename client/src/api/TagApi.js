import axios from 'axios';

class ContentApi{
    URL = '/api/tag';

    getTags(type) {
        return axios.post(this.URL + `/get` ,      {type:`${type}`})
            .then((response) => response.data);
    }

    addTag(type, newtag) {
        return axios.post(this.URL + `/add` , {newtag:`${newtag}`,  type:`${type}`})
            .then((response) => response.data);
    }

}
export default new ContentApi();
