(function(){
  var phases=[
    ["Anagen","2 to 7 years","Follicles actively build new hair. About 85% of your hair is here at any time. Most treatments aim to keep follicles in this phase longer."],
    ["Catagen","about 2 weeks","The follicle shrinks and stops producing hair. This short phase is a hand-over between growth and rest."],
    ["Telogen","about 3 months","The hair rests and then sheds so a new one can start. Heavy shedding often means too many hairs entered this phase at once."]
  ];
  var tabs=document.querySelectorAll('.tabs button'),arcs=document.querySelectorAll('.arc');
  function show(i){
    document.getElementById('ph-name').textContent=phases[i][0];
    document.getElementById('ph-time').textContent=phases[i][1];
    document.getElementById('ph-text').textContent=phases[i][2];
    tabs.forEach(function(t,n){t.setAttribute('aria-selected',n===i)});
    arcs.forEach(function(a,n){a.classList.toggle('dim',n!==i)});
  }
  tabs.forEach(function(t){t.addEventListener('click',function(){show(+t.dataset.phase)})});
  arcs.forEach(function(a){a.addEventListener('click',function(){show(+a.dataset.phase)})});
  show(0);

  var msg=document.getElementById('msg');
  document.getElementById('send').addEventListener('click',function(){
    var n=document.getElementById('name').value.trim(),p=document.getElementById('phone').value.replace(/\D/g,'');
    if(!n||p.length<8){msg.className='err';msg.textContent='Enter your name and a valid phone number.';return}
    msg.className='';msg.textContent='Thanks '+n+'. We will call you within one working day.';
  });
})();
