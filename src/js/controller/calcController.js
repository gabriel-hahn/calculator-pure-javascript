class CalcController {

    constructor() {
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
    }

    initialize() {
        this._displayCalcEl.innerHTML = "0";
        this._dateEl.innerHTML = "15/05/2018";
        this._timeEl.innerHTML = "20:18";
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    set displayCalc(displayCalc) {
        this._displayCalcEl.innerHTML = displayCalc;
    }

    get currentDate() {
        return this._currentDate;
    }

    set currentDate(currentDate) {
        this._currentDate = currentDate;
    }
}