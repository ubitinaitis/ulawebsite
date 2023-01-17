import Draggable from 'react-draggable'
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Art() {
    return <Draggable>
        <div style={{
            position: "relative", top: "-250px", left: "100px", width: "1000px", fontSize: "22px", overflowY: "auto",
            height: "400px", 
        }}>
            i love to draw!! click on any of the drawings to enlarge them!

            <section class="container">
                <Zoom>
                    <img
                        alt="poster for a house show!"
                        src="poster.png"
                        class="correct" />
                </Zoom>

                <Zoom>
                    <img
                        alt="two girls!"
                        src="girls.jpg"
                        class="correct" />
                </Zoom>
                
                <Zoom>
                    <img
                        alt="poster for a house show!"
                        src="monster.png"
                        class="correct" />
                </Zoom>

                <Zoom>
                    <img
                        alt="my friend mckenna as pixar star lightning mcqueen"
                        src="https://pbs.twimg.com/media/FazPq51WAAEVHAT?format=jpg&name=4096x4096"
                        class="correct" />
                </Zoom>

                <Zoom>
                    <img
                        alt="goofy little cat witch"
                        src="https://pbs.twimg.com/media/FfPpOBqWQAE3exI?format=jpg&name=medium"
                        class="correct" />
                </Zoom>

                <Zoom>
                    <img
                        alt="me as a witch!"
                        src="https://pbs.twimg.com/media/FZxK1whWQAITjDQ?format=jpg&name=4096x4096"
                        class="correct" />
                </Zoom>

                <Zoom>
                    <img
                        alt="tsukomono sana from hololive!"
                        src="https://pbs.twimg.com/media/FZH2eisXwAE894l?format=png&name=900x900"
                        class="correct" />
                </Zoom>

                <Zoom>
                    <img
                        alt="VYT-24 from VIVINOS' series \'Pink B!tch Club!'"
                        src="https://pbs.twimg.com/media/FL1hSgEUcAcmPJ4?format=jpg&name=4096x4096"
                        class="correct" />
                </Zoom>

                <Zoom>
                    <img
                        alt="my friend ren for their new song!"
                        src="https://pbs.twimg.com/media/FL0uq-eVECIbH4D?format=jpg&name=large"
                        class="correct" />
                </Zoom>

                <Zoom>
                    <img
                        alt="pixielocks!"
                        src="https://pbs.twimg.com/media/FI9UykLXsAYgZMi?format=jpg&name=4096x4096"
                        class="correct" />
                </Zoom>

                <Zoom>
                    <img
                        alt="phosphophylite from land of the lustrous!"
                        src="https://pbs.twimg.com/media/FI80PoCXwAAZxf8?format=jpg&name=4096x4096"
                        class="correct" />
                </Zoom>

                <Zoom>
                    <img
                        alt="feferi from homestuck!"
                        src="https://pbs.twimg.com/media/FfPpdNuWAAEYLG0?format=jpg&name=medium"
                        class="correct" />
                </Zoom>

                <Zoom>
                    <img
                        alt="just a robot girl mimicked after clouds!"
                        src="https://pbs.twimg.com/media/FbOzJEnWIAAhNPE?format=jpg&name=large" class="correct" />
                </Zoom>

                <Zoom>
                    <img
                        alt="stressed out yellow girl lol"
                        src="https://pbs.twimg.com/media/Fa1OtzbXgAA02sZ?format=jpg&name=medium"
                        class="correct" />
                </Zoom>
            </section>

        </div></Draggable>
}