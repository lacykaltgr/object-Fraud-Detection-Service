import jsonData from './users.json';

export default {
    getData() {
        this.ownerData = jsonData;
        return this.ownerData;
    }
}