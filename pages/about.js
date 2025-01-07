import Draggable from 'react-draggable'

export default function About() {

        function makeReal(e) {
                e.target.setAttribute('src', 'melol2.png');
        }

        return <div>
  
                                        <span className="bubble-text" style={{ overflowY: "auto", float: "left" }}>
                                                <img src="melol.gif" onClick={makeReal} style={{ float: "left" }} />
                                                hi i'm ula! <a href="https://youtu.be/d4z6i3xkra4?t=4" style={{ color: "hotpink", textDecorationLine: "underline" }}>(OO-la)</a><br></br><br></br> ☆ヾ(*´・∀・)ﾉヾ(・∀・`*)ﾉ☆ <br></br><br></br>i use both she/her and he/him pronouns (either is fine!)<br></br><br></br>

                                                i'm a senior at <a href="https://www.northeastern.edu/" className="other" style={{ color: "darkred", textDecorationLine: "underline" }}>northeastern university</a> currently pursuing an honors combined bachelors<br></br>degree in computer science and media arts!<br></br><br></br>

                                                my main interests are web development, game development, and the interdisciplinary combinations of code and digital art! <br></br><br></br>

                                                when i'm not making silly little websites, my time is spent taking <a href="https://www.instagram.com/ulyte.raw" style={{ color: "purple", textDecorationLine: "underline" }}>concert photography,</a> DJ-ing, drawing digital art,
                                                and kissing my cat <a href="https://www.instagram.com/honey___________bun/" style={{ color: "orange", textDecorationLine: "underline" }}>honeybun</a> on her forehead!

                                                you can catch me on <a href="https://github.com/ubitinaitis" className="other" style={{ color: "darkgreen", textDecorationLine: "underline" }}>github</a>
                                                , <a href="https://www.linkedin.com/in/ula-bitinaitis-3868a7230/" className="other" style={{ color: "darkblue", textDecorationLine: "underline" }}>Linkedin</a>
                                                , and even <a href="https://www.last.fm/user/nyashidos" className="other" style={{ color: "darkred", textDecorationLine: "underline" }}>last.fm</a> (you can see what i'm listening to RIGHT NOW!!)
                                        </span>
</div>
}