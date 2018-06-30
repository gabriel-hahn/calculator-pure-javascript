class CalcController {

    constructor() {
        this._operation = [];
        this._locale = 'pt-BR';
        this._displayCalcEl = document.querySelector('#display');
        this._dateEl = document.querySelector('#data');
        this._timeEl = document.querySelector('#hora');
        this._currentDate;
        this.initialize();
        this.initButtonsEvents();
    }

    initialize() {
        this._displayCalcEl.innerHTML = '0';

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

    clearAll() {
        this._operation = [];
    }

    clearEntry() {
        this._operation.pop();
    }

    getLastOperation() {
        return this._operation[this._operation.length - 1];
    }

    setLastOperation(value) {
        this._operation[this._operation.length - 1] = value;
    }

    isOperator(value) {
        return (['+', '-', '*', '%', '/'].indexOf(value) > -1);
    }

    addOperation(value) {
        //String
        if (isNaN(this.getLastOperation())) {
            if (this.isOperator(value)) {
                this.setLastOperation(value);
            }
            else if (isNaN(value)) {

            }
            else {
                this._operation.push(value);
            }
        }
        //Number
        else {
            let newValue = this.getLastOperation().toString() + value.toString();
            this.setLastOperation(parseInt(newValue));
        }

        this._operation.push(value);
    }

    setError() {
        this.displayCalc = 'Error';
    }

    execBtn(value) {
        switch (value) {
            case 'AC':
                this.clearAll();
                break;
            case 'CE':
                this.clearEntry();
                break;
            case 'soma':
                this.addOperation('+');
                break;
            case 'subtracao':
                this.addOperation('-');
                break;
            case 'divisao':
                this.addOperation('/');
                break;
            case 'multiplicacao':
                this.addOperation('*');
                break;
            case 'porcento':
                this.addOperation('%');
                break;
            case 'igual':
                break;
            case 'ponto':
                this.addOperation('.');
                break;
            case '0':
            case '1':
            case '2':
            case '3':
            case '4':
            case '5':
            case '6':
            case '7':
            case '8':
            case '9':
                this.addOperation(parseInt(value));
                break;
            default:
                this.setError();
                break;
        }
    }

    //Add multiple events\
    addEventListenerAll(element, events, fn) {
        events.split(' ').forEach(event => {
            element.addEventListener(event, fn, false);
        });
    }

    initButtonsEvents() {
        //Get all the children of buttons.
        let buttons = document.querySelectorAll('#buttons > g, #parts > g');
        buttons.forEach((btn, index) => {
            this.addEventListenerAll(btn, 'click drag', e => {
                let textBtn = btn.className.baseVal.replace('btn-', '');
                console.log(textBtn);
                this.execBtn(textBtn);
            });
            this.addEventListenerAll(btn, 'mouseover mouseup mousedown', e => {
                btn.style.cursor = 'pointer';
            });
        });
    }

    setDisplayDateTime() {
        this.displayDate = this.currentDate.toLocaleDateString(this._locale);
        this.displayTime = this.currentDate.toLocaleTimeString(this._locale);
    }
}