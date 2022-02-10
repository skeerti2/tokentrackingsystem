export class TransactionClass {
    private description: string;
    private noOfTokens: number;
    constructor(description: string, noOfTokens: number){
        this.description = description;
        this.noOfTokens = noOfTokens;
    }

    getDescription(){
        return this.description;
    }

    getNoOfTokens(){
        return this.noOfTokens;
    }
}
