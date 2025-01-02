
import Draggable from 'react-draggable'

import Zoom from 'react-medium-image-zoom'
import 'react-medium-image-zoom/dist/styles.css'

export default function Coding() {
    return <div>

                    <span class="bubble-text" style={{ overflowY: "auto", float: "left", overflowX: "hidden"}}>
                        <div style={{
                            position: "relative",  width: "100%", fontSize: "22px",
                        }}>

            <img src="border.gif" style={{ display: "block", width: "900px", height: "10px", marginTop: "10px", marginBottom: "10px" }} />
            <h1 class="myHeading2">COMPLETE:</h1>
            <img src="border.gif" style={{ display: "block", width: "900px", height: "10px", marginTop: "10px", marginBottom: "10px" }} />

            <a href="/"><h1 class="myHeading" style={{ textDecoration: "underline" }}>this website!</h1></a>⠀❤
            <h1 class="myHeading2">HTML, CSS, Javascript/React</h1>
            you are here! i always consider this website a work in progress-- chances are, you're going to visit this later noticing that some things have changed...
            this uses the next.js framework! i used the standard web development languages (CSS, HTML, and javascript with React)
            <img src="border.gif" style={{ display: "block", width: "900px", height: "10px", marginTop: "10px", marginBottom: "10px" }} />
            <a href="https://github.com/zyelsky/databaseProj"><h1 class="myHeading" style={{ textDecoration: "underline" }}>budgeting app database MVP</h1></a>⠀❤
            <h1 class="myHeading2">SQL, DataGrip, Python, Docker, Flask, Appsmith</h1>
            designed and implemented a REST API in order to create a database-driven budgeting software product MVP (minimum viable product)... currently working on providing an interactive demo through appsmith!
            <img src="border.gif" style={{ display: "block", width: "900px", height: "10px", marginTop: "10px", marginBottom: "10px" }} />
            <a href="https://github.com/ubitinaitis/rgbheadband"><h1 class="myHeading" style={{ textDecoration: "underline" }}>rgb neopixel headband</h1></a>⠀❤
            <h1 class="myHeading2">Python, Arduino, 3D Printing, messy soldering...</h1>

            <Zoom><img src="/headband1.png" style={{ height: "350px" }} /></Zoom>
            <br></br>
            inspired by the light-up rave choker of my lovely friend <a href='https://breq.dev/projects/outshine' style={{textDecoration: "underline" }}>brooke</a>, i wanted to make a customizeable RGB headband!
            i did this by attaching a neopixel strip to a headband,
            soldered it to an adafruit bluefruit feather arduino, and 3d printing a case to keep the arduino, battery, and other components
            secured and safe to my head. then, i coded the arduino so than when the power is connected and the board is connected to the bluefruit
            app on my phone, pressing different controls yields different lighting effects!
            <img src="border.gif" style={{ display: "block", width: "900px", height: "10px", marginTop: "10px", marginBottom: "10px" }} />
            <a href="https://nyashidos.itch.io/moonflower"><h1 class="myHeading" style={{ textDecoration: "underline" }}>moonflower, a visual novel</h1></a>⠀❤
            <h1 class="myHeading2">RenPy (Python)</h1>
            through talking to a flower and its beloved moon, you'll decide the fate of the planet you find yourself on! a visual novel i made for class! written, drawn, and coded by me!
            <img src="border.gif" style={{ display: "block", width: "900px", height: "10px", marginTop: "10px", marginBottom: "10px" }} />
            <a href="https://github.com/ubitinaitis/aliceplou-bot"><h1 class="myHeading" style={{ textDecoration: "underline" }}>alice phoebe lou twitter bot</h1></a>⠀❤
            <h1 class="myHeading2">Python, Tweepy (Twitter API)</h1>
            a little twitter bot i made that tweets lyrics from the artist alice phoebe lou every hour! i made this using python (alongside tweepy,
            the twitter python API) and deployed it using railway! i previously used heroku, but as of december 2023, they cut their free trial program... if she's no longer
            posting any lyrics, that means my free railway hours were used up... LOL
            <img src="border.gif" style={{ display: "block", width: "900px", height: "10px", marginTop: "10px", marginBottom: "10px" }} />
            <h1 class="myHeading" style={{ textDecoration: "underline" }}>mini photoshop</h1>⠀❤
            <h1 class="myHeading2">Java</h1>
            a fun class project-- a fully working image processing program! it can take file text inputs, or you can work with a responsive UI, to upload, edit, and save images! it uses a model-view-controller framework and command pattern OOD!
            <img src="border.gif" style={{ display: "block", width: "900px", height: "10px", marginTop: "10px", marginBottom: "10px" }} />
            <h1 class="myHeading" style={{ textDecoration: "underline" }}>automatic maze building + solving</h1>⠀❤
            <h1 class="myHeading2">Java</h1>
            as said on the packaging, this program visualizes DFS and BFS solutions on randomly generated sets of mazes! the user also has the option to traverse the maze themselves and try to match the most optimal moves necessary to reach the end!
            <img src="border.gif" style={{ display: "block", width: "900px", height: "10px", marginTop: "10px", marginBottom: "10px" }} />
            IN PROGRESS:
            <img src="border.gif" style={{ display: "block", width: "900px", height: "10px", marginTop: "10px", marginBottom: "10px" }} />
            <h1 class="myHeading" style={{ textDecoration: "underline" }}>iquiform</h1>⠀❤ <br></br>
            i'd like to design a "silent art gallery" social media website! a social media platform dedicated for art hosting, but lacking the discourse
            commonly found on platforms like twitter/tumblr/artstation/deviantart/etc. how does it lack this discourse? there are no words at all on this website!
            this is a big project i'm trying to work on on my own!
            <img src="border.gif" style={{ display: "block", width: "900px", height: "10px", marginTop: "10px", marginBottom: "10px" }} />
        </div>
        </span>
        </div>
}


