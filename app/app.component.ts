import { Component } from '@angular/core';

export class Calculation{
    id: number;
    op1: string;
    op2: string;
    result: string;
    calc: Function;
}

@Component({
    selector: 'app-root',
    templateUrl:'./app.html'     
})

export class AppComponent { 
    public title = 'Angular Calculator';
    public cals = CALS;
    onSelectRow(input) {
        this.cals.map(x => x.result="");
        this.cals.map(x => x.id == input && (x.result = x.calc(x.op1, x.op2)));
        this.cals.map(x => {x.op1 = ""; x.op2 = "";});
    }    
}


var CALS: Calculation[] = [
    {
        id: 0, op1: "", op2: "", result: "",
        calc: (op1, op2) => {
            let result = (op1 || 0) + " + " + (op2 || 0) + " = ";
            result += Math.round((Number(op1) + Number(op2)) * 100) / 100 ;
            return result;
        }
    },
    {
        id: 1, op1: "", op2: "", result: "",
        calc: (op1, op2) => {
            let result = (op1 || 0) + " - " + (op2 || 0) + " = ";
            result += Math.round((Number(op1) - Number(op2)) * 100) / 100 ;
            return result;
        }
    },
    {
        id: 2, op1: "", op2: "", result: "",
        calc: (op1, op2) => {
            let result = (op1 || 0) + " * " + (op2 || 0) + " = ";
            result += Math.round((Number(op1) * Number(op2)) * 100) / 100 ;
            return result;
        }
    },
    {
        id: 3, op1: "", op2: "", result: "",
        calc: (op1, op2) => {
            let result = (op1 || 0) + " / " + (op2 || 1) + " = ";
            result += Math.round((Number(op1) / Number(op2)) * 100) / 100 ;
            return result;
        }
    }
];
