/*
**@Autor "Alex Nogueira da Silva"
**
*/


class CalController
    {
        constructor()
            {
                this._operation = [];
                this.locale = 'pt-BR';
                this._displayCalcEl = document.querySelector("#display");
                this._dateEl = document.querySelector("#data");
                this._timeEl = document.querySelector("#hora");
                this._currentDate;
                this.initialize();
                this.initButtonsEvents();
            }
        initialize()
            {
                this.displayDateTime();

                setInterval(()=>
                    {
                        this.displayDateTime();

                    }, 1000);
            }
            addEventListenerAll(element, events, fn)
                {
                    events.split(' ').forEach(event =>
                            {
                                element.addEventListener(event, fn, false);
                            });
                }
        clearAll()
            {

                this._operation = [];

            }
            
        clearEntry()
            {

                this._operation.pop();

            }
        
        getLastOperation()
            {
               return this._operation[this._operation.length - 1]; 
            } 
            
        isOperation(value)
            {
                return (['+', '-', '*', '/', '%'].indexOf(value) > -1);
            }
            
        pushOperation(value)
            {
                this._operation.push(value);
            }    
            
        setError()
            {
                this.displayCalc  = "Erro";
            }

        setLastOperation(value)
            {
                this._operation[this._operation.length - 1] = value;
            }
            
            addOperation(value)
                {

                    if(isNaN(this.getLastOperation()))
                        {
                            if(this.isOperation(value))
                                {
                                    this.setLastOperation(value);
                                }else if(isNaN(value))
                                    {
                                        console.log(value);
                                    } else {

                                        this.pushOperation(value);

                                    }
                        } else  {

                            if(this.isOperation(value))
                                {
                                    this.pushOperation(value);
                                } else 
                                    {
                                        
                                        let newValue = this.getLastOperation().toString() + value.toString();
                                        this.setLastOperation(parseInt(newValue));
                                    }

                                }

                   console.log(this._operation);
                }
        execBtn(value)
            {
                switch (value)
                    {
                        case 'ac':

                            this.clearAll();

                            break;

                        case 'ce':

                            this.clearEntry();

                            break;

                        case 'soma':
                            this.addOperation('+');
                            break;

                        case 'divisao':
                        this.addOperation('/');
                            break;

                        case 'subtracao':
                            this.addOperation('-');
                            break;

                        case 'multiplicacao':
                            this.addOperation('*');
                            break;

                        case 'igual':

                            break;

                        case 'porcento':
                            this.addOperation('%');
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
            

        initButtonsEvents()
            {
                let buttons = document.querySelectorAll("#buttons > g, #parts > g");

                    buttons.forEach((btn, index) =>
                        {
                            this.addEventListenerAll(btn,"click drag", e =>
                            {
                                let textBtn = (btn.className.baseVal.replace("btn-", ""));

                                this.execBtn(textBtn)

                            });

                            this.addEventListenerAll(btn,"mouseover mouseup mousedown", e =>
                                {
                                    btn.style.cursor = "pointer";
                                })

                   })

            }

        displayDateTime()
            {
                this.displayDate = this.currentDate.toLocaleDateString(this.locale);
                this.displayTime = this.currentDate.toLocaleTimeString(this.locale);
            }    

        get displayTime()
            {
                return this._timeEl.innerHTML;
            } 
        set displayTime(value)
            {
                this._timeEl.innerHTML = value;
            }    
        get displayDate()
            {
                return this._dateEl.innerHTML;
            }
        set displayDate(value)
            {
                this._dateEl.innerHTML = value;
            }    
        get displayClac()
            {
                return this._displayCalcEl.innerHTML;
            }
        set displayCalc(value)
            {
                this._displayCalcEl.innerHTML = value;
            }
        get currentDate()
            {
                return new Date();
            }
        set currentDate(value)
            {
                this._currentDate = value;
            }    
    }