class AudFile {
    name: String;
    hreaf: String;
    htmlComp: String;
    constructor(name: String, href: String) {
      this.name = name;
      this.hreaf = href;
      this.htmlComp = `<li class="list-group-item"><p>${name}</p>
      <audio controls>
    <source src="${href}" type="audio/mpeg">
  </audio></li>`;
    }
  }
  
  const addSong = () => {
    let name = (<HTMLInputElement>document.getElementById("song-name")).value;
    let link = (<HTMLInputElement>document.getElementById("song-link")).value;
    let list = document.getElementById("song-list");
    let newSong = new AudFile(name, link);
    list.innerHTML += newSong.htmlComp;
  };
  
  export {};