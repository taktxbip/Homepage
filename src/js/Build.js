import { tabs, sites } from './data.js';

class Build {
  constructor() { }

  build() {
    this.buildTabs();
    this.buildSites();
  }

  buildTabs() {
    const tabList = document.querySelector('.tab-list');

    let html = '';
    for (const key in tabs) {
      html += `<li class="tab-item"><a href="#${key}">${tabs[key]}</a></li>`;
    }

    tabList.innerHTML = html;
  }

  buildSites() {
    const tabContent = document.querySelector('.tab-content');

    let html = '';

    for (const key in tabs) {
      const tiles = sites.filter((item) => item.tab === key);
      html += `<ul id="${key}" class="tab-content-item masonry-list">`;

      tiles.forEach((item) => {
        if (item.image) {
          html += `<li class="tile-case">
          <a href="${item.url}">
            <div class="tile-primary-content">
              <img src="${item.image}" alt="#">
            </div>
            <div class="tile-secondary-content">
              <p>${item.name}</p>
            </div>
          </a>
        </li>`;
        } else {
          html += `<li class="tile-job">
            <a href="${item.url}">
              <div class="tile-primary-content"><p>${item.name}</p></div>
            </a>
          </li>`;
        }
      });

      html += `</ul>`;
    }

    tabContent.innerHTML = html;
  }
}

export default Build;