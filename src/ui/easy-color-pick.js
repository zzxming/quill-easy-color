import Quill from 'quill';
import { debounce } from '../utils';
const Picker = Quill.import('ui/picker');

export default class EasyColorPicker extends Picker {
  constructor(select, label, defualtColor = null) {
    super(select);
    this.label.innerHTML = label;
    this.container.classList.add('ql-color-picker');

    this.maxUseColor = 10;
    this.localColorUsedKey = this.select.className + '_used-color';
    this.usedColorOptions = [];
    try {
      this.usedColor = JSON.parse(localStorage.getItem(this.localColorUsedKey));
      if (!this.usedColor || !(this.usedColor instanceof Array)) {
        throw new Error('usedColor get wrong type');
      }
    } catch (e) {
      localStorage.setItem(this.localColorUsedKey, []);
      this.usedColor = [];
    }
    this.createUsedColor();
  }

  createUsedColor() {
    const usedWrap = document.createElement('div');
    usedWrap.classList.add('used');

    const usedColorLabels = document.createElement('div');
    usedColorLabels.classList.add('used-list');
    usedWrap.appendChild(usedColorLabels);
    this.options.appendChild(usedWrap);
    this.usedColorLabels = usedColorLabels;
    for (let i = this.usedColor.length - 1; i >= 0; i--) {
      this.createUsedColorItem(this.usedColor[i]);
    }
  }
  createUsedColorItem(color) {
    const option = this.createUsedColorOption(color);
    this.select.appendChild(option);
    this.usedColorLabels.insertBefore(this.buildItem(option), this.usedColorLabels.firstChild);
  }

  createUsedColorOption(color) {
    const findOption = this.select.querySelector(`option[value='${color}'][custom]`);
    if (findOption) {
      return findOption;
    }
    const option = document.createElement('option');
    option.setAttribute('custom', '');
    option.setAttribute('value', color);
    return option;
  }

  removeUsedColor(color) {
    const option = this.select.querySelector(`option[value='${color}'][custom]`);
    const label = this.usedColorLabels.querySelector(`p[data-value='${color}']`);
    option && option.remove();
    label && label.remove();
  }

  selectColor(color) {
    if (!color) return;
    const index = this.usedColor.findIndex((c) => c === color);
    if (index !== -1) {
      const repeatColor = this.usedColor.splice(index, 1);
      this.removeUsedColor(repeatColor);
    }
    this.usedColor.unshift(color);
    const removeColors = this.usedColor.slice(this.maxUseColor);
    removeColors.map((color) => this.removeUsedColor(color));
    this.usedColor = this.usedColor.slice(0, this.maxUseColor);
    localStorage.setItem(this.localColorUsedKey, JSON.stringify(this.usedColor));
    this.createUsedColorItem(color);
  }

  buildItem(option) {
    if (option.value === 'custom') {
      const item = document.createElement('div');
      const input = document.createElement('input');
      item.classList.add('custom');
      input.setAttribute('type', 'color');
      item.appendChild(input);

      input.addEventListener(
        'input',
        debounce(() => {
          this.selectColor(input.value);
          this.selectItem(this.usedColorLabels.children[0], true);
        }, 300)
      );
      this.customColorInput = input;
      return item;
    } else {
      const item = document.createElement('p');
      item.tabIndex = '0';
      item.setAttribute('role', 'button');
      item.classList.add('ql-picker-item');
      if (!option.value) {
        item.classList.add('blank');
      }
      if (option.hasAttribute('value')) {
        item.setAttribute('data-value', option.getAttribute('value'));
      }
      if (option.textContent) {
        item.setAttribute('data-label', option.textContent);
      }
      item.addEventListener('click', () => {
        this.selectColor(item?.dataset?.value);
        this.selectItem(item, true);
      });

      item.style.backgroundColor = option.getAttribute('value') || '';
      return item;
    }
  }

  selectItem(item, trigger = false) {
    const selected = this.container.querySelector('.ql-selected');
    if (item === selected) return;
    if (selected != null) {
      selected.classList.remove('ql-selected');
    }
    if (item == null) return;
    item.classList.add('ql-selected');
    // change index find function
    this.select.selectedIndex = Array.from(this.select.children).findIndex(
      (option) => option.value === (item.dataset.value ?? '')
    );
    if (item.hasAttribute('data-value')) {
      this.label.setAttribute('data-value', item.getAttribute('data-value'));
    } else {
      this.label.removeAttribute('data-value');
    }
    if (item.hasAttribute('data-label')) {
      this.label.setAttribute('data-label', item.getAttribute('data-label'));
    } else {
      this.label.removeAttribute('data-label');
    }

    if (trigger) {
      this.select.dispatchEvent(new Event('change'));
      // this.close();
    }

    const colorLabel = this.label.querySelector('.ql-color-label');
    const value = item ? item.getAttribute('data-value') || '' : '';
    if (colorLabel) {
      if (colorLabel.tagName === 'line') {
        colorLabel.style.stroke = value;
      } else {
        colorLabel.style.fill = value;
      }
    }
  }
}
