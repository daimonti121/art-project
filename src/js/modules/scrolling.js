const scrolling = (upSelector) => {
    const upElem = document.querySelector(upSelector);
    window.addEventListener('scroll', () => {
        if (document.documentElement.scrollTop > 1650) {
            upElem.classList.add('animated', 'fadeIn');
            upElem.classList.remove('fadeOut');
        } else {
            upElem.classList.add('fadeOut');
            upElem.classList.remove('fadeIn');
        }
    });

    const element = document.documentElement;
    const body = document.body;

    const calcScroll = () => {
        upElem.addEventListener('click', function () {
            let scrollTop = Math.round(body.scrollTop || element.scrollTop);

            if (this.hash !== '') {
                event.preventDefault();
                let hashElement = document.querySelector(this.hash),
                    hashElementTop = 0;

                
            }
        });
    }
}

export default scrolling;