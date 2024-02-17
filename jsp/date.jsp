<!-- input date 타입에서 날짜 기본값 설정하기 -->

if (document.querySelector('#createLectureModal')) {
    const modal = document.querySelector('#createLectureModal');

    let today = new Date();

    // 일주일 뒤 날짜 구하기
    let nextWeek = new Date();
    nextWeek.setDate(today.getDate() + 7);

    // 현재 날짜와 일주일 뒤 날짜를 원하는 형식으로 포맷팅
    let todayDate = today.toISOString().slice(0, 10); // "yyyy-mm-dd" 형식으로 포맷팅
    let nextDate= nextWeek.toISOString().slice(0, 10);

    modal.querySelector('.create-start-dt').value = todayDate;
    modal.querySelector('.create-end-dt').value = nextDate;
}