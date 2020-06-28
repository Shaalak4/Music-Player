var AudFile = /** @class */ (function () {
  function AudFile(name, href) {
    this.name = name;
    this.hreaf = href;
    this.htmlComp =
      '<li class="list-group-item"><p>' +
      name +
      '</p>\n    <audio controls>\n  <source src="' +
      href +
      '" type="audio/mpeg">\n</audio></li>';
  }
  return AudFile;
})();
var addSong = function () {
  var name = document.getElementById("song-name").value;
  var link = document.getElementById("song-link").value;
  var list = document.getElementById("song-list");
  var newSong = new AudFile(name, link);
  list.innerHTML += newSong.htmlComp;
};