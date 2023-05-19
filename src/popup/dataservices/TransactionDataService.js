import jsonData from './transactions.json';

export default {
    getTransactionData() {
        setTimeout(() => {
            this.transactionData = jsonData;
        }, 500);
        return this.transactionData;
    }
}