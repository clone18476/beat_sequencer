function sequencer(){
    const claps = new Tone.Player('https://clone18476.github.io/beat_sequencer/SFX/clap-analog.wav').toDestination();
    const snare = new Tone.Player('https://clone18476.github.io/beat_sequencer/SFX/snare-pinch.wav').toDestination();
    let index = 0;
    
    Tone.Transport.scheduleRepeat(repeat,'8n')
    Tone.Transport.start();

    function repeat(){
        let step =  index % 8;
        let selectedSfx = document.querySelector(`.top  input:nth-child(${step + 1})`);
        let selectedSfx2 = document.querySelector(`.bottom  input:nth-child(${step + 1})`);
        if (selectedSfx.checked){
            claps.start();  
        }
        if (selectedSfx2.checked){
            snare.start();  
        }
        index ++
    }
}


sequencer();
