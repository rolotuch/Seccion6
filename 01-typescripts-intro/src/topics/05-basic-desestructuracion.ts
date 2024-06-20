interface AudioPlayer {
  audioVolume: number;
  songDuration: number;
  songCurrentTime: number;
  songVolume: number;
  song: string;  
  details: Details;
}

interface Details {
  author: string;
  year: number;
}

const audioPlayer: AudioPlayer = {
  audioVolume: 90,
  songDuration: 36,
  songCurrentTime: 0,
  songVolume: 50,
  song: "Mess",  
  details: {
    author: "Tiago",
    year: 2010,
  },
};

console.log("song: ", audioPlayer.song);
// la desestructuracion consiste en sacar algunas piezas del objeto
console.log("Desestructuracion:");

const song = 'new Song';
const { song: anotherSong, songDuration: duration } = audioPlayer;
const { author: anotherAuthor} = audioPlayer.details;
const { year } = audioPlayer.details;

console.log('Song: ', anotherSong);
console.log('Duracion: ', duration);
console.log('Autor:', anotherAuthor);
console.log('Año:', year);



export {};
