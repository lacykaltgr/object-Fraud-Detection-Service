import jsonData from 'src/assets/objects.json';

export default {
    getData() {
        this.objectData = jsonData;
        return this.objectData;
    }
}