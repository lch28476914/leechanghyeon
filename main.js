class LottoTicket extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'ticket');

    const topSection = document.createElement('div');
    topSection.setAttribute('class', 'top-section');

    const title = document.createElement('h2');
    title.textContent = 'Lotto Ticket';

    const themeToggle = document.createElement('button');
    themeToggle.setAttribute('class', 'theme-toggle');
    themeToggle.innerHTML = '🌓';
    themeToggle.addEventListener('click', () => this.toggleTheme());

    topSection.appendChild(title);
    topSection.appendChild(themeToggle);

    const numbersContainer = document.createElement('div');
    numbersContainer.setAttribute('class', 'numbers');

    const generateBtn = document.createElement('button');
    generateBtn.textContent = 'Generate Numbers';
    generateBtn.addEventListener('click', () => this.generateNumbers(numbersContainer));

    const style = document.createElement('style');
    style.textContent = `
      :host {
        display: block;
      }
      .ticket {
        background: var(--ticket-bg, oklch(92.71% 0.081 254.88));
        color: var(--text-color, oklch(20% 0.0106 248.44));
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 10px 20px var(--shadow-color, oklch(0% 0 0 / 20%));
        text-align: center;
        transition: background 0.3s, color 0.3s;
        min-width: 300px;
      }
      .top-section {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-bottom: 1rem;
      }
      h2 { margin: 0; }
      .numbers {
        display: flex;
        gap: 1rem;
        justify-content: center;
        margin: 2rem 0;
      }
      .number {
        width: 3rem;
        height: 3rem;
        display: grid;
        place-content: center;
        border-radius: 50%;
        background: var(--number-bg, oklch(80.59% 0.1316 264.7));
        color: white;
        font-weight: bold;
        font-size: 1.25rem;
        box-shadow: 0 5px 10px oklch(0% 0 0 / 10%);
        transition: background 0.3s;
      }
      button {
        background: var(--button-bg, oklch(69.8% 0.224 264.7));
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.3s, transform 0.1s;
        box-shadow: 0 5px 10px var(--shadow-color, oklch(0% 0 0 / 20%));
      }
      button:hover {
        background: var(--button-hover-bg, oklch(65% 0.224 264.7));
      }
      button:active {
        transform: scale(0.98);
      }
      .theme-toggle {
        padding: 0.5rem;
        width: 2.5rem;
        height: 2.5rem;
        display: grid;
        place-content: center;
        border-radius: 50%;
        font-size: 1.2rem;
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(topSection);
    wrapper.appendChild(numbersContainer);
    wrapper.appendChild(generateBtn);

    this.initTheme();
    this.generateNumbers(numbersContainer);
  }

  initTheme() {
    const savedTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', savedTheme);
  }

  toggleTheme() {
    const currentTheme = document.documentElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    document.documentElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('theme', newTheme);
  }

  generateNumbers(container) {
    container.innerHTML = '';
    const numbers = new Set();
    while (numbers.size < 6) {
      numbers.add(Math.floor(Math.random() * 45) + 1);
    }

    const sortedNumbers = Array.from(numbers).sort((a, b) => a - b);

    for (const number of sortedNumbers) {
      const numberEl = document.createElement('div');
      numberEl.setAttribute('class', 'number');
      numberEl.textContent = number;
      container.appendChild(numberEl);
    }
  }
}

customElements.define('lotto-ticket', LottoTicket);

