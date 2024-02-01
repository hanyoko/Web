// 지원분야 선택 라디오 버튼 이벤트 리스너 등록
const radios = document.querySelectorAll('input[name="flexRadioDefault"]');

// 02. 기본정보 입력란과 '지원하기' 버튼 비활성화
const form = document.getElementById('form');
const submitBtn = document.getElementById('submitBtn');
const privacyCheck = document.getElementById('privacy');

form.querySelectorAll('input, textarea, button, div').forEach((elem) => {
    elem.disabled = true;
    form.style.opacity = 0.5;
});

// 지원분야 선택 라디오 버튼 이벤트 리스너 등록
radios.forEach((radio) => {
    radio.addEventListener('change', () => {
        if (radio.checked) {
            // 선택된 라디오 버튼의 value에 따라 폼 활성화/비활성화 처리
            form.querySelectorAll('input, textarea, button, div').forEach((elem) => {
                elem.disabled = false;
                form.style.opacity = 1;
            });
        }
    });
});

// 기본정보 입력 체크
form.addEventListener('input', () => {
    const inputs = form.querySelectorAll('input[type="text"], input[type="email"], input[type="date"], input[type="file"], textarea');
    let allFilled = true;
    inputs.forEach((input) => {
        if (!input.value.trim()) {
            allFilled = false;
        }
    });

    submitBtn.disabled = !allFilled;
    privacyCheck.disabled = !allFilled;
});