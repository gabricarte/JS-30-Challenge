class Controller {

    constructor() {
        this.keys = document.querySelectorAll('.keys > .key');
        this.audio;
        this.initMouse();
        this.initKeyboard();
    }

    initMouse() {

        [...this.keys].forEach((key, index) => {

            key.addEventListener('click', e => {

                let sound = document.getElementsByClassName("sound")[index].innerText;

                this.addSounds(sound);

            });

        })

    }

    initKeyboard() {

        [...this.keys].forEach(key => {

            document.addEventListener('keyup', e => {
                this.addSounds(e.key);

            });

        })

    }


    addSounds(sound) {

        switch (sound) {

            case 'a':
            case 'CLAP':

                this.audio = new Audio('sounds/clap.wav');
                this.audio.play();
                break;

            case 's':
            case 'HIHAT':

                this.audio = new Audio('sounds/hihat.wav');
                this.audio.play();
                break;

            case 'd':
            case 'KICK':

                this.audio = new Audio('sounds/kick.wav');
                this.audio.play();
                break;

            case 'f':
            case 'OPENHAT':

                this.audio = new Audio('sounds/openhat.wav');
                this.audio.play();

                break;
            case 'g':
            case 'BOOM':

                this.audio = new Audio('sounds/boom.wav');
                this.audio.play();
                break;

            case 'h':
            case 'RIDE':

                this.audio = new Audio('sounds/ride.wav');
                this.audio.play();
                break;

            case 'j':
            case 'SNARE':

                this.audio = new Audio('sounds/snare.wav');
                this.audio.play();
                break;

            case 'k':
            case 'TOM':

                this.audio = new Audio('sounds/tom.wav');
                this.audio.play();
                break;

            case 'l':
            case 'TINK':
                this.audio = new Audio('sounds/tink.wav');
                this.audio.play();
                break;
        }
    }

}