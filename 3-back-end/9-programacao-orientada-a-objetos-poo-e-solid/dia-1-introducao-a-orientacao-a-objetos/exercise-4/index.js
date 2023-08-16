"use strict";
class Student {
    constructor(studentId, name) {
        this._studentId = studentId;
        this._name = name;
        this._examsGrades = [];
        this._assignmentsGrades = [];
    }
    get studentId() { return this._studentId; }
    set studentId(newId) { this._studentId = newId; }
    get name() { return this._name; }
    set name(newName) {
        if (newName.length < 3)
            throw new Error('Invalid name.');
        this._name = newName;
    }
    get examsGrades() { return this._examsGrades; }
    set examsGrades(value) {
        if (value.length > 4)
            throw new Error('A pessoa estudante só pode possuir 4 notas de provas.');
        this._examsGrades = value;
    }
    get assignmentsGrades() { return this._assignmentsGrades; }
    set assignmentsGrades(value) {
        if (value.length > 2)
            throw new Error('A pessoa estudante só pode possuir 2 notas de trabalhos.');
        this._assignmentsGrades = value;
    }
    calculateGrades() {
        const examsTotal = this._examsGrades.reduce((acc, curr) => acc + curr, 0);
        const assignmentsTotal = this._assignmentsGrades.reduce((acc, curr) => acc + curr, 0);
        return examsTotal + assignmentsTotal;
    }
}
const personOne = new Student('202001011', 'Maria da Silva');
console.log(personOne.assignmentsGrades);
const personTwo = new Student('202001012', 'João da Silva');
console.log(personTwo);
