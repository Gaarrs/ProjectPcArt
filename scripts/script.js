window.addEventListener('DOMContentLoaded', function() {
    'esversion: 6';
    'use strict';

    let btn = document.querySelectorAll('.tabs-item'),
        tabHeader = document.querySelector('.options-tabs'),
        tab = document.querySelectorAll('.tab');

    function hideTabs(n) {
        for (let i = n; i < tab.length; i++) {
            tab[i].classList.remove('show');
            tab[i].classList.add('hide');
        }
    }

    function showTab(i) {
        if (tab[i].classList.contains('hide')) {
            tab[i].classList.remove('hide');
            tab[i].classList.add('show');
        }
    }

    function deactivate (t) {
        for (let i = t; i < btn.length; i++) {
            btn[i].classList.remove('active');
        }
    }

    hideTabs(1);
    btn[0].classList.add('active');


    tabHeader.addEventListener('click', function(event) {
        let target = event.target;
        if (target && target.classList.contains('tabs-item')) {
            for (let i = 0; i < tab.length; i++) {
                if (target == btn[i]) {
                    hideTabs(0);                                        
                    showTab(i);
                    deactivate(0);
                    btn[i].classList.add('active');
                    break;
                }
            }
        }
    });

    console.log(btn);
    console.log(tabHeader);
    console.log(tab);

});