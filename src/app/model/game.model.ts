export class Game{
    private _name:string;
    private _tokens: number;
    constructor(name: string, tokens: number){
        this._name = name;
        this._tokens = tokens;
    }

    get name(){
        return this._name;
    }

    get tokens(){
        return this._tokens;
    }

    set name(name: string){
        this._name = name;
    }

    set tokens(tokens: number){
        this._tokens = tokens;
    }
}