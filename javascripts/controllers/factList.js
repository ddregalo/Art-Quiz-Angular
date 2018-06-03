(function(){
  angular
    .module("artQuiz")
    .controller("factlistCtrl", factListController);

    factListController.$inject = ['quizMetrics', 'DataService'];

    function factListController(quizMetrics, DataService) {

      var self = this;

      self.quizMetrics = quizMetrics;
      self.data = DataService.artFacts;
      self.activeArtist = {};
      self.changeActiveArtist = changeActiveArtist;
      self.activateQuiz = activateQuiz;
      self.search = "";

      function changeActiveArtist(artist) {
        self.activeArtist = artist;
      }

      function activateQuiz() {
        quizMetrics.changeState(true);
      }
    }
  // var artFacts = [
  //   {
  //     artist: "Andy Warhol",
  //     artwork_img_url: "https://portlandartmuseum.org/wp-content/uploads/2015/11/Andy-Warhol-Mao.jpg",
  //     artist_description: "Post War Pop Art",
  //     wiki_url: "https://en.wikipedia.org/wiki/Andy_Warhol",
  //     artist_summary: "Andy Warhol, born Andrew Warhola; August 6, 1928 – February 22, 1987, was an American artist, director and producer who was a leading figure in the visual art movement known as pop art. His works explore the relationship between artistic expression, celebrity culture, and advertising that flourished by the 1960s, and span a variety of media, including painting, silkscreening, photography, film, and sculpture. Some of his best known works include the silkscreen paintings Campbell's Soup Cans (1962) and Marilyn Diptych (1962), the experimental film Chelsea Girls (1966), and the multimedia events known as the Exploding Plastic Inevitable (1966–67)."
  //   },
  //   {
  //     artist: "Jean Michel Basquiat",
  //     artwork_img_url: "https://guyhepner.com/wp-content/uploads/2015/04/JeanMichelBasquiatErnokEstatePrint-648x650.png",
  //     artist_description: "Neo Abstract Expressionism",
  //     wiki_url: "https://en.wikipedia.org/wiki/Jean-Michel_Basquiat",
  //     artist_summary: "Jean-Michel Basquiat, born December 22, 1960 – August 12, 1988,  was an American artist. Basquiat first achieved fame as part of SAMO, an informal graffiti duo who wrote enigmatic epigrams in the cultural hotbed of the Lower East Side of Manhattan during the late 1970s where the hip hop, punk, and street art movements had coalesced. By the 1980s, he was exhibiting his neo-expressionist paintings in galleries and museums internationally. The Whitney Museum of American Art held a retrospective of his art in 1992. Basquiat's art focused on suggestive dichotomies, such as wealth versus poverty, integration versus segregation, and inner versus outer experience. He appropriated poetry, drawing, and painting, and married text and image, abstraction, figuration, and historical information mixed with contemporary critique."
  //   },
  //   {
  //     artist: "Mark Rothko",
  //     artwork_img_url: "http://hekint.org/wp-content/uploads/2017/06/Rothko.jpg",
  //     artist_description: "Post War Abstract Expressionism",
  //     wiki_url: "https://en.wikipedia.org/wiki/Mark_Rothko",
  //     artist_summary: "Mark Rothko, born Markus Yakovlevich Rothkowitz on September 25, 1903 – February 25, 1970, was an American painter of Russian Jewish descent. Although Rothko himself refused to adhere to any art movement, he is generally identified as an abstract expressionist. His interest was as he puts it: '...only in expressing basic human emotions—tragedy, ecstasy, doom, and so on. And the fact that a lot of people break down and cry when confronted with my pictures shows that I can communicate those basic human emotions…The people who weep before my pictures are having the same religious experience I had when I painted them. And if you, as you say, are moved only by their color relationship, then you miss the point.'"
  //   },
  //   {
  //     artist: "David Hockney",
  //     artwork_img_url: "https://www.jckonline.com/wp-content/uploads/2018/02/David-Hockney-Exhibit-Pool-and-Steps-Le-Nid-du-Duc_71A22.jpg",
  //     artist_description: "Contemporary Portrait and Landscape",
  //     wiki_url: "https://en.wikipedia.org/wiki/David_Hockney",
  //     artist_summary: "David Hockney, OM, CH, RA (born 9 July 1937) is an English painter, draftsman, printmaker, stage designer and photographer. An important contributor to the pop art movement of the 1960s, he is considered one of the most influential British artists of the 20th century. Hockney has owned a home and studio in Bridlington, London, and two residences in California, where he has lived on and off since 1964: one in the Hollywood Hills, one in Malibu, and an office and archives on Santa Monica Boulevard[4] in West Hollywood, California. Hockney creates his work about the people and places in his world and is known for his eclectic variety of output from paintings and photography to digital iPad drawings."
  //   }
  // ];
})();
