// document 내에서 값 가져오기

<input type="hidden" id="lectureSeqInput" value="123" />

// JavaScript에서 이 값을 가져오려면

const lectureSeqInput = document.querySelector('#lectureSeqInput');
const lectureSeqValue = lectureSeqInput.value;

// 그 후에

<td class="text-end">
	<button type="button" class="btn btn-primary btn-sm select" data-lecture-seq="${lectureSeqValue}">선택</button>
</td>

// 이런 식으로 가져다 쓰면 된다.