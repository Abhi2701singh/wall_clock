function clock(){
    const d=new Date;
   
    const h=d.getHours();
    const m=d.getMinutes();
    const s=d.getSeconds();
    
    var s_rotation=6*s;
    var m_rotation=6*m;
    var h_rotation=30*h +m/2;

    document.getElementById('hr').style.transform="rotate("+h_rotation+"deg)"
    document.getElementById('min').style.transform="rotate("+m_rotation+"deg)"
    document.getElementById('sec').style.transform="rotate("+s_rotation+"deg)"
}
clock()
setInterval(clock,1000);
