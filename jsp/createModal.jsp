<!-- 강의 생성 모달 -->
const createLectureModal = document.querySelector('#createLectureModal');
if (createLectureModal) {
    let loader = new Loader(createLectureModal.querySelector('.modal'));

    document.querySelectorAll('.create-lecture').forEach((el) => {
        el.addEventListener('click', (e) => {
            bootstrap.Modal.getOrCreateInstance(createLectureModal).show();

            let createBtn = createLectureModal.querySelector('button[type=submit]');
            
            createBtn.addEventListener('click', () => {
                fetchSearch();

                async function fetchSearch() {
                    loader.show();
                    bootstrap.Modal.getOrCreateInstance(createLectureModal).hide();
                    
                    try {

                        let selectedTermValue = '';
                        createLectureModal.querySelectorAll('input[name=term]').forEach(radioButton => {
                            if (radioButton.checked) {
                                // 체크된 라디오 버튼의 값이 selectedTermValue에 할당됩니다.
                                selectedTermValue = radioButton.value;
                            }
                        });

                        let params = new FormData();
                
                        params.append("lecStartDt", createLectureModal.querySelector('input[name=lecStartDt]').value);
                        params.append("lecEndDt", createLectureModal.querySelector('input[name=lecEndDt]').value);
                        params.append("year", createLectureModal.querySelector('select[name=year]').value);
                        params.append("term", selectedTermValue);
                        params.append("subjectCdList", e.target.dataset.subjectCd);
        
                        let response = await fetch(`/admin/lecture/add`, {method: "POST", body: params});
        
                        if (!response.ok) throw string.error;
        
                        let data = await response.json();

                        if (data.code == 0) {
                            infoAlert.show("success", "강의 생성이 완료되었습니다.");
                            
                            setTimeout(function () {
                                location.reload();
                            }, 2000);
                        } else {
                            errorHandling(data.code, '', data.message);
                        }

                    } catch (e) {
                        console.log(e);
                        errorHandling(e.code);
                    } finally {
                        loader.hide();
                    }
                }
            });
        })
    })
}