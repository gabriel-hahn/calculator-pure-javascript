class CalcController {

    constructor() {
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector("#display");
        this._dateEl = document.querySelector("#data");
        this._timeEl = document.querySelector("#hora");
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {
        this._displayCalcEl.innerHTML = "0";

        this.setDisplayDateTime();

        setInterval(() => {
            this.setDisplayDateTime();
        }, 1000);
    }

    get displayTime() {
        return this._timeEl.innerHTML;
    }

    get displayDate() {
        return this._dateEl.innerHTML;
    }

    get displayCalc() {
        return this._displayCalcEl.innerHTML;
    }

    get currentDate() {
        return new Date();
    }

    set displayCalc(value) {
        this._displayCalcEl.innerHTML = value;
    }

    set currentDate(value) {
        this._currentDate = value;
    }

    set displayTime(value) {
        this._timeEl.innerHTML = value;
    }

    set displayDate(value) {
        this._dateEl.innerHTML = value;
    }

    initButtonsEvents() {
        //Get all the children of buttons.
        let buttons = document.querySelectorAll("#buttons > g, #parts > g");
        buttons.forEach((btn, index) => {
            btn.addEventListener('click', e => {

            });
        });
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }
}