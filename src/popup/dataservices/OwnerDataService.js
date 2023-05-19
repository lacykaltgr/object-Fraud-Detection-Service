import jsonData from './users.json';

export default {
    getTransactionData() {
        setTimeout(() => {
            this.ownerData = jsonData;
        }, 500);
        return this.ownerData;
    }
}