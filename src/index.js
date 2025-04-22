'strict';
import Build from './js/Build.js';

import './scss/main.scss';

(function () {
  window.addEventListener('DOMContentLoaded', (event) => {
    const b = new Build();
    b.build();

    const a = [...document.querySelectorAll('.tab-list a')];
    const contentItems = [...document.querySelectorAll('.tab-content-item')];
    const tabItems = [...document.querySelectorAll('.tab-item')];

    a.forEach((item) => {
      item.addEventListener('click', (e) => {
        e.preventDefault();
        const id = item.getAttribute('href').replace('#', '');
        const c = e.currentTarget;

        tabItems.forEach(item => {
          item.classList.remove('active');
        });
        c.closest('li').classList.add('active');

        contentItems.forEach(item => {
          item.style.display = 'none';
        });
        document.querySelector(`#${id}`).style.display = 'block';
      });
    });

  })
})();
