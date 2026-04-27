const url = location.href;
if(url.includes('scratch.mit.edu')){
    if(url.includes('users')){
        (async () => {
          if(!(document.querySelector('#SUuserID'))){
              const u = location.pathname.split("/")[2];
              const r = await fetch("https://api.scratch.mit.edu/users/" + u);
              const d = await r.json();
            
              const el = document.querySelector('.header-text .profile-details');
            
              const current = document.createElement('span');
              current.textContent = `UserID: ${d.id}`;
              current.style.color = "#888";
              current.id = 'SUuserID';
              el.append(current);
            }
        })();
    }
    if(url.includes('projects')){
        (() => {
            if(!(document.querySelector('#SUTurbutton'))){
              const a = document.createElement('a');
              a.href = location.href.replace('scratch.mit.edu/projects','turbowarp.org');
              a.target = '_blank';
              a.id = 'SUTurbutton';
            
              const img = document.createElement('img');
              img.src = 'https://ko-math.github.io/ScratchUtil/t.png';
              img.style.width = '50px';
              img.style.height = '50px';
              img.style.position = 'relative';
              img.style.left = '10px';
              img.style.borderRadius = '15px';
            
              a.append(img);
            
              const target = document.querySelector('#view .preview .inner :first-child');
              if (target) target.append(a);
            }
        })();
    }
    const message = true;
    /*
    if(message){
        (() => {
            let el = document.createElement('button');
            el.style.position = 'fixed';
            el.style.top = '50px';
            el.style.right = '25px';
            el.style.width = '75px';
            el.style.height = '50px';
            el.style.opacity = '0.75';
            el.style.color = '#000000';
            el.style.borderRadius = '15px';
            el.id = 'SUmessageButton';
            document.body.append(el);
            el = document.createElement('script');
            el.textContent = `
                const button = document.querySelector('#SUmessageButton');
                button.addEventListener('click',async function(){
                    //let i = document.createElement('input');document.body.append(i);
                    alert(await fetch('https://api.scratch.mit.edu/users/ko-math/messages/count'));
                });
            `;
            document.body.append(el);
        })();
    }
    */
} else {
    alert('Scratchで開いてください');
}






