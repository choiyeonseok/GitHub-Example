(function (window, document) {
    'use strict';

    const $toggles = document.querySelectorAll('.toggle');    //NodeList
    const $toggleBtn = document.getElementById('toggle-btn');

    $toggleBtn.addEventListener('click', function () {
        toggleElements();
    });

    window.addEventListener('resize', function () {
        if (window.innerWidth > 1024) {
            offElement();
        }
    });

    function toggleElements() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.toggle('on');  //있으면 지우고 없으면 추가해주는 기능
        });
    }

    function offElement() {
        [].forEach.call($toggles, function (toggle) {
            toggle.classList.remove('on');
        });
    }

})(window, document)