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
      const className = key === 'main' ? 'active' : '';
      html += `<li class="tab-item ${className}"><a href="#${key}">${tabs[key]}</a></li>`;
    }

    tabList.innerHTML = html;
  }

  buildSites() {
    const tabContent = document.querySelector('.tab-content');

    let html = '';

    for (const key in tabs) {
      const tiles = sites.filter((item) => item.tab === key);
      html += `<ul id="${key}" style="${key == 'main' ? 'display:block' : 'display:none'}" class="tab-content-item masonry-list">`;

      tiles.forEach((item) => {
        const style = item?.color ? `background-color:${item.color}` : 'background-color:#222';
        if (item.image) {
          html += `<li class="tile-case" style="${style}">
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
          html += `<li class="tile-job" style="${style}">
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