import axios from "axios";

const instance= axios.create({
    baseURL:'https://react-redux-main-e78f5-default-rtdb.firebaseio.com/'
})

export default instance