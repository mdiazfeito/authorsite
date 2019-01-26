/*!
* Credits:
*
* Font Awesome Free 5.0.13 by @fontawesome - https://fontawesome.com
* License - https://fontawesome.com/license (Icons: CC BY 4.0, Fonts: SIL OFL 1.1, Code: MIT License)
* 
* Random link button- By JavaScript Kit (http://javascriptkit.com)
* Over 300+ free scripts!
* This credit MUST stay intact for use
* 
* jQuery.floatThead
* http://mkoryak.github.io/floatThead/
* Copyright (c) 2012-2017 Misha Koryak.
* Copyrights licensed under the MIT License.
*/

function randomlinks() {
   var iframe = $("#readrandom");
   var myrandom = Math.round(Math.random() * 14)
   var links = new Array()
   links[0] = "https://entropymag.org/the-birds-an-ibis-in-the-bronx/"
   links[1] = "https://dmdujour.wordpress.com/2018/05/01/michael-diaz-feito-cradle-song/"
   links[2] = "https://theairgonautblog.wordpress.com/2018/02/01/shrovetide/"
   links[3] = "https://burrowpress.com/czar-thumbsky-michael-diaz-feito/"
   links[4] = "https://theairgonautblog.wordpress.com/2017/08/01/pentecost/"
   links[5] = "https://www.bigecho.org/starry-night-of-the-soul"
   links[6] = "https://flapperhouse.com/2017/04/13/a-cat-maybe-or-breaking-poetry-by-michael-diaz-feito/"
   links[7] = "https://www.bigecho.org/dying-in-miami-in-the-sun"
   links[8] = "https://futurefire.net/2016.36/fiction/holymanyminds.html"
   links[9] = "https://www.jerseydevilpress.com/?page_id=7060"
   links[10] = "https://www.hinchasdepoesia.com/wp/cradle-song/"
   links[11] = "https://flapperhouse.com/2015/10/31/ewart-fiction-by-michael-diaz-feito/"
   links[12] = "https://www.jerseydevilpress.com/?page_id=%206791"
   links[13] = "https://www.bigecho.org/the-terraformers-swan-song"
   links[14] = "https://www.leopardskinandlimes.com/the-guaxi/"

   document.getElementById('readrandom').src = links[myrandom];
 }
 
var $table = $('table');
$table.floatThead({
    responsiveContainer: function($table){
        return $table.closest('.works');
    }
});

 window.onscroll = function() {
   scrollFunction()
 };

 function scrollFunction() {
   if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
     document.getElementById("myBtn").style.display = "block";
   } else {
     document.getElementById("myBtn").style.display = "none";
   }
 }

 function topFunction() {
   document.body.scrollTop = 0;
   document.documentElement.scrollTop = 0;
 }
