// click
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

// onclick
<button class="btn btn-sm btn-outline-primary" onclick={onClick()} >click</button>

function onClick() {
	/* alert("클릭되었습니다."); */
  document.getElementById('onclick').innerHTML = Date();
}

// onmouseEnter & onmouseLeave
<td id="mouseEnter">onmouseenter<span class="badge bg-primary ms-1">접수대기</span></td>

document.getElementById("mouseEnter").onmouseenter = function() {mouseEnter()};
document.getElementById("mouseEnter").onmouseleave = function() {mouseLeave()};

function mouseEnter() {
  document.getElementById("mouseEnter").style.color = "red";
}

function mouseLeave() {
  document.getElementById("mouseEnter").style.color = "black";
}

// ondoubleclick
<td id="onDoubleClick" ondblclick={onDoubleClick()}>ondoubleclick<span class="badge bg-primary ms-1">접수대기</span></td>

function onDoubleClick() {
  document.getElementById("onDoubleClick").innerHTML = "더블 클릭 되었습니다.";
}