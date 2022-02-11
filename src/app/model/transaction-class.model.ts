import { TransactionType } from "../constants/transaction-type";

export class TransactionClass {
    private description: string;
    private noOfTokens: number;
    private transactionDate: number;
    private transactionType: TransactionType;
    constructor(description: string, noOfTokens: number, transactionType: TransactionType){
        this.description = description;
        this.noOfTokens = noOfTokens;
        this.transactionDate = Date.now();
        this.transactionType = transactionType;
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

    getTransactionType(){
        return this.transactionType;
    }
}
