var boss = [
{name:"青蛙",energy:1000},
{name:"兔子",energy:2000},
{name:"老鹰",energy:3000},
{name:"大象",energy:4000},
{name:"犀牛",energy:5000},
];
   var hero = [
   {name:"小明",energy:1000},
   {name:"小白",energy:1000},
   {name:"小黑",energy:1000},
   ];
   var n = prompt("选择一个英雄(0:小明, 1:小白, 2:小黑)","");
   var h = hero[n];
   var b = boss[Math.floor(Math.random()*boss.length)];
   var i = 1;
   while(true){
   var hit = Math.floor(Math.random()*100);
   var bit = Math.floor(Math.random()*200);
   h.energy -= bit;
   b.energy -= hit;
   if(b.energy > 0 && h.energy <= 0){
   	alert("winner is boss");
   	break;
   	}else if(h.energy >0 && b.energy <= 0){
   		alert("winner is hero");
   		break;
   	}
   	alert("第" + i++ +"次回合，英雄：" + h.name + "能力剩余：" +h.energy + "怪兽" + b.name + "能量剩余：" +b.energy);
}
