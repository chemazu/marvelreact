import React, { Component } from 'react'
import vslogo from './images/vs-logo.png'
import thor from './thorAudio.mp3'
//import win from './youWin.png'
import './choosePowers.css'
class ChoosePowers extends Component {
    constructor(){
        super()
        this.state={
            characters :[],
            characterComic:[]
        }
    }
    getComics=(name)=>{
        const characterUrl =`http://gateway.marvel.com/v1/public/characters?name=${name}&limit=3&ts=1&apikey=2169023c4c0e7cb12d561bafd4a05d10&hash=5b2fef40aaf64bbe0990161e2b3e2de7`//name's Character
        const comicUrl =`https://gateway.marvel.com:443/v1/public/comics?title=${name}&limit=3&ts=1&apikey=2169023c4c0e7cb12d561bafd4a05d10&hash=5b2fef40aaf64bbe0990161e2b3e2de7` //name's Comics
        
        //FETCHING CHARACTERS

        fetch(characterUrl)
        .then(charRes=>charRes.json())
        .then(charData=>{ let characters = charData.data.results.map((singleCharacter)=>
            {return(
                    <div className='characterWrapper'>
                        <h1>You have Selected {singleCharacter.name}</h1>
                        <div className='imageText'>
                            <img src= {singleCharacter.thumbnail.path+'/portrait_uncanny.'+singleCharacter.thumbnail.extension} alt='heroImage'></img>
                            <p>{singleCharacter.description}</p>
                        </div>
                        <img src = {vslogo} className ='versus' alt='versus' ></img>
                        <h3 className='learn'>LEARN ABOUT YOUR FIGHTER</h3>
                    </div>  
                )})
            this.setState({characters:characters})
        })

        //FETCHING COMIC BOOKS

        fetch(comicUrl)
        .then(comicRes=>comicRes.json())
        .then(comicData=>{let comicResult= comicData.data.results.map((singleComic)=>
            {return(
                    <div key={singleComic.id}className='comicWrapper'>
                        <h1>{singleComic.title}</h1>
                        <a href={singleComic.urls[0].url}><img src= {singleComic.thumbnail.path+'/portrait_medium.'+singleComic.thumbnail.extension} alt='heroComic'></img></a>
                        <audio src={thor} autoPlay/>
                    </div>)})
            this.setState({characterComic:comicResult})
        })
    }
    getSelectedItems = () => { 
        let elements = document.getElementsByClassName('selectVal');
        let result = [];
        for (let i = 0; i < elements.length; i++) {
        let element = elements[i];
        let strSel = element.options[element.selectedIndex].value ;
          result.push(strSel); // Adds users selection
        }
 	    let resultString = result.join('') // converts the Array to a string without commas  |so conditionals can be set
        //Handles  User Selection
        if(resultString==='AD'){this.getComics('Iron%20Man')}
        if(resultString==='AE'){this.getComics('Captain%20America')}
        if(resultString==='AF'){this.getComics('Black%20Widow')}
        if(resultString==='BD'){this.getComics('Thor')}
        if(resultString==='BE'){this.getComics('Spider-Man')}
        if(resultString==='BF'){this.getComics('Falcon')}
        if(resultString==='CD'){this.getComics('Hulk')}
        if(resultString==='CE'){this.getComics('Scarlet%20Witch')}
        if(resultString==='CF'){this.getComics('Hawkeye')}
    }
    render() {
        return (
            <React.Fragment>
                <div className='introDiv'>
                    <h1>FOOLISH MORTAL!!! YOU THINK YOU CAN DEFEAT THE MAD TITAN THANOS</h1>
                    <h1>I WILL HUMOR YOU, CHOOSE A FIGHTER </h1>
                    <select id="select1" className="selectVal">
                        <option value="A">TIER 1 </option>
                        <option value="B" selected="selected">TIER 2</option>
                        <option value="C">TIER 3</option>
                    </select>
                    <select id="select2" className="selectVal">
                        <option value="D">Strength</option>
                        <option value="E" selected="selected">Special</option>
                        <option value="F">Skill</option>
                    </select>
                </div>
                <button className="start" style={{verticalAlign: 'baseline'}} onClick={this.getSelectedItems}><span>FIGHT !! </span></button>
                <div className='apiResults'>
                    <div className='characterContainer'>{this.state.characters}</div>
                    <div className='comicContainer'>{this.state.characterComic}</div>
                </div>
            </React.Fragment>
        )
    }
}
export default ChoosePowers