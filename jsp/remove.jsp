// 과목 삭제
const removeSubjectModal = document.querySelector('#removeSubjectModal');

if (removeSubjectModal) {
    let loader = new Loader(removeSubjectModal.querySelector('.modal'));

    document.querySelectorAll('.remove-subject').forEach((el) => {
        el.addEventListener('click', (e) => {
            bootstrap.Modal.getOrCreateInstance(removeSubjectModal).show();

            let removeBtn = removeSubjectModal.querySelector('button[type=submit]');
            
            removeBtn.addEventListener('click', (event) => {
                event.preventDefault();

                fetchSubmit();
                
                async function fetchSubmit() {
                    loader.show();
                    bootstrap.Modal.getOrCreateInstance(removeSubjectModal).hide();

                    try {
                        let params = new FormData();
                        params.append("subjectCd", e.target.dataset.subjectCd);
                        params.append("hstySeq", e.target.dataset.hstySeq);
    
                    let response = await fetch(`/admin/subjectMaster/remove`, {method: "POST", body: params});
        
                        if (!response.ok) throw string.error;
        
                        let data = await response.json();

                        if (data.code == 0) {
                            infoAlert.show("success", string.remove.success);
                            
                            setTimeout(function () {
                                location.reload();
                            }, 1000);
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