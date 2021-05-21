import { v4 as uuidv4 } from "uuid";
function chillHop() {
  return [
    {
      name: "Beaver Creek",
      cover: "https://i.scdn.co/image/ab67616d0000b27392ea33b2d11348d692352a33",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=10075",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: true,
    },
    {
      name: "Misha, Jussi Halme",
      cover: "https://i.scdn.co/image/ab67616d0000b2734dbbff68622228d0949f9803",
      artist: "Aso, Middle School, Aviino",
      audio: "https://mp3.chillhop.com/serve.php/?mp3=9248",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "Hears of Mumbai",
      cover: "https://i.ibb.co/86yd9nX/hears-of-mumbai-cover-min.png",
      artist: "The KPS",
      audio: "http://emusic.lt/download.php?id=7802",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
    {
      name: "One Beautiful Composition (2010 Edit)",
      cover: "https://i.ibb.co/JsK2Jyp/one-beutiful-composition-cover-min.jpg",
      artist: "The KPS",
      audio: "http://emusic.lt/download.php?id=9525",
      color: ["#205950", "#2ab3bf"],
      id: uuidv4(),
      active: false,
    },
  ];
}

export default chillHop;
