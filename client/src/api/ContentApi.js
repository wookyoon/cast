import axios from 'axios';

class ContentApi{
    URL = '/api/video';

    contentUpload(data) {
        return axios.post(this.URL,  data)
            .then((response) => response.data);
    }

    getVideos(category,param) {
        return axios.get(this.URL+"/?category="+category+"&param="+param)
        .then((response) => response.data);
    }

    updateVideo(data) {
        return axios.patch(this.URL, data )
            .then((response) => response.data);
    }

}
export default new ContentApi();
