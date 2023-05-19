import jsonData from 'objects.json';

export default {
    getTransactionData() {
        setTimeout(() => {
            this.objectData = jsonData;
        }, 500);
        return this.objectData;
    }
}