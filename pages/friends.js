import Draggable from 'react-draggable'

import React, { useEffect, useState } from 'react';

const mySongs = ['s1', 's2', 's3', 's4', 's5', 's6', 's7', 's8', 's9', 's10', 's11', 's12', 's13', 's14', 's15', 's16', 's17', 's18', 's19',
    's20', 's21', 's22', 's23', 's24']

const songNames = ["Crab Walk | Duff Thomphson\nfrom me :3",
    "Beautiful World | Parannoul\nfrom billy",
    "Something Stupid | Frank Sinatra\nfrom ezra",
    "over the top | dashie\nfrom brooke",
    "Sunshower | Dr. Buzzard's Original Savannah Band\nfrom jylah",
    "Banana Clip | Miguel\nfrom anjali",
    "Valerie | Glee Cast Version\nfrom talia",
    "Stretchmarker | Baroness\nfrom jackie",
    "Love It If We Made | The 1975\nfrom mary",
    "No Vampires Remain in Romania | King Luan\nfrom will",
    "Mate Um Bonito Hoje Mesmo! | Marcioz\nfrom liam",
    "Swallow Song | Vashti Bunyan\nfrom duncan",
    "It's a Girl Party | Mackz\nfrom katie",
    "░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓░▓ | △▃△▓\nfrom kel <3",
    "Hyperballad | Björk\nfrom isabelle",
    "Clues Not to Read | Fievel Is Glauque\nfrom ruby",
    "頼りない天使 - Live | Fishmans\nfrom michael",
    "Rainbow Connection | The Muppets\nfrom lon",
    "IDORU | Grimes\nfrom sophia",
    "Waking Up | Kero Kero Bonito\nfrom ben",
    "Mood Ring | Boreen\nfrom trevor",
    "Money, Money, Money | ABBA\nfrom deanna",
    "Drown | Weston Estate\nfrom drew",
    "Let You Break My Heart Again - Live | Laufey\nfrom tofu",
    "Take Me Home, Country Roads| Yuji Nomi\nfrom ariel"];

const randomSong = () => {
    var randomSongTitle = songNames[Math.floor(Math.random() * songNames.length)];
    return randomSongTitle;
    // var audioElement = document.getElementById(id);
    // audioElement.play();
}


export default function Friends() {
    const [songPlace, setSongPlace] = useState(songNames[0]);

    useEffect(() => setSongPlace(randomSong()), [])

    const changeRandomSong = () => {
        // shuffle array and pick random
        const randomSongName = randomSong();
        setSongPlace(randomSongName);
    };


    return <div>
            <Draggable>
                <pre style={{
                    fontFamily: "MS PGothic", position: "absolute", left: "950px", top: "810px", 
                    display: "inline-block", placeSelf: "center", backgroundColor: "transparent",
                    marginTop: "-800px", height: "0px"
                }}>
                    listen to {songPlace}!
                </pre>
            </Draggable>

            <Draggable>
                <div style={{ position: "absolute", top: "450px", left: "100px"}}>
                    a work in progress... soon, this page will be loaded with stuff about my friends! but for now, it remains blank...
                </div>
            </Draggable>
            <audio id="s1" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s2" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s3" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s4" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s5" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s6" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s7" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s8" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s9" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s10" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s11" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s12" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s13" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s14" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s15" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s16" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s17" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s18" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s19" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s20" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s21" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s22" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s23" src="/CrabWalk.mp3" type="audio/wav" />
            <audio id="s24" src="/CrabWalk.mp3" type="audio/wav" />
     </div>
}


