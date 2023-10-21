function startGame(){
    ctx= area.context;
    area.start();
    ship = new Ship(600,300,10)
    enemy = new Enemy(2,hpp)
    // createEliteA()
    // CreateEnemyA()
    // createEliteB()
    // CreateEnemyB()
    // createEliteC()
    // CreateEnemyC()
    // createEliteD()
    // CreateEnemyD()
}

function preStart(){
    ctx.fillStyle ="red"
                
    ctx.drawImage(leadImg,-30,-100,1380,970)
    if (area.x &&area.y){
        if (area.x>540&&area.x<790){
            if (area.y>200&&area.y<200+50){
                difficult =1;
                maxwave =5;
                hpp = 200+maxwave*80
                enemy.hp =200+maxwave*80
            }
            if (area.y>315&&area.y<315+50){
                difficult =2;
                maxwave =10;
                hpp = 200+maxwave*80
                enemy.hp =200+maxwave*80
            }
            if (area.y>420&&area.y<420+50){
                difficult =3;
                maxwave =15;
                hpp = 200+maxwave*80
                enemy.hp =200+maxwave*80
            }
            if (area.y>525&&area.y<525+50){
                difficult =4;
                maxwave =100;
                hpp = 200+maxwave*80
                enemy.hp =200+maxwave*80
            }
        }
    }
}
function CreateEnemyA(){
    enemyA = new EnemyA(Math.random()*1000+180,Math.random()*150+20,60,20,Math.random()*4-2,0,5+wave*2+wave*3+(extra-1.5)*10,Math.floor(Math.random()*70));
    enemyAs.push(enemyA) 
}
function updateEnemyA(){
    let dies = []
    for (let i = 0;i<enemyAs.length;i++){
        enemyAs[i].move();
        enemyAs[i].update()
        for (let u =0;u<shoots.length;u++){
            if (enemyAs[i].x+enemyAs[i].width>shoots[u].x && enemyAs[i].x<shoots[u].x && enemyAs[i].y+enemyAs[i].height>shoots[u].y && enemyAs[i].y<shoots[u].y){enemyAs[i].life-=damage;shoots[u].x=9999;shoots[u].y=9999}
        }
        
        if (enemyAs[i].life<0){
            dies.push(i)
        }
        if (round%100<30+enemyAs[i].time && round%100>0+enemyAs[i].time){
            enemyAs[i].speedx=0;

            if (round%5==4){
                if (enemyAs[i].y>0){
                    enemyAs[i].fire()
                }
            }
        }
        else if (round%100==30+enemyAs[i].time){enemyAs[i].speedx = Math.random()*4-2}
        
    }
    for (let i = 0;i<dies.length;i++){
        enemyAs.splice(dies[i],1)

    }
}


function CreateEnemyB(){
    enemyB = new EnemyB(Math.random()*1000+180,Math.random()*100+20,60,20,Math.random()*4-2,0,15+wave*2+wave*3+(extra-1.5)*10,Math.floor(Math.random()*100));
    enemyBs.push(enemyB) 
}
function updateEnemyB(){
    let dies = []
    for (let i = 0;i<enemyBs.length;i++){
        enemyBs[i].move();
        enemyBs[i].update()
        for (let u =0;u<shoots.length;u++){
            if (enemyBs[i].x+enemyBs[i].width>shoots[u].x && enemyBs[i].x<shoots[u].x && enemyBs[i].y+enemyBs[i].height>shoots[u].y && enemyBs[i].y<shoots[u].y){enemyBs[i].life-=damage;shoots[u].x=9999;shoots[u].y=9999}
        }
        if (enemyBs[i].life<0){
            dies.push(i)

        }
        if (round%130<30+enemyBs[i].time && round%130>0+enemyBs[i].time){
            enemyBs[i].speedx=0;

            if (round%8==4){
                if (enemyBs[i].y>0){
                    enemyBs[i].fire()
                }
            }
        }
        else if (round%130==30+enemyBs[i].time){enemyBs[i].speedx = Math.random()*4-2}
        
    }
    for (let i = 0;i<dies.length;i++){
        enemyBs.splice(dies[i],1)

    }
}


function CreateEnemyC(){
    enemyC = new EnemyC(Math.random()*1000+180,Math.random()*100+20,60,20,Math.random()*4-2,0,20+wave*2+wave*3+(extra-1.5)*10,Math.floor(Math.random()*100));
    enemyCs.push(enemyC) 
}
function updateEnemyC(){
    let dies = []
    for (let i = 0;i<enemyCs.length;i++){
        enemyCs[i].move();
        enemyCs[i].update()
        for (let u =0;u<shoots.length;u++){
            if (enemyCs[i].x+enemyCs[i].width>shoots[u].x && enemyCs[i].x<shoots[u].x && enemyCs[i].y+enemyCs[i].height>shoots[u].y && enemyCs[i].y<shoots[u].y){enemyCs[i].life-=damage;shoots[u].x=9999;shoots[u].y=9999}
        }
        if (enemyCs[i].life<0){
            dies.push(i)

        }
        if (round%130<30+enemyCs[i].time && round%130>0+enemyCs[i].time){
            enemyCs[i].speedx=0;

            if (round%3==1){
                if (enemyCs[i].y>0){
                    enemyCs[i].fire()
                }
            }
        }
        else if (round%130==30+enemyCs[i].time){enemyCs[i].speedx = Math.random()*4-2}
        
    }
    for (let i = 0;i<dies.length;i++){
        enemyCs.splice(dies[i],1)

    }
}


function CreateEnemyD(){
    enemyD = new EnemyD(Math.random()*1000+180,-100,60,20,0,3,25+wave*2+wave*3+(extra-1.5)*10,Math.floor(Math.random()*100));
    enemyDs.push(enemyD) 
}
function updateEnemyD(){
    let dies = []
    for (let i = 0;i<enemyDs.length;i++){
        enemyDs[i].move();
        enemyDs[i].update()
        for (let u =0;u<shoots.length;u++){
            if (enemyDs[i].x+enemyDs[i].width>shoots[u].x && enemyDs[i].x<shoots[u].x && enemyDs[i].y+enemyDs[i].height>shoots[u].y && enemyDs[i].y<shoots[u].y){enemyDs[i].life-=damage;shoots[u].x=9999;shoots[u].y=9999}
        }
        if (enemyDs[i].life<0){
            dies.push(i)
     
        }
        if (round%130<30+enemyDs[i].time && round%130>0+enemyDs[i].time){
            enemyDs[i].speedx=0;
            enemyDs[i].speedy=0;

            if (round%8==4){
                if (enemyDs[i].y>0){
                    enemyDs[i].fire()
                }
            }
        }
        else if (round%130==30+enemyDs[i].time){enemyDs[i].speedx = Math.random()*4-2;enemyDs[i].speedy = Math.random()*4-2}
        
    }
    for (let i = 0;i<dies.length;i++){
        enemyDs.splice(dies[i],1)

    }
}

function createEliteA(){
    eliteA = new EliteA(Math.random()*1000+180,Math.random()*100+20,60,20,Math.random()*4-2,0,25+wave*3+wave*3+(extra-1.5)*20,Math.floor(Math.random()*100));
    eliteAs.push(eliteA) 

}
function updateEliteA(){
    let dies= []
    for (let i = 0;i<eliteAs.length;i++){
        eliteAs[i].move();
        eliteAs[i].update()
        for (let u =0;u<shoots.length;u++){
            if (eliteAs[i].x+eliteAs[i].width>shoots[u].x && eliteAs[i].x<shoots[u].x && eliteAs[i].y+eliteAs[i].height>shoots[u].y && eliteAs[i].y<shoots[u].y){eliteAs[i].life-=damage;shoots[u].x=9999;shoots[u].y=9999}
        }
        if (eliteAs[i].life<0){
            dies.push(i)
     
        }
        if (round%130<30+eliteAs[i].time && round%130>0+eliteAs[i].time){
            eliteAs[i].speedx=0;
            eliteAs[i].speedy=0;

            if (round%5==4){
            eliteAs[i].fire()
            }
        }
        else if (round%130==30+eliteAs[i].time){eliteAs[i].speedx = Math.random()*4-2;eliteAs[i].speedy = Math.random()*4-2}
        
    }
    for (let i = 0;i<dies.length;i++){
        eliteAs.splice(dies[i],1)

    }
}


function createEliteB(){
    eliteB = new EliteB(Math.random()*1000+180,Math.random()*100+20,60,20,Math.random()*4-2,0,25+wave*3+wave*3+(extra-1.5)*20,Math.floor(Math.random()*100));
    eliteBs.push(eliteB) 

}
function updateEliteB(){
    let dies = []
    for (let i = 0;i<eliteBs.length;i++){

        eliteBs[i].move();
        eliteBs[i].update()

        for (let u =0;u<shoots.length;u++){
            if (eliteBs[i].x+eliteBs[i].width>shoots[u].x && eliteBs[i].x<shoots[u].x && eliteBs[i].y+eliteBs[i].height>shoots[u].y && eliteBs[i].y<shoots[u].y){eliteBs[i].life-=damage;shoots[u].x=9999;shoots[u].y=9999}
        }
        if (eliteBs[i].life<0){
            dies.push(i)
     
        }
        if (round%130<30+eliteBs[i].time && round%130>0+eliteBs[i].time){
            eliteBs[i].speedx=0;
            eliteBs[i].speedy=0;

            if (round%5==4){
            eliteBs[i].fire()
            }
        }
        else if (round%130==30+eliteBs[i].time){eliteBs[i].speedx = Math.random()*4-2;eliteBs[i].speedy = Math.random()*4-2}
        
    }
    for (let i = 0;i<dies.length;i++){
        eliteBs.splice(dies[i],1)

    }
}

function createEliteC(){
    eliteC = new EliteC(Math.random()*1000+180,Math.random()*100+20,60,20,Math.random()*4-2,0,35+wave*3+wave*3+(extra-1.5)*20,Math.floor(Math.random()*100));
    eliteCs.push(eliteC) 

}
function updateEliteC(){
    let dies = []
    for (let i = 0;i<eliteCs.length;i++){
        eliteCs[i].move();
        eliteCs[i].update()
        for (let u =0;u<shoots.length;u++){
            if (eliteCs[i].x+eliteCs[i].width>shoots[u].x && eliteCs[i].x<shoots[u].x && eliteCs[i].y+eliteCs[i].height>shoots[u].y && eliteCs[i].y<shoots[u].y){eliteCs[i].life-=damage;shoots[u].x=9999;shoots[u].y=9999}
        }
        if (eliteCs[i].life<0){
            dies.push(i)
     
        }
        if (round%130<30+eliteCs[i].time && round%130>0+eliteCs[i].time){
            eliteCs[i].speedx=0;
            eliteCs[i].speedy=0;

            if (round%5==4){
            eliteCs[i].fire()
            }
        }
        else if (round%130==30+eliteCs[i].time){eliteCs[i].speedx = Math.random()*4-2;eliteCs[i].speedy = Math.random()*4-2}
        
    }
    for (let i = 0;i<dies.length;i++){
        eliteCs.splice(dies[i],1)

    }
}

function createEliteD(){
    eliteD = new EliteD(Math.random()*1000+180,Math.random()*100+20,60,20,Math.random()*4-2,0,45+wave*3+(extra-1.5)*20,Math.floor(Math.random()*100));
    eliteDs.push(eliteD) 

}
function updateEliteD(){
    let dies = []
    for (let i = 0;i<eliteDs.length;i++){
        eliteDs[i].move();
        eliteDs[i].update()
        for (let u =0;u<shoots.length;u++){
            if (eliteDs[i].x+eliteDs[i].width>shoots[u].x && eliteDs[i].x<shoots[u].x && eliteDs[i].y+eliteDs[i].height>shoots[u].y && eliteDs[i].y<shoots[u].y){eliteDs[i].life-=damage;shoots[u].x=9999;shoots[u].y=9999}
        }
        if (eliteDs[i].life<0){
            dies.push(i)
     
        }
        if (round%130<30+eliteDs[i].time && round%130>0+eliteDs[i].time){
            eliteDs[i].speedx=0;
            eliteDs[i].speedy=0;

            if (round%5==4){
            eliteDs[i].fire()
            }
        }
        else if (round%130==30+eliteDs[i].time){eliteDs[i].speedx = Math.random()*4-2;eliteDs[i].speedy = Math.random()*4-2}
        
    }
    for (let i = 0;i<dies.length;i++){
        eliteDs.splice(dies[i],1)

    }
}



    
    
function checkTouch(){
    for (let i =0;i<bullets.length;i++){
    if (ship.x+ship.d>bullets[i].x &&ship.y+ship.d>bullets[i].y && ship.x<bullets[i].x +bullets[i].w&& ship.y<bullets[i].y+bullets[i].h){if(buff3==0){ship.hp-=1;bullets[i].x =9999;bullets[i].y=9999;}else{shield();buff3 -=1;bullets[i].y=9999;bullets[i].x=9999;}}
    }
    for (let i =0;i<missles.length;i++){
    if (ship.x+ship.d>missles[i].x &&ship.y+ship.d>missles[i].y && ship.x<missles[i].x +missles[i].d&& ship.y<missles[i].y+missles[i].d){if(buff3==0){ship.hp-=1;missles[i].x =9999;missles[i].y=9999;}else{buff3 -=1;missles[i].y=9999;missles[i].x=9999;}}
    }
    if (ship.hp<0){
        stop();
    }
}
function shield(){
    ctx = area.context;
    ctx.fillStyle = "green"
    // ctx.fillRect(ship.x-200,ship.y-200,400,400);
    ctx.drawImage(shieldburstImg,ship.x-295,ship.y-500,600,800)

    for (let i =0;i<bullets.length;i++){
        if (Math.pow(Math.abs(bullets[i].x-ship.x),2)+Math.pow(Math.abs(bullets[i].y-ship.y),2)<Math.pow(400,2)){
            bullets[i].x =9999;
            bullets[i].y=9999;
            bullets[i].sx =0;
            bullets[i].sy=0;
        }
    }
}
function stop(){
    shoots = []
    bullets =  []
    missles = []
    booms = []
    enemyAs = []
    enemyBs = []
    enemyCs = []
    enemyDs = []
    eliteAs = []
    eliteBs = []
    eliteCs = []
    eliteDs = []

    ctx = area.context
    ctx.fillStyle = "red"
    round = 0
    ctx.fillRect(0,0,1370,670);
    buff1 =false;
    buff2 = false;
    buff3 = 0;
    tp = 0
    location. reload()
}

function moveAll(){
    for (let i = 0;i<bullets.length;i++){
        bullets[i].move()
        bullets[i].update()
    }
    for (let i = 0;i<missles.length;i++){
        missles[i].move()
        missles[i].update()
        
    }
    
}
function reduce(){
     if (missles.length>140){
        missles.shift();
    }
    if (bullets.length>450){
        bullets.shift();
    }
}
function fire(){
    let freq = 5;
    if (buff2){
        freq =2;
    }
    if (round%freq ==1){
        shoot = new Shoot(ship.x,ship.y,0,-15);
        shoots.push(shoot)
        if (buff1){
            shoot = new Shoot(ship.x-10,ship.y,-5,-15);
            shoots.push(shoot)
            shoot = new Shoot(ship.x+10,ship.y,5,-15);
            shoots.push(shoot)
        }
        // if (buff2){
        //     shoot = new Shoot(ship.x-25,ship.y,0,-15);
        //     shoots.push(shoot)
        //     // shoot = new Shoot(ship.x+10,ship.y,0,-15);
        //     // shoots.push(shoot)
        // }
        }
        for (let i =0;i<shoots.length;i++){
            shoots[i].move()
            shoots[i].update()
        }
        if (shoots.length>200){
            shoots.shift()
    }
    
    if (helper>0){
        ctx.drawImage(helperImg,ship.x-38,ship.y+5,20,20)
    }
    if (helper>2){
        ctx.drawImage(helperImg,ship.x-58,ship.y+15,20,20)

    }
    if (helper>1){
        ctx.drawImage(helperImg,ship.x+28,ship.y+5,20,20)

    }
    if (helper>3){
        ctx.drawImage(helperImg,ship.x+48,ship.y+15,20,20)

    }
    if (helper>4){
        ctx.drawImage(helperImg,ship.x+3,ship.y+40,20,20)

    }
    if (helper>5){
        ctx.drawImage(helperImg,ship.x-18,ship.y+40,20,20)

    }
    if (helper>6){
        ctx.drawImage(helperImg,ship.x+23,ship.y+40,20,20)

    }
    if (helper>7){
        ctx.drawImage(helperImg,ship.x-38,ship.y+40,20,20)

    }
    if (round%(12-Math.floor(helper/2))==0){
        if (helper>0){
            shoot = new Shoot(ship.x-30,ship.y+10,0.5,-15,2);
            shoots.push(shoot)
        }
        if (helper>1){
            shoot = new Shoot(ship.x+30,ship.y+10,-0.5,-15,2);
            shoots.push(shoot)
        }
        if (helper>2){
            shoot = new Shoot(ship.x-50,ship.y+20,1,-15,2);
            shoots.push(shoot)
        }
        if (helper>3){
            shoot = new Shoot(ship.x+50,ship.y+20,-1,-15,2);
            shoots.push(shoot)
        }
        if (helper>4){
            shoot = new Shoot(ship.x-10,ship.y+40,0,-15,2);
            shoots.push(shoot)
        }
        if (helper>5){
            shoot = new Shoot(ship.x+10,ship.y+40,0,-15,2);
            shoots.push(shoot)
        }
        if (helper>6){
            shoot = new Shoot(ship.x-30,ship.y+40,0.5,-15,2);
            shoots.push(shoot)
        }
        if (helper>7){
            shoot = new Shoot(ship.x+30,ship.y+40,-0.5,-15,2);
            shoots.push(shoot)
        }
    }
}
function boomexplode(){
    for (let i = 0;i<booms.length;i++){
        booms[i].movebullet()
        if (booms[i].time<round+30){
            booms[i].bx = booms[i].x+booms[i].sizex/2;
            if (booms[i].by<0){booms[i].by = 0}
            
            booms[i].bs = (booms[i].y+booms[i].sizey/2)/50;
            booms[i].movebullet()
            booms[i].update()
            ctx.fillStyle = "red"
            // ctx.fillRect(booms[i].x,booms[i].y,booms[i].sizex,booms[i].sizey)
            if (booms[i].by >booms[i].y+booms[i].sizey/2){
                booms[i].bx = 1999
                booms[i].by = 999
                booms[i].bs = 0
            }
        }

        if(booms[i].time<round){
            if(booms[i].x+booms[i].sizex>ship.x && booms[i].x<ship.x+ship.d && booms[i].y+booms[i].sizey>ship.y && booms[i].y<ship.y+ship.d){{if(buff3==0){ship.hp-=1;booms[i].x =9999;booms[i].y=9999;}else{buff3 -=1;booms[i].y=9999;booms[i].x=9999;}}}

            booms[i].x = 1999
            booms[i].y = 999

            
        }
        booms[i].update()

        
    }
}
function buffcreate(){
    if (round%bufffreq==1){
        buffs = []
        buff = new Buff(Math.random()*800+200,Math.random()*300+250,Math.trunc(Math.random()*3),round)
        buffs.push(buff)
    }
    for (let i = 0;i<buffs.length;i++){
        
        buffs[i].update()
        buffs[i].get()
    }
}

// function enemymove(){
//     if (round%480==1 && enemyAs.length<2 && round<2000){CreateEnemyA()}
//     if (round%820==1 && enemyBs.length<2 && round<2000){CreateEnemyB()}
//     if (round%980==1 && enemyCs.length<2 && round<2000){CreateEnemyC()}
//     if (round%1020==1 && enemyDs.length<2 && round<2000){CreateEnemyD()}
//     if (round%1800==1 && eliteAs.length<2 && round<2000){createEliteA()}
//     if (round%1200==1 && eliteBs.length<2 && round<2000){createEliteB()}
//     if (round%800==1 && eliteCs.length<2 && round<2000){createEliteC()}
//     if (round%1500==1 && eliteDs.length<2 && round<2000){createEliteD()}


//     updateEnemyA()
//     updateEnemyB()
//     updateEnemyC()
//     updateEnemyD()
//     updateEliteA()
//     updateEliteB()
//     updateEliteC()
//     updateEliteD()
//     if (round>2000&& enemyAs.length+enemyBs.length+enemyCs.length+enemyDs.length<1){ 
//         enemy.move()
//         enemy.update()
//         enemy.life()
//         if (round>2200 &&enemy.y>=-400){
//             for (let i = 0;i<shoots.length;i++){
//                 shoots[i].aim()
//             }
//         }
//         switch (tp){
//             case 0:
//                 enemy.createA()
//                 break;
//             case 1:
//                 enemy.createB()
//                 break;
//             case 2:
//                 enemy.createC()
//                 break;
//             case 3:
//                 enemy.createD()
//                 break;
//             case 4:
//                 enemy.createE()
//                 break;
//             case 5:
//                 enemy.createF()
//                 break;
//         }
//     }
// }

function enemymove(){
    if (wave ==0 && wave0 ==0 &&wave!=maxwave){
        CreateEnemyA()
        CreateEnemyA()
        CreateEnemyA()
        wave0=1;
    }
    if (wave ==1 && wave1 ==0&&wave!=maxwave){
        CreateEnemyA()
        CreateEnemyA()
        CreateEnemyB()
        CreateEnemyC()
        CreateEnemyB()
        CreateEnemyC()
        wave1=1;
    }
    if (wave ==2 && wave2 ==0&&wave!=maxwave){
        CreateEnemyA()
        CreateEnemyB()
        CreateEnemyC()
        CreateEnemyD()
        CreateEnemyA()
        CreateEnemyB()
        CreateEnemyC()
        CreateEnemyD()
        wave2=1;
    }
    if (wave ==3 && wave3 ==0&&wave!=maxwave){
        CreateEnemyB()
        CreateEnemyB()
        CreateEnemyC()
        CreateEnemyC()
        CreateEnemyA()
        CreateEnemyD()
        CreateEnemyD()
        wave3=1;
    }
    if (wave ==4 && wave4 ==0&&wave!=maxwave){
        CreateEnemyD()
        CreateEnemyD()
        CreateEnemyD()
        CreateEnemyD()
        CreateEnemyC()
        CreateEnemyC()
        CreateEnemyC()
        CreateEnemyC()
        wave4=1;
    }
    if (wave ==5 && wave5 ==0&&wave!=maxwave){
        createEliteA()
        createEliteA()
        wave5=1;
    }
    if (wave ==6 && wave6 ==0&&wave!=maxwave){
        createEliteB()
        createEliteB()
        wave6=1;
    }
    if (wave ==7 && wave7 ==0&&wave!=maxwave){
        createEliteC()
        createEliteC()
        wave7=1;
    }
    if (wave ==8 && wave8 ==0&&wave!=maxwave){
        createEliteD()
        createEliteD()
        wave8=1;
    }
    if (wave ==9 && wave9 ==0&&wave!=maxwave){
        createEliteA()
        createEliteB()
        createEliteC()
        createEliteD()
        wave9=1;
    }
    if (wave ==10 && wave10 ==0&&wave!=maxwave){
        createEliteB()
        createEliteB()
        createEliteC()
        createEliteD()
        CreateEnemyC()
        CreateEnemyC()
        CreateEnemyC()
        CreateEnemyC()
        CreateEnemyC()
        CreateEnemyC()
        wave10=1;
    }
    if (wave ==10 && wave10 ==0&&wave!=maxwave){
        createEliteC()
        createEliteC()
        CreateEnemyC()
        CreateEnemyC()
        CreateEnemyC()
        CreateEnemyC()
        wave10=1;
    }
    if (wave ==11 && wave11 ==0&&wave!=maxwave){
        createEliteA()
        createEliteA()
        createEliteA()
        createEliteA()
        createEliteA()
        createEliteA()
        createEliteA()
        createEliteA()
        wave11=1;
    }
    if (wave ==12 && wave12 ==0&&wave!=maxwave){
        createEliteC()
        createEliteC()
        createEliteC()
        createEliteC()
        createEliteB()
        createEliteB()
        createEliteD()
        createEliteD()
        wave12=1;
    }
    if (wave ==13 && wave13 ==0&&wave!=maxwave){
        createEliteD()
        createEliteD()
        createEliteD()
        createEliteD()
        wave13=1;
    }
    if (wave ==14 && wave14 ==0&&wave!=maxwave){
        createEliteA();
        createEliteA();
        createEliteB();
        createEliteB();
        createEliteC();
        createEliteC();
        createEliteD();
        createEliteD();
        CreateEnemyA()
        CreateEnemyB()
        CreateEnemyC()
        CreateEnemyD()
        CreateEnemyA()
        CreateEnemyB()
        CreateEnemyC()
        CreateEnemyD()
        wave14=1;
    }
    if (wave ==15 && wave15 ==0&&wave!=maxwave){
        for (let i =0;i<Math.random()*extra+1;i++){
            createEliteA();
        }
        for (let i =0;i<Math.random()*extra+1;i++){
            createEliteB();
        }
        for (let i =0;i<Math.random()*extra+1;i++){
            createEliteC();
        }
        for (let i =0;i<Math.random()*extra+1;i++){
            createEliteD();
        }
        for (let i =0;i<Math.random()*extra+1;i++){
            CreateEnemyA()
        }
        for (let i =0;i<Math.random()*extra+1;i++){
            CreateEnemyB()
        }
        for (let i =0;i<Math.random()*extra+1;i++){
            CreateEnemyC()
        }
        for (let i =0;i<Math.random()*extra+1;i++){
            CreateEnemyD()
        }
        
        
        wave15=1;
    }
    if (wave ==maxwave){
        enemy.move()
        enemy.update()
        enemy.life()
        if (enemy.y>=-400){
            for (let i = 0;i<shoots.length;i++){
                shoots[i].aim()
            }
        }
        switch (tp){
            case 0:
                enemy.createA()
                break;
            case 1:
                enemy.createB()
                break;
            case 2:
                enemy.createC()
                break;
            case 3:
                enemy.createD()
                break;
            case 4:
                enemy.createE()
                break;
            case 5:
                enemy.createF()
                break;
        }
    }
    updateEnemyA()
    updateEnemyB()
    updateEnemyC()
    updateEnemyD()
    updateEliteA()
    updateEliteB()
    updateEliteC()
    updateEliteD()
    
}
function up1(){
    ship.sx+=1;
    ship.sy+=1;
}
function up2(){
    ship.maxhp*=1.5;
    ship.hp = ship.maxhp;
    hprecove /=2;
}
function up3(){
    damage +=2;
}
function up4(){
    helper+=1
}
function up5(){
    bufffreq-=bufffreq*0.4;
    bufftime+=bufftime*0.5;
}

function upgrade(){
    
    if (enemyAs.length+enemyBs.length+enemyCs.length+enemyDs.length+eliteAs.length+eliteBs.length+eliteCs.length+eliteDs.length<1){
        // bullets = []
        if (wave<maxwave){
            if (slice ==0){
                slice = round+200;
            }
            if (slice<round){
                slice =0
                wave+=1;
                if (wave>14){wave=15;wave15=0;extra+=0.25}
                if (ship.x<273){
                    up1();
                }
                if (ship.x>273 && ship.x<546){
                    up2();
                }
                if (ship.x>546 && ship.x<819){
                    up3();
                }
                if (ship.x>819 && ship.x<1092){
                    up4();
                }
                if (ship.x>1092){
                    up5();
                }
                booms = [];
                bullets = [];
                missles = [];
                shoots = [];
                buffs = [];
            }
            ctx.fillStyle = "red"
            ctx.fillRect(0,350,273,1000);
            ctx.fillStyle = "blue"
            ctx.fillRect(273,350,273,1000);
            ctx.fillStyle = "yellow"
            ctx.fillRect(546,350,273,1000);
            ctx.fillStyle = "green"
            ctx.fillRect(819,350,273,1000);
            ctx.fillStyle = "purple"
            ctx.fillRect(1092,350,273,1000);
            ctx.fillStyle = "black"
            ctx.fillText("Speed +",80,500)
            ctx.fillText("HP +",370,500)
            ctx.fillText("damage +",600,500)
            ctx.fillText("helper +",880,500)
            ctx.fillText("Buff +",1180,500)
        }
    }
}

function updateBar(){
    ctx.fillStyle = "gray"
    ctx.fillRect(1330,80,10,500)
    ctx.fillStyle = "blue"
    ctx.fillRect(1330,580,10,-wave/maxwave*(500))
    ctx.drawImage(shipImg,1320,580-wave/maxwave*(500)-30,30,55)
}