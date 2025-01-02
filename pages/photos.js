import Draggable from 'react-draggable'
import React from 'react'
import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Photos() {
    return <div>

                    <span class="bubble-text" style={{ overflowY: "auto", float: "left", overflowX: "hidden"}}>
                        <div style={{
                            position: "relative",  width: "100%", fontSize: "22px",
                        }}>

                            <img src="border.gif" style={{ display: "block", width: "900px", height: "10px", marginTop: "10px", marginBottom: "10px" }} />
                            <h1 class="myHeading2">MY CONCERT PHOTOGRAPHY</h1>
                            <img src="border.gif" style={{ display: "block", width: "900px", height: "10px", marginTop: "10px", marginBottom: "10px" }} />

                            i love live music!! i love taking photos of people performing live music!!
                            <br></br>
                            you can find my concert photography instagram <a href="https://www.instagram.com/ulyte.raw/" style={{textDecoration: "underline"}}>here!</a>

                            <img src="border.gif" style={{ display: "block", width: "900px", height: "10px", marginTop: "10px", marginBottom: "10px" }} />

                            <section class="container">
                                <Zoom>
                                    <img
                                        alt="a spiderverse portrait style study... of me!"
                                        src="spiderverseportrait.png"
                                        class="correct" />
                                </Zoom>

                                <Zoom>
                                    <img
                                        alt="poster for a house show!"
                                        src="poster.png"
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
                                        alt="poster for a house show!"
                                        src="posterguh.png"
                                        class="correct" />
                                </Zoom>

                                <Zoom>
                                    <img
                                        alt="poster for a house show!"
                                        src="posterrr.png"
                                        class="correct" />
                                </Zoom>

                                <Zoom>
                                    <img
                                        alt="poster for a house show!"
                                        src="houseshow4.png"
                                        class="correct" />
                                </Zoom>

                                <Zoom>
                                    <img
                                        alt="poster for a house show!"
                                        src="houseshow5.png"
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
                                        alt="poster for my radio show!"
                                        src="spacerocks.png"
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
                                        alt="a drawing of butangel420"
                                        src="https://pbs.twimg.com/media/F3n8-OLbYAAqx9f?format=jpg&name=4096x4096"
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

                                <Zoom>
                                    <img
                                        alt="goofy little cat witch"
                                        src="https://pbs.twimg.com/media/FfPpOBqWQAE3exI?format=jpg&name=medium"
                                        class="correct" />
                                </Zoom>

                                <Zoom>
                                    <img
                                        alt="merchandise for my previous co-op!"
                                        src="coopmerch.png"
                                        class="correct" />
                                </Zoom>
                            </section>

                        </div>
                    </span>
                </div>
}
