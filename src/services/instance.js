import axios from 'axios';

export default axios.create({
    baseURL: `https://case.posteffect.io`,
    headers: {
        "Accept": "application/json"
    }
})