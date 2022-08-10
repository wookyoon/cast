
import axios from 'axios';

class UserApi{
    URL = '/api/profile';
    
    emailValidation(email) {
        return axios.post(this.URL + `/exist` , {email:`${email}`})
            .then((response) => response.data);
    }

    setUser(email){
        return axios.post(this.URL + `/set` , {email:`${email}`})
            .then((response) => response.data);
    }
    
    nameValidation(name) {
        return axios.post(this.URL + `/name/exist` , {name:`${name}`})
            .then((response) => response.data);
    }

    profileCreate(email,name,tags, url) {
        return axios.post(this.URL + `/create` , {email:`${email}`,name:`${name}`,tags:`${tags}`,imgurl:`${url}`})
            .then((response) => response.data);
    }

    // profileRead(email) {
    //     return axios.post(this.URL + `/read`, {email:`${email}`})
    //         .then((response) => response.data);
    // }

    // profileUpdate(email,name,text) {
    //     return axios.post(this.URL + `/udpate` , {email:`${email}`,name:`${name}`,text:`${text}`})
    //         .then((response) => response.data);
    // }

    // profileDelete(email) {
    //     return axios.post(this.URL + `/delete` , {email:`${email}`})
    //         .then((response) => response.data);
    // }
}
export default new UserApi();