class Clock{
    constructor(options){
        this.template = options.template;
    }

    render(){
        let date = new Date();

        let hours = date.getHours();
        if (hours < 10) hours = '0' + hours;

        let minutes = date.getMinutes();
        if (minutes < 10) minutes = '0' + minutes;

        let seconds = date.getSeconds();
        if (seconds < 10) seconds = '0' + seconds;

        let time = this.template.split(":");
        let h = time[0];
        let m = time[1];
        let s = time[2];

        let output = this.template
            .replace(h, hours)
            .replace(m, minutes)
            .replace(s, seconds);
        
        console.log(output);
    }

    start(){
        this.render();
        this.timer = setInterval(() => this.render(), 1000);
    }
}

class ExtendedClock extends Clock{
    
    constructor(options){
        super(options);
        let {delay = 10000} = options;
        this.delay = delay;
    }

    start(){
        this.render();
        this.timer = setInterval(() => this.render(), this.delay);
    }
}

let options ={
      template: 'h:m:s',
      delay: 5000,
    };

let lowResolutionClock = new ExtendedClock(options);

lowResolutionClock.start();