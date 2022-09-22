class Almoco {
    private proteina : string;
    private carboidrato: string;

    public get refeicao (){
        return `${this.proteina} com ${this.carboidrato}`;
    }

    public set carne (proteina: string) {
        if (proteina != ''){
        this.proteina = proteina;
        }
    }

    constructor (proteina: string, carboidrato: string){
        this.carboidrato = carboidrato
        this.proteina = proteina
    }
}
export {Almoco}
