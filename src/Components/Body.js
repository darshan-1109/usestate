import React, { useState } from 'react'
import Image from './Image/virat.jpg'
import ReactPlayer from 'react-player'
const Body = () => {
    const [likes, setLikes] = useState(0) // likes=15
    function count() {
        setLikes(likes + 1);  //(15+1)
    }
    const [text, setText] = useState('')
    function reset() {
        setText('')
    }

    const [fruits, setFruits] = useState([
        { fruit: 'water melon' },
        { fruit: 'apple' },
        {fruit:'mango'}
    ])

    return (
        <div>
            <div>
                <center><img src={Image} alt="images" /> <br />
                <p>likes: {likes}</p>
                {/* destructuring */}
                <button onClick={count}>Like</button></center>
            </div>
            <div style={{ paddingTop: '50px' }}>
               <center><label htmlFor="Name">Name : </label>
                <input type="text" value={text} onChange={(e) => setText(e.target.value)} />
                <p>onutput : {text}</p>
                <button onClick={reset}>Reset</button></center> 
            </div>
            <div style={{ paddingTop: '50px', display: 'flex', justifyContent: 'center', alignItems: 'center', flexDirection: 'column' }}>
                {/* pass down url link in url attribuite */}
                <ReactPlayer url={'https://youtu.be/1PF8wWGu9Pk'} height={200} controls />
                <div>
                    <p>i like this </p>
                </div>
            </div>
        </div>
    )
}
export default Body