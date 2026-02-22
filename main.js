class LottoTicket extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: 'open' });

    const wrapper = document.createElement('div');
    wrapper.setAttribute('class', 'ticket');

    const title = document.createElement('h2');
    title.textContent = 'Lotto Ticket';

    const numbersContainer = document.createElement('div');
    numbersContainer.setAttribute('class', 'numbers');

    const button = document.createElement('button');
    button.textContent = 'Generate Numbers';
    button.addEventListener('click', () => this.generateNumbers(numbersContainer));

    const style = document.createElement('style');
    style.textContent = `
      .ticket {
        background: oklch(92.71% 0.081 254.88);
        padding: 2rem;
        border-radius: 1rem;
        box-shadow: 0 10px 20px oklch(0% 0 0 / 20%);
        text-align: center;
      }
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
        background: oklch(80.59% 0.1316 264.7);
        color: white;
        font-weight: bold;
        font-size: 1.25rem;
        box-shadow: 0 5px 10px oklch(0% 0 0 / 10%);
      }
      button {
        background: oklch(69.8% 0.224 264.7);
        color: white;
        border: none;
        padding: 1rem 2rem;
        border-radius: 0.5rem;
        font-size: 1rem;
        cursor: pointer;
        transition: background 0.3s;
        box-shadow: 0 5px 10px oklch(0% 0 0 / 20%);
      }
      button:hover {
        background: oklch(65% 0.224 264.7);
      }
    `;

    shadow.appendChild(style);
    shadow.appendChild(wrapper);
    wrapper.appendChild(title);
    wrapper.appendChild(numbersContainer);
    wrapper.appendChild(button);

    this.generateNumbers(numbersContainer);
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
