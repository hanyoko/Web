<!-- 생성 취소 -->
const cancelModal = document.querySelector('#cancelModal');

if (cancelModal) {
    let loader = new Loader(cancelModal.querySelector('.modal'));

    document.querySelectorAll('.cancel-lecture').forEach((el) => {
        el.addEventListener('click', (e) => {
            bootstrap.Modal.getOrCreateInstance(cancelModal).show();

            let cancelBtn = cancelModal.querySelector('button[type=submit]');
            
            cancelBtn.addEventListener('click', (event) => {
                event.preventDefault();

                fetchSearch();
                
                async function fetchSearch() {
                    loader.show();
                    bootstrap.Modal.getOrCreateInstance(cancelModal).hide();

                    try {
                        let params = new FormData();
                        params.append("subjectCdList", e.target.dataset.subjectCd);
    
                    let response = await fetch(`/admin/lecture/remove`, {method: "POST", body: params});
        
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