import { TransactionType } from "../constants/transaction-type";
import {Game} from '../model/game.model';

export class TransactionClass {
    public description: string;
    public noOfTokens: number;
    public transactionDate: number;
    public transactionType: TransactionType;
    public game: Game;
    constructor(description: string, noOfTokens: number, transactionType: TransactionType, game: Game){
        this.description = description;
        this.noOfTokens = noOfTokens;
        this.transactionDate = Date.now();
        this.transactionType = transactionType;
        this.game = game;
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

    getGame(){
        return this.game
    }
}
