(function(){
  angular
    .module("artQuiz")
    .controller("factlistCtrl", factListController);

    function factListController() {
      this.data = artFacts;
    }
  var artFacts = [
    {
      artist: "Andy Warhol",
      artwork_img_url: "https://portlandartmuseum.org/wp-content/uploads/2015/11/Andy-Warhol-Mao.jpg",
      artist_description: "Post War Pop Art",
      wiki_url: "https://en.wikipedia.org/wiki/Andy_Warhol"
    },
    {
      artist: "Jean Michel Basquiat",
      artwork_img_url: "https://guyhepner.com/wp-content/uploads/2015/04/JeanMichelBasquiatErnokEstatePrint-648x650.png",
      artist_description: "Neo Abstract Expressionism",
      wiki_url: "https://en.wikipedia.org/wiki/Jean-Michel_Basquiat"
    },
    {
      artist: "Mark Rothko",
      artwork_img_url: "http://hekint.org/wp-content/uploads/2017/06/Rothko.jpg",
      artist_description: "Post War Abstract Expressionism",
      wiki_url: "https://en.wikipedia.org/wiki/Mark_Rothko"
    },
    {
      artist: "David Hockney",
      artwork_img_url: "https://www.jckonline.com/wp-content/uploads/2018/02/David-Hockney-Exhibit-Pool-and-Steps-Le-Nid-du-Duc_71A22.jpg",
      artist_description: "Contemporary Portrait and Landscape",
      wiki_url: "https://en.wikipedia.org/wiki/David_Hockney"
    }
  ]
})();
