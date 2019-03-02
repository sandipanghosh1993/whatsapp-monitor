(function () {
      let flag = false;
      let time = 0;
      setInterval(function() { 
          if(document.querySelector('.O90ur')) {
              if(flag) {
                let name = document.querySelectorAll("#main > header > div>div>div>span")[1].textContent;
                let notification = new Notification(name+" is online!");
                console.log(name);
                time = Date();
                console.log(time.slice(0,24));
                flag = false;
              }
          } else {
            flag = true;
            if(time!==0) {
              console.log(Date().slice(19,21) - time.slice(19,21) +" mins online");
              time = 0;
            }
          }
     }, 3000)
})()
