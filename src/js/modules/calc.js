const calc = (size, material, options, promocode, result, state) => {
    const sizeBlock = document.querySelector(size);
    const materialBlock = document.querySelector(material);
    const optionsBlock = document.querySelector(options);
    const promocodeBlock = document.querySelector(promocode);
    const resultBlock = document.querySelector(result);

    let sum = 0;

    const calcFunc = (prop) => {
        sum = Math.round((+sizeBlock.value) * (+materialBlock.value) + (+optionsBlock.value));
        let clientOrder = ''

        if (sizeBlock.value == '' || materialBlock.value == '') {
            resultBlock.textContent = 'Пожалуйста, выберете размер и материал картины';
        } else if (promocodeBlock.value === 'IWANTPOPART') {
            resultBlock.textContent = Math.round(sum * 0.7);
        } else {
            resultBlock.textContent = sum;
            if (sizeBlock) {
                switch (sizeBlock.value) {
                    case '500':
                        clientOrder += `Размер материала: 40х50. `;
                        break;
                    case '1000':
                        clientOrder += `Размер материала: 50х70. `;
                        break;
                    case '1500':
                        clientOrder += `Размер материала: 70х70. `;
                        break;
                    case '2000':
                        clientOrder += `Размер материала: 70х100. `;
                        break;
                }
            }

            if (materialBlock) {
                switch (materialBlock.value) {
                    case '1':
                        clientOrder += `Тип материала: холст из волокна. `;
                        break;
                    case '1.2':
                        clientOrder += `Тип материала: льняной холст. `;
                        break;
                    case '1.5':
                        clientOrder += `Тип материала: холст из натурального хлопка. `;
                        break;
                }
            }

            if (optionsBlock) {
                switch (optionsBlock.value) {
                    case '1000':
                        clientOrder += `Дополнительные услуги: покрытие арт-гелем. `;
                        break;
                    case '2000':
                        clientOrder += `Дополнительные услуги: экспресс-изготовление. `;
                        break;
                    case '500':
                        clientOrder += `Дополнительные услуги: доставка готовых работ. `;
                        break;
                }
            }

            clientOrder += `Общая стоимость услуг: ${sum} рублей.`;

            state[prop] = clientOrder;
        }
    }



    sizeBlock.addEventListener('change', () => calcFunc('order'));
    materialBlock.addEventListener('change', () => calcFunc('order'));
    optionsBlock.addEventListener('change', () => calcFunc('order'));
    promocodeBlock.addEventListener('input', () => calcFunc('order'));


};

export default calc;