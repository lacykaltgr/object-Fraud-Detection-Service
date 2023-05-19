import jsonData from './transactions.json';

export default {
    getData() {
        setTimeout(() => {
            this.transactionData = jsonData;
        }, 500);
        return this.transactionData;
    }
}