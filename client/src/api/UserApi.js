import axios from 'axios';

class UserApi{
    URL = '/api/profile';
    
    emailValidation(email) {
        return axios.get(this.URL + `/exist/?email=`+ email)
            .then((response) => response.data);
    }
    
    profileCreate(data) {
        return axios.post(this.URL , data)
            .then((response) => response.data);
    }

    getUser(name) {
        return axios.get(this.URL+"/?name="+name)
        .then((response) => response.data);
    }

}
export default new UserApi();