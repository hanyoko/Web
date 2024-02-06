document.querySelector("#test").addEventListener("click", (e) => {
	e.preventDefault(); 
  e.stopImmediatePropagation();
	alert("123456");
})

document.querySelector("#test").addEventListener("click", (e) => {
	e.preventDefault();
  e.stopImmediatePropagation();
	alert("123457");
})

/* document.querySelectorAll(".btn-outline-danger").forEach((el) => {
  el.addEventListener("click", (e) => {
    e.preventDefault();
    e.stopImmediatePropagation();
    alert("삭제가 완료되었습니다.");
  })
}) */


// 접수 상태에 따라 색상 변경 click 이벤트
document.querySelector("#testContainer").addEventListener("click", (e) => {
  if (e.target.classList.contains("btn-outline-danger")) {
  	alert("삭제가 완료되었습니다.");
  }
})

document.querySelector("#stay").addEventListener("click", (e) => {
	document.getElementById('changeStatus').innerHTML = "접수대기";
  document.getElementById("changeStatus").style.backgroundColor = "#0d6efd";
  document.getElementById("changeStatus").style.color = "white";
  
})

document.querySelector("#ing").addEventListener("click", (e) => {
	document.getElementById('changeStatus').innerHTML = "접수중";
  document.getElementById("changeStatus").style.backgroundColor = "#ffc107";
  document.getElementById("changeStatus").style.color = "black";
})

document.querySelector("#finish").addEventListener("click", (e) => {
	document.getElementById('changeStatus').innerHTML = "답변완료";
  document.getElementById("changeStatus").style.backgroundColor = "#198754";
  document.getElementById("changeStatus").style.color = "white";
})


// onClick
function onClick() {
	/* alert("클릭되었습니다."); */
  document.getElementById('onclick').innerHTML = Date();
}

// onmouseEnter & onmouseLeave
document.getElementById("mouseEnter").onmouseenter = function() {mouseEnter()};
document.getElementById("mouseEnter").onmouseleave = function() {mouseLeave()};

function mouseEnter() {
  document.getElementById("mouseEnter").style.color = "red";
}

function mouseLeave() {
  document.getElementById("mouseEnter").style.color = "black";
}

// ondoubleclick
function onDoubleClick() {
  document.getElementById("onDoubleClick").innerHTML = "더블 클릭 되었습니다.";
}

// createElement
const elem = document.createElement('div');
elem.innerHTML = `
	<ul>
  	<li>one</li>
    <li>two</li>
    <li>three</li>
  </ul>
`;

const elem2 = document.createElement('div');
elem2.innerHTML = `
	<p>prepend 실습</p>
`;

document.querySelector("#total").appendChild(elem);
document.querySelector("#total").prepend(elem2);
document.querySelector("#total").append('append', '실습');


// 메소드 실습
let count = 0;
function createElem() {
	const container = document.querySelector('#create'); 
  const newElem = document.createElement('p');
  
  newElem.classList.add('text-warning', 'bg-dark');
  newElem.textContent = "생성되었습니다." + count++;
  
  container.appendChild(newElem);
}

// classList replace
function changeElem() {
  const changeElem = document.querySelector('#change')
  
  changeElem.classList.replace('text-info', 'text-warning');  
}

// classList remove
function removeElem() {
  const removeElem = document.querySelector('#remove')
  
  removeElem.classList.remove('text-danger');  
}

// classList toggle
function toggleElem() {
  const toggleElem = document.querySelector('#toggle')
  
  toggleElem.classList.toggle('text-white');
  toggleElem.classList.toggle('bg-dark');
}