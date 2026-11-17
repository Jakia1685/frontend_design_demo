// Open/closed badge (Sat-Thu 8:00-23:00, Fri 14:00-23:00)
const badge=document.getElementById('open-badge');
if(badge){
  const n=new Date(),d=n.getDay(),h=n.getHours()+n.getMinutes()/60;
  const from=d===5?14:8,open=h>=from&&h<23;
  badge.classList.toggle('open',open);
  badge.querySelector('em').textContent=open?'Ekhon khola ache — rat 11 tar ager porjonto':'Ekhon bondho — kal abar dekha hobe';
}
// Menu filter
const tabs=document.querySelectorAll('.tabs button');
tabs.forEach(b=>b.addEventListener('click',()=>{
  tabs.forEach(x=>x.setAttribute('aria-pressed',x===b));
  const c=b.dataset.cat;
  document.querySelectorAll('.menu li').forEach(li=>{li.hidden=c!=='all'&&li.dataset.cat!==c});
}));
// Contact form
const f=document.getElementById('form');
if(f){
  f.addEventListener('submit',e=>{
    e.preventDefault();
    let ok=true;
    const chk=(id,test,msg)=>{const el=f.elements[id],er=document.getElementById(id+'-err');
      const bad=!test(el.value.trim());er.textContent=bad?msg:'';el.setAttribute('aria-invalid',bad);if(bad)ok=false};
    chk('name',v=>v.length>1,'Apnar naam likhun.');
    chk('phone',v=>/^(\+?88)?01[3-9]\d{8}$/.test(v.replace(/\s|-/g,'')),'Valid mobile number din (jemon 01712345678).');
    chk('guests',v=>v!=='','Koyjon ashben, ta bachun.');
    if(ok){const m=document.getElementById('ok');m.style.display='block';
      m.textContent='Dhonnobad, '+f.elements.name.value.trim()+'! Amra apnake call kore table confirm korbo.';f.reset()}
  });
}
