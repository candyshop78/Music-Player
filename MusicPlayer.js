var musicPlayer = document.getElementById('musicPlayer');
var previousSong;
var currentSong;
var songChanged = 0;
var listItems = [];
var fileChooser = document.getElementById('fileInput');
var songEnded = 0;

listItems = document.getElementsByClassName('listItem');

musicPlayer.onended= switchToNextSong;

fileChooser.onclick = addSong;

function addSong()
{
    console.log(fileChooser.value); //Couldn't find a way to get the exact path.
}


function switchToNextSong()
{
    if(songEnded<=listItems.length)
        songEnded++;
    else songEnded =0;
    musicPlayer.src = listItems[songEnded];
    musicPlayer.play();
}



playList.addEventListener("click",function(e)
{
    e.preventDefault();
})


for(i=0;i<listItems.length;i++)
 {
        listItems[i].onclick = selectSong;
 }



function selectSong()
{
    if(songChanged>0)
    {
        previousSong = currentSong;
        previousSong.style.color = "black"; //To restore the color to black as the song is unselected.
    }
    currentSong = this;
    currentSong.style.color = "cyan";
    // currentSongSource.setAttribute('src', this.href); another way to change the song.
    musicPlayer.src = this.href; //Shorter Statement.
    musicPlayer.play();
    songChanged++;
    
    //console.log(this.innerHTML);
    
}

