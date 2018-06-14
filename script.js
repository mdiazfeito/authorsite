/*
* Credits:
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
   var myrandom = Math.round(Math.random() * 19)
   var links = new Array()
   links[0] = "https://entropymag.org/the-birds-an-ibis-in-the-bronx/"
   links[1] = "https://dmdujour.wordpress.com/2018/05/01/michael-diaz-feito-cradle-song/"
   links[2] = "https://theairgonautblog.wordpress.com/2018/02/01/shrovetide/"
   links[3] = "http://www.bewilderingstories.com/issue722/relic-mongers1.html"
   links[4] = "http://burrowpress.com/czar-thumbsky-michael-diaz-feito/"
   links[5] = "https://theairgonautblog.wordpress.com/2017/08/01/pentecost/"
   links[6] = "http://www.bigecho.org/starry-night-of-the-soul"
   links[7] = "http://journal.gonelawn.net/issue24/Diaz.php"
   links[8] = "https://flapperhouse.com/2017/04/13/a-cat-maybe-or-breaking-poetry-by-michael-diaz-feito/"
   links[9] = "http://www.bigecho.org/dying-in-miami-in-the-sun"
   links[10] = "http://futurefire.net/2016.36/fiction/holymanyminds.html"
   links[11] = "http://www.jerseydevilpress.com/?page_id=7060"
   links[12] = "http://www.acentosreview.com/november2015/michael-diaz-feito.html"
   links[13] = "http://tnypress.tumblr.com/post/128722123512/the-guaxi-by-michael-d%C3%ADaz-feito-it-was-again-too"
   links[14] = "http://www.hinchasdepoesia.com/wp/cradle-song/"
   links[15] = "https://flapperhouse.com/2015/10/31/ewart-fiction-by-michael-diaz-feito/"
   links[16] = "http://www.jerseydevilpress.com/?page_id=%206791"
   links[17] = "http://tnypress.tumblr.com/post/122355163982/herminia-by-michael-d%C3%ADaz-feito-el-acto-de-matar"
   links[18] = "http://www.acentosreview.com/february2015/michael-diaz-feito.html"
   links[19] = "http://tnypress.tumblr.com/post/118800076267/construction-101-by-michael-d%C3%ADaz-feito"

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
