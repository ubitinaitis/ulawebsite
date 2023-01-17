import Draggable from 'react-draggable'

export default function About() {

        function makeReal(e) {
                e.target.setAttribute('src', 'melol2.png');
        }

        return <Draggable>
                <div style={{
                        position: "relative", top: "-250px", left: "150px", width: "1000px", fontSize: "22px", overflowY: "auto",
                        height: "400px", paddingRight: "20px"
                }}>
                        <img src="melol.gif" onClick={makeReal} style={{ position: "absolute", width: "225px", right: "150px" }} />
                        hello there! my name is ula! <a href="https://youtu.be/d4z6i3xkra4?t=4" className="other">(OO-la)</a><br></br><br></br> ☆ヾ(*´・∀・)ﾉヾ(・∀・`*)ﾉ☆ <br></br><br></br>i use any pronouns, but she/her is perfectly fine!<br></br><br></br>

                        i'm a sophomore at <a href="https://www.northeastern.edu/" className="other">northeastern university</a><br></br>currently pursuing an honors combined bachelors<br></br>degree in computer science and media arts!<br></br><br></br>

                        i'm particularly interested in web development,<br></br>game development, and the unconventional<br></br>(yet incredible!) uses of virtual reality. i love<br></br>blending code and art--
                        i'd love to discuss anything<br></br>of this matter, from computer graphics to digital art! you can explore the work i've done and the classes i've taken regarding these subjects
                        under my "coding projects" and "resume" sections above.<br></br><br></br>

                        i'm passionate about a whole lot of things! i'm a massive advocate of pursuing interdisciplinary interests, and i'm thrilled to be a part of its current surge in popularity!
                        to me, my CS side is just as important as my art side, to where calling them just "sides" and not one working-together whole feels incorrect...
                        i wouldn't be any part of myself without either of them!<br></br><br></br>i also believe that diverse, inclusive learning environments aren't just a helpful aid, but a necessity!
                        as a gender-nonconforming lesbian, i'm always seeking an environment where i can be surrounded by unique perspectives while still offering my own!<br></br><br></br>
                        some general interests of mine are <a href="https://www.instagram.com/neustudentgarden/" className="other">gardening,</a> doing <a href="https://wrbbradio.org/" className = "other">live radio</a> (listen to my radio show "space rocks" on WRBB 104.9 FM!!),
                        open-world video games, baking mediocre bread, looking at <a href="http://story.ja.utf8art.com/" className="other">ASCII art</a>, and taking care of my <a href="https://twitter.com/snails123456789" className = "other">two pet snails!</a> i 
                        also love my friends more than anything in the world! and apparently, i love ending every sentence with an exclamation mark!!
                        <br></br>
                        <br></br><br></br>

                        you can catch me on <a href="https://github.com/ubitinaitis" className="other" style={{ color: "darkgreen", textDecorationLine: "underline" }}>github</a>
                        , <a href="https://www.linkedin.com/in/ula-bitinaitis-3868a7230/" className="other" style={{ color: "darkblue", textDecorationLine: "underline" }}>Linkedin</a>
                        , and even <a href="https://www.last.fm/user/nyashidos" className="other" style={{ color: "darkred", textDecorationLine: "underline" }}>last.fm</a> (you can see what i'm listening to RIGHT NOW!!)
                </div></Draggable>
}