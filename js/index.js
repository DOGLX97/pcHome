var data = [{
    url: 'https://music.163.com/',
    img: 'img/music/banner1.jpg',
    tip: '独家',
}, {
    url: 'https://music.163.com/',
    img: 'img/music/banner2.jpg',
    tip: '推广',
}, {
    url: 'https://music.163.com/',
    img: 'img/music/banner3.jpg'
}, {
    url: 'https://music.163.com/',
    img: 'img/music/banner4.jpg',
    tip: '推荐',
}, {
    url: 'https://music.163.com/',
    img: 'img/music/banner5.jpg'
}, {
    url: 'https://music.163.com/',
    img: 'img/music/banner6.jpg',
    tip: '独家',
}, {
    url: 'https://music.163.com/',
    img: 'img/music/banner7.jpg'
},{
    url: 'https://music.163.com/',
    img: 'img/music/banner8.jpg',
    tip: '独家',
},];

var vcarousel = new VCarousel({
    wrap: $('#container'),
    data: data
});


//插入日期

var date = new Date();
switch(date.getDay()) { 
    case 0:week="星期日";break; 
    case 1:week="星期一";break; 
    case 2:week="星期二";break; 
    case 3:week="星期三";break; 
    case 4:week="星期四";break; 
    case 5:week="星期五";break; 
    case 6:week="星期六";break; 
    default:week="系统错误！" 
} 
var aWeek = document.getElementsByClassName('week');
var aDay = document.getElementsByClassName('day');
for (var i = 0; i < aWeek.length; i++) {
    aWeek[i].innerHTML = week;
    aDay[i].innerHTML = date.getDate();
}
