let data =  [
    {
      "title": "Work",
      "timeframes": {
        "daily": {
          "current": 5,
          "previous": 7
        },
        "weekly": {
          "current": 32,
          "previous": 36
        },
        "monthly": {
          "current": 103,
          "previous": 128
        }
      }
    },
    {
      "title": "Play",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 2
        },
        "weekly": {
          "current": 10,
          "previous": 8
        },
        "monthly": {
          "current": 23,
          "previous": 29
        }
      }
    },
    {
      "title": "Study",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 7
        },
        "monthly": {
          "current": 13,
          "previous": 19
        }
      }
    },
    {
      "title": "Exercise",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 1
        },
        "weekly": {
          "current": 4,
          "previous": 5
        },
        "monthly": {
          "current": 11,
          "previous": 18
        }
      }
    },
    {
      "title": "Social",
      "timeframes": {
        "daily": {
          "current": 1,
          "previous": 3
        },
        "weekly": {
          "current": 5,
          "previous": 10
        },
        "monthly": {
          "current": 21,
          "previous": 23
        }
      }
    },
    {
      "title": "Self Care",
      "timeframes": {
        "daily": {
          "current": 0,
          "previous": 1
        },
        "weekly": {
          "current": 2,
          "previous": 2
        },
        "monthly": {
          "current": 7,
          "previous": 11
        }
      }
    }
   ]

screen.addEventListener("resize", slides);

  function slides(){
    var cards = document.getElementsByClassName('bottom-card-data'); 
    for(card of cards){
     if(window.innerWidth > 600) {
        card.style.height = "200px";
        console.log(window.innerWidth);
     } else if(window.innerWidth <= 600) { 
        card.style.height = "130px";
        console.log(window.innerWidth);
      }
    }
   }

   function daily(){
    console.log(data);
    slides();
    document.getElementById("work-data-now").innerHTML = JSON.stringify(data[0].timeframes.daily.current) + 'hrs';
    document.getElementById("work-data-last").innerHTML = 'Yesterday - '+JSON.stringify(data[0].timeframes.daily.previous) + 'hrs';

    document.getElementById("play-data-now").innerHTML = JSON.stringify(data[1].timeframes.daily.current) + 'hrs';
    document.getElementById("play-data-last").innerHTML = 'Yesterday - '+JSON.stringify(data[1].timeframes.daily.previous) + 'hrs';

    document.getElementById("study-data-now").innerHTML = JSON.stringify(data[2].timeframes.daily.current) + 'hrs';
    document.getElementById("study-data-last").innerHTML = 'Yesterday - '+JSON.stringify(data[2].timeframes.daily.previous) + 'hrs';

    document.getElementById("ex-data-now").innerHTML = JSON.stringify(data[3].timeframes.daily.current) + 'hrs';
    document.getElementById("ex-data-last").innerHTML = 'Yesterday - '+JSON.stringify(data[3].timeframes.daily.previous) + 'hrs';

    document.getElementById("social-data-now").innerHTML = JSON.stringify(data[4].timeframes.daily.current) + 'hrs';
    document.getElementById("social-data-last").innerHTML = 'Yesterday - '+JSON.stringify(data[4].timeframes.daily.previous) + 'hrs';
    
    document.getElementById("selfcare-data-now").innerHTML = JSON.stringify(data[5].timeframes.daily.current) + 'hrs';
    document.getElementById("selfcare-data-last").innerHTML = 'Yesterday - '+JSON.stringify(data[5].timeframes.daily.previous) + 'hrs';
    
   }
   function weekly(){
    console.log(data);
    slides();
    document.getElementById("work-data-now").innerHTML = JSON.stringify(data[0].timeframes.weekly.current) + 'hrs';
    document.getElementById("work-data-last").innerHTML = 'Last Week - '+JSON.stringify(data[0].timeframes.weekly.previous) + 'hrs';

    document.getElementById("play-data-now").innerHTML = JSON.stringify(data[1].timeframes.weekly.current) + 'hrs';
    document.getElementById("play-data-last").innerHTML = 'Last Week - '+JSON.stringify(data[1].timeframes.weekly.previous) + 'hrs';

    document.getElementById("study-data-now").innerHTML = JSON.stringify(data[2].timeframes.weekly.current) + 'hrs';
    document.getElementById("study-data-last").innerHTML = 'Last Week - '+JSON.stringify(data[2].timeframes.weekly.previous) + 'hrs';

    document.getElementById("ex-data-now").innerHTML = JSON.stringify(data[3].timeframes.weekly.current) + 'hrs';
    document.getElementById("ex-data-last").innerHTML = 'Last Week - '+JSON.stringify(data[3].timeframes.weekly.previous) + 'hrs';

    document.getElementById("social-data-now").innerHTML = JSON.stringify(data[4].timeframes.weekly.current) + 'hrs';
    document.getElementById("social-data-last").innerHTML = 'Last Week - '+JSON.stringify(data[4].timeframes.weekly.previous) + 'hrs';
    
    document.getElementById("selfcare-data-now").innerHTML = JSON.stringify(data[5].timeframes.weekly.current) + 'hrs';
    document.getElementById("selfcare-data-last").innerHTML = 'Last Week - '+JSON.stringify(data[5].timeframes.weekly.previous) + 'hrs';
    
   }

   function monthly(){
    console.log(data);
    slides();
    document.getElementById("work-data-now").innerHTML = JSON.stringify(data[0].timeframes.monthly.current) + 'hrs';
    document.getElementById("work-data-last").innerHTML = 'Last Month - '+JSON.stringify(data[0].timeframes.monthly.previous) + 'hrs';

    document.getElementById("play-data-now").innerHTML = JSON.stringify(data[1].timeframes.monthly.current) + 'hrs';
    document.getElementById("play-data-last").innerHTML = 'Last Month - '+JSON.stringify(data[1].timeframes.monthly.previous) + 'hrs';

    document.getElementById("study-data-now").innerHTML = JSON.stringify(data[2].timeframes.monthly.current) + 'hrs';
    document.getElementById("study-data-last").innerHTML = 'Last Month - '+JSON.stringify(data[2].timeframes.monthly.previous) + 'hrs';

    document.getElementById("ex-data-now").innerHTML = JSON.stringify(data[3].timeframes.monthly.current) + 'hrs';
    document.getElementById("ex-data-last").innerHTML = 'Last Month - '+JSON.stringify(data[3].timeframes.monthly.previous) + 'hrs';

    document.getElementById("social-data-now").innerHTML = JSON.stringify(data[4].timeframes.monthly.current) + 'hrs';
    document.getElementById("social-data-last").innerHTML = 'Last Month - '+JSON.stringify(data[4].timeframes.monthly.previous) + 'hrs';
    
    document.getElementById("selfcare-data-now").innerHTML = JSON.stringify(data[5].timeframes.monthly.current) + 'hrs';
    document.getElementById("selfcare-data-last").innerHTML = 'Last Month - '+JSON.stringify(data[5].timeframes.monthly.previous) + 'hrs';
    
  }