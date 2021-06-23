
function sequencer(){
    const claps = new Tone.Player('https://clone18476.github.io/beat_sequencer/SFX/clap-analog.wav').toDestination();
    const snare = new Tone.Player('https://clone18476.github.io/beat_sequencer/SFX/snare-pinch.wav').toDestination();
    const kick = new Tone.Player('https://clone18476.github.io/beat_sequencer/SFX/tom-808.wav').toDestination();
    let index = 0;


    Tone.Transport.scheduleRepeat(repeat,'16n')
    Tone.Transport.start();

    function repeat(){
        let step =  index % 8;
        let selectedSfx = document.querySelector(`.top  input:nth-child(${step + 1})`);
        let selectedSfx2 = document.querySelector(`.bottom  input:nth-child(${step + 1})`);
        let selectedSfx3 = document.querySelector(`.middle  input:nth-child(${step + 1})`);
        if (selectedSfx.checked){
            claps.start();  
        }
        if (selectedSfx2.checked){
            snare.start();  
        }        
        if (selectedSfx3.checked){
            kick.start();  
        }
        index ++
    }
}


sequencer();

