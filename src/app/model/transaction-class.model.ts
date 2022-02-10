export class TransactionClass {
    private description: string;
    private noOfTokens: number;
    private transactionDate: number;
    constructor(description: string, noOfTokens: number){
        this.description = description;
        this.noOfTokens = noOfTokens;
        this.transactionDate = Date.now();
    }

    getDescription(){
        return this.description;
    }

    getNoOfTokens(){
        return this.noOfTokens;
    }

    getTransactionDate(){
        return this.transactionDate;
    }
}
