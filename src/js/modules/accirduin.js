const accordion = (triggersSelector, itemsSelector) => {
    const btns = document.querySelectorAll(triggersSelector);
    const blocks = document.querySelectorAll(itemsSelector);

    blocks.forEach(block => {
        block.classList.add('animated', 'fadeInDown');
    });

    btns.forEach(btn => {
        btn.addEventListener('click', function() {
            if(!this.classList.contains('active')) {
                btns.forEach(btn => {
                    btn.classList.remove('active', 'active-style')
                });
                this.classList.add('active', 'active-style')
            }
        })
    })
};

export default accordion;