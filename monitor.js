const _1 = "https://static1.squarespace.com/static/50fb1738e4b0dcfb3cb27d86/50fc7ad6e4b0dc8c8e2ead18/50fd9c0de4b000014e7cdc66/1358797838888/rabbi.png?format=1000w";
const _2 = "https://icons-for-free.com/free-icons/png/512/401357.png";
const _3 = "https://cdn0.iconfinder.com/data/icons/hell/500/satan-512.png";
const _4 = "https://cdn0.iconfinder.com/data/icons/black-religious-icons/256/Devil.png";
const _5 = "https://cdn0.iconfinder.com/data/icons/love-and-romance-18/52/26-512.png";
const _6 = "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRggATtvLA-Zo5hett8xgd5TS45C91_YT60NuTZuKEiNcswYAnV2Q";
const _7 = _1;
const _8 = _2;
const _9 = _3;
const _10 = _4;

(function () {
      let flag = false;
      let time = 0;
      let totalTime = 0;
      let notify = true;
      setInterval(function() { 
          if(document.querySelector('._315-i')) {
              if(flag) {
              	let name = document.querySelectorAll("#main > header > div>div>div>span")[1].textContent;
                if(notify) {
	                let notification = new Notification(name+" is online!", {icon: this.getIcon(), body: `${totalTime} mins online in total`});
                	notification.onclick = () => {
                		notify = !notify;
                	}
                }
                console.log(name);
	            time = Date();
	            console.log(time.slice(0,24));
	            flag = false;
              }
          } else {
            flag = true;
            if(time!==0) {
              let dur = Date().slice(19,21) - time.slice(19,21);
              console.log(dur +" mins online");
              totalTime += dur === 0 ? 0.5 : dur;
              time = 0;
            }
          }
     }, 3000)
})()

function getIcon() {
	let icon;
	const random = Math.ceil(Math.random()*10);
	switch(random) {
        case 1: icon = _1;
              break;
       	case 2: icon = _2;
              break;
       	case 3: icon = _3;
              break;
        case 4: icon = _4;
              break;
        case 5: icon = _5;
              break;
        case 6: icon = _6;
              break;
       	case 7: icon = _7;
              break;
        case 8: icon = _8;
              break;
        case 9: icon = _9;
              break;
        case 10: icon = _10;
    };
    return icon;
}
