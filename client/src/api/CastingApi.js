import axios from 'axios';

class CastingApi{
    URL = '/api/casting';

    getCastings(category, param) {
        return axios.get(this.URL+"/?category="+category+"&param="+param)
            .then((response) => response.data);
    }

    createCasting(type, data) {
        return axios.post(this.URL+"/?type="+type , data)
            .then((response) => response.data);
    }

    applyCasting(data) {
        return axios.patch(this.URL  , data)
            .then((response) => response.data);
    }

    deleteCasting(type, id, name) {
        return axios.delete(this.URL+"/?type="+type+"&cid="+id+"&name="+name)
            .then((response) => response.data);
    }
}
export default new CastingApi();
