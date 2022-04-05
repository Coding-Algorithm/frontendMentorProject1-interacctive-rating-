let ratingNumbers = document.querySelectorAll('.ratingList li');
const submit = document.querySelector('.submit')
const design = document.querySelector('.Design')
const thankYouDiv = document.querySelector('.thankYouDiv')

let rate;

ratingNumbers = [...ratingNumbers]

ratingNumbers.forEach(number => {
    number.addEventListener('click', (e) => {
        let selected = e.target
        rate = selected.textContent

        if(selected.classList.contains('choosen')){
            selected.classList.remove('choosen')
        }else{
            selected.classList.add('choosen')
            
        }

    })
})

submit.addEventListener('click', ()=>{
    design.style.display = 'none';

    let ratingScore = document.querySelector('.ratingScore')

    ratingScore.textContent = rate

    thankYouDiv.style.display = 'flex'
})

