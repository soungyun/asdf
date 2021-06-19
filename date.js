const dateContainer = document.getElementsByClassName("js-date")[0];
const  dateTitle = dateContainer.getElementsByTagName("h2")[0];

function getDate(){
  const dat = new Date();
  const year = dat.getFullYear();
  const date = dat.getMonth() + 1;
  const day = dat.getDay();
  let yoil = ["일", "월", "화", "수", "목", "금", "토"];
  dateTitle.innerText = year + "년" + date + "월" + day+ "일 (" + yoil[day] + ")";
}



function init(){
  getDate;
  setInterval(getDate);
}

init();

