import { TransactionType } from "../constants/transaction-type";
import { Game } from './game.model';

export class Transaction {
    private _description: string;
    private _noOfTokens: number;
    private _transactionDate: number;
    private _transactionType: TransactionType;
    private _game: Game;
    constructor(description: string, noOfTokens: number, transactionType: TransactionType, game: Game) {
        this._description = description;
        this._noOfTokens = noOfTokens;
        this._transactionDate = Date.now();
        this._transactionType = transactionType;
        this._game = game;
    }

    get description() {
        return this._description;
    }

    get noOfTokens() {
        return this._noOfTokens;
    }

    get transactionDate() {
        return this._transactionDate;
    }

    get transactionType() {
        return this._transactionType;
    }

    get game() {
        return this._game
    }

    set description(description: string) {
        this._description = description;
    }

    set noOfTokens(noOfTokens: number) {
        this._noOfTokens = noOfTokens;
    }

    set transactionDate(transactionDate: number) {
        this._transactionDate = transactionDate;
    }

    set transactionType(transactionType: TransactionType) {
        this._transactionType = transactionType;
    }

    set game(game: Game) {
        this._game = game;
    }
}
