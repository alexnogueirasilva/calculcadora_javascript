class CalcController
    {
        constructor()
        {
            this._operation = [];
            this._locale = 'pt-BR';
            this._displayCalcEl = document.querySelector("#display");
            this._dateEl = document.querySelector("#data");
            this._timeEl = document.querySelector("#hora");
            this._currentDate;
            this.initialize();
            this.initButtonsEvents();

        }

        initialize()
            {
                this.setDisplayDataTime();

                setInterval(() =>
                {
                    this.setDisplayDataTime();

                }, 1000);

            }

        clearAll()
            {
                
            }    

        execBtn(value)
            {
                switch(value)
                {

                    case 'ac':

                    break;

                    case 'ce':

                    break;

                    case 'divisao':

                    break;

                    case 'multiplicacao':

                    break;

                    case 'subtracao':

                    break;

                    case 'soma':

                    break;

                    case '':

                    break;

                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':

                    break;


                }
            }


        addEventListenerAll(element, events, fn)
            {
                events.split(' ').forEach(event =>
                    {
                        element.addEventListener(event, fn, false);

                    });
            }
            
          
            initButtonsEvents()
                {
                    let buttons = document.querySelectorAll("#buttons > g, #parts > g")

                    buttons.forEach((btn, index) =>
                        {
                            this.addEventListenerAll(btn, "click drag", e => 
                            {
                                let textBtn = btn.className.baseVal.replace("btn-", "");

                                this.execBtn(textBtn);
                            });

                            this.addEventListenerAll(btn, "mouseover mouseup mousedown", e =>
                            {
                                btn.style.cursor = "pointer";
                            });
                        }
                )};

        setDisplayDataTime()
            {
                this.displayDate = this.currentDate.toLocaleDateString(this._locale);
                this.displayTime = this.currentDate.toLocaleTimeString(this._locale);

            }

        get displayCalc()
            {
                return this._displayCalcEl.innerHTML;
            }

        get displayTime()
            {
                return this._timeEl.innerHTML;
            }

        set displayTime(value)
            {
                return this._timeEl.innerHTML = value;
            }    
            
        get displayDate()
            {
                return this._dateEl.innerHTML;
            } 
            
        set displayDate(value)
            {
                return this._dateEl.innerHTML = value;
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
