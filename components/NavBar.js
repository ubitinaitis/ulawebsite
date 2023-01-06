import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'
import Link from 'next/link'
import Draggable from 'react-draggable'
import React, { useEffect, useState } from 'react';

const ASCII0 = `　　　　　　　　　　　　　　　　　　　　　　　　　　　／|　　　　　　　　　　　＊
　　　　　　　　　　　　　　　　　　　　　　　　　 ／　｜
　　　　　　☆ 　　　　　　　　　　　　　　　　／　　　|＿＿
　　　　　　　　　　　　　　　　　　　　　　 ／　　　／　　 　|
　　　　　　　　　　　　　　　＊ 　　　　／　　　／　　 　 　|＿＿＿
　　　　　　　　　　　　∩_∩ 　　　 ／　　　／　　　　　／　　　／
　　　　　　　　　　　　(ﾟ∀ﾟ )n　 ／　 　 ／　　　 　 ／　　　／
　　　　　　　　　　　　 o　 ヽ　／　　　／　　　　　／　　　／
　　　　　　∩∩　　　/　 　 ヽ　　∩∩　　　　 ／　　 　／
　　　　＿(*ﾟーﾟ)/)/　　　　　ヽ　(ﾟДﾟ,,∩__／　　　 ／
　　　　＼(ﾉ￣￣￣　　　　　　￣∪￣￣／　　　／　　　　　　　　　　　　　　　　　★
　　　　　 ＼　　　　　　　　　　　　　　 ／　　　／
　　　　　　　＼　　　　　　　　　　　 ／　　　／
　　　　　　　／　　　　　　　　　　　 ＼ 　／　　　　　　　☆
　　　　　 ／　　　　　　　　　　　　　　 ＼
　　　　／＿＿＿　 　　　　　　＿＿_＿__＼
　　　　￣　　　　ヽ　　　　 　/
　　　　　　　　　　 ヽ　　 　 /
　　　　　　　　　　　 ヽ　　/　　　　　☆　　　　　　　　　　　　　　　　★
　　　　　　　　　　　　　ヽ/
`;

const ASCII1 = `　　　　　　　　..◇・。..☆*。
　　　　゜ﾟ･*:..｡.★。◎＠.｡○☆｡..:*･゜
　゜ﾟ･*:..｡.。◯＠☆*･゜★｡｡.:*･☆*･｡..:*･゜
＊｡*..:○★◎:｡☆∂☆▽:｡＠*･★'*･*｡:｡
　　◎＊◇*･｡:◎.｡..★＊★.:☆◇*.:･☆*'
　゜ﾟ･*:..｡.*･＊★☆＿＿☆◎*･｡..:*･゜ ゜
　　　　　　　＼　　　　　 　／　　
　　　　　 　　　＼　　 　／
　　　　　 ∩＿∩＼ ／
　　　　　（　´∀｀）..∞　　
　　　　　/ 　つ つ.△ 　
　　　　o(　　 ﾉ
　　　　　しし'`;

const ASCII2 = `♪　　∩＿∩
　　 （　´∀｀ ）))
　(( (　つ　ヽ、　　　♪　　　　　♪
　　　〉 と/　 )))　　　　　　　　　　　♪
　　（__／^(＿)

　　　　∩,＿∩　♪
　　((　(　　　　)
♪　　 /　　　　)　))　♪　　　　　♪
　((　( 　(　　〈　　　　　　　　　　　　♪
　　　 (＿)^ヽ__）`;

const ASCII3 = `　 　 　 　 　 　　∩＿∩ 　 　
　 　 　 　 　 　 .（*'ω'*）
　 　 　　　　／￣￣￣￣.＼　 　））
　 　 　 　 　|) ○　○　○ （|
　 　 　　　／″　 　　　　　　＼
　 　 　 ／＿＿＿＿＿＿＿＿＼
　（（ 　 ￣ ∪∪ ∪ ∪ ∪∪　￣
　 　 　　　　 /: ￣￣￣￣:＼
　 　 　 　　 /　 　 　　　　　 ＼
　 　 　 　　/　 　 　　　　　 　 ＼
　 　 　 　 /　 　 　　　　　 　 　 ＼
　 　 　 　/　 　 　 ∩ ))　　　　 　＼
　 　　　 /　 　 (( ⊂ 　 |　　　 　　 ＼
　 　　　/　　　 　 　 ﾉ　 |　　　　 　 　＼
　 　　 /　 　 　 　∩∩丿　 　　　　　　＼
　 　　/　　 　Σ(ﾟДﾟ；)⊃　 　　　　　　 ＼
　 　 /　　　 　 　 ∪　 　 ﾊﾆｬーﾝ　 　　　＼

　 　　　　　　　　　∫∬　 　 　 　 　`;

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

const ASCIIlist = [ASCII0, ASCII1, ASCII2, ASCII3];

const randomSong = () => {
    var randomSongTitle = songNames[Math.floor(Math.random() * songNames.length)];
    return randomSongTitle;
    // var audioElement = document.getElementById(id);
    // audioElement.play();
}

// ==============================================================

const getRandomASCII = () => {
    return ASCIIlist[Math.floor(Math.random() * ASCIIlist.length)];
};

// ==========================================================================================================================================
// ==========================================================================================================================================
// ==========================================================================================================================================

function NavBar() {

    // ==============================================

    const [songPlace, setSongPlace] = useState(songNames[0]);

    useEffect(() => setSongPlace(randomSong()), [])

    const changeRandomSong = () => {
        // shuffle array and pick random
        const randomSongName = randomSong();
        setSongPlace(randomSongName);
    };

    // ==============================================

    const [ASCIIplace, setASCIIplace] = useState(ASCII0);

    useEffect(() => setASCIIplace(getRandomASCII()), [])

    const changeRandomASCII = () => {
        // shuffle array and pick random
        const randomASCII = getRandomASCII();
        setASCIIplace(randomASCII);
    };

    const addBunny = () => {
        // const newBunny = <Image src={'/bunnypic.gif'} />;
        // let body = document.querySelector("container");
        // useEffect(() => body.appendChild(newBunny), []);
    }

    return (
        <div className={styles.container}>
            <Head>
                <title>ula bitinaitis</title>
                <meta name="description" content="generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <Draggable>
                <img src="/websitebanner.gif" draggable="false" style={{
                    width: 640 * .75, height: 390 * .75, alt: "ula bitinaitis", objectFit: "cover",
                    onmousedown: "return false", userdrag: "none", position: "relative", top: "50px", left: "100px"
                }} />
            </Draggable>


            <Draggable>
                <div className="littlebutton">
                    <div style={{ position: "relative", top: "-250px", left: "650px" }}>
                        <div className="candywrappink">
                            <a href="/about">about me!</a> ❤
                        </div>
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className="littlebutton">
                    <div style={{ position: "relative", top: "-290px", left: "920px" }}>
                        <div className="candywrapblue">
                            <a href="/coding">coding projects!</a> ❤
                        </div>
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className="littlebutton">
                    <div style={{ position: "relative", top: "-270px", left: "950px" }}>
                        <div className="candywrapyellow">
                            my art! ❤
                        </div>
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className="littlebutton">
                    <div style={{ position: "relative", top: "-360px", left: "700px" }}>
                        <div className="candywrapgreen">
                            <Link href={"https://docs.google.com/document/d/1bw3k0lxT-p5r5ACpsZYpQs_Jy5Di5ITtzwbTkVYPjGo/edit?usp=sharing"}>
                                <a target="_blank">
                                    my resume!</a>
                            </Link>
                            ❤
                        </div>
                    </div>
                </div>
            </Draggable>

            <Draggable>
                <div className="littlebutton" style={{ position: "relative", top: "-450px", left: "1300px" }}>fun things you can do:</div>
            </Draggable>


            <Draggable>
                <div className="littlebutton">
                    <div style={{ position: "relative", top: "-450px", left: "1300px" }}>
                        <div className="candywrapgreen">view my bread recipe ❤</div></div>
                </div>
            </Draggable>



            <Draggable>
                <div className="littlebutton">
                    <div style={{ position: "relative", top: "-450px", left: "1250px" }}>
                        <div className="candywrappurple">
                            <a href="javascript:void(0)" onClick={changeRandomASCII}>
                                change the ASCII ❤</a >
                        </div>
                    </div>
                </div>
            </Draggable>



            <Draggable>
                <div className="littlebutton">
                    <div style={{ position: "relative", top: "-450px", left: "1300px" }}>
                        <div className="candywrappink">
                            <a href="javascript:void(0)" onClick={addBunny}>
                                create a new bunny ❤</a>
                        </div>      </div>
                </div>
            </Draggable>



            <Draggable>
                <div className="littlebutton">
                    <div style={{ position: "relative", top: "-450px", left: "1250px" }}>
                        <div className="candywraporange">
                            <a href="javascript:void(0)" onClick={changeRandomSong}>play a song from one of my friends!</a>❤</div></div></div>
            </Draggable>


            <div class="inside">
                <Draggable>
                    <pre style={{ fontFamily: "MS PGothic", position: "relative", left: "1150px", top: "-460px", maxwidth: "362px", maxheight: "260px" }}>
                        {ASCIIplace}
                    </pre>
                </Draggable>
            </div>

            <div class="inside">
                <Draggable>
                    <pre style={{ fontFamily: "MS PGothic", position: "absolute", left: "1200px", top: "800px", maxwidth: "362px", maxheight: "260px" }}>
                        now playing: {songPlace}
                    </pre>
                </Draggable>
            </div>

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

    )

}

export default NavBar