"use strict";

// [...document.querySelectorAll('li')].map(li =>
// {
//     li.onclick = function()
//     {
//         document.querySelector('li.active').classList.remove('active');
//         this.classList.add('active');
        
//         document.querySelector('p.active').classList.remove('active');

//         let id = this.getAttribute('data-id');
//         let p = document.querySelector(`p[data-id="${id}"]`)
//         p.classList.add('active');

//     }
// })

// Task 1

// 1) li-lerin hamisini secib loop-a salmaliyam
// [...document.querySelectorAll('li')].map(li =>
//     {
//         // 2) click olunanda umumi li-lerde active class-i varsa hemin class-i silmeliyem
//         li.onclick = function()
//         {
//             document.querySelector('li.active').classList.remove('active');
            
//             // 3) click olunana active class-i vermeliyem
//             this.classList.add('active');
//         }
//     })

    // Task 2

// 1) li-lerin hamisini secib loop-a salmaliyam
[...document.querySelectorAll('.tabs li')].map(li =>
    {
        // 2) click olunanda umumi li-lerde active class-i varsa hemin class-i silmeliyem
        li.onclick = function()
        {
            document.querySelector('.tabs li.active').classList.remove('active');
            
            // 3) click olunana active class-i vermeliyem
            this.classList.add('active');

            contentChanger();
            
        }
    })

    // 1) prev-i secmeliyem
    let prev = document.querySelector('.fa-chevron-left');

    // 2) prev-e click function
    prev.onclick = function()
    {
        // 3) find active li
        let activeLi = document.querySelector('.tabs li.active');

        // 4) remove active class
        activeLi.classList.remove('active');

        // 5) find prev li
        let prevLi = activeLi.previousElementSibling;

        // 6) add active class to prev li
        if(prevLi)
        {
            prevLi.classList.add('active')
        }
        else
        {
            document.querySelector('.tabs li:last-of-type').classList.add('active');
        }

        contentChanger();
        
    }

    // 1) next-i secmeliyem
    let next = document.querySelector('.fa-chevron-right');

    // 2) next-e click function
    next.onclick = function()
    {
        // 3) find active li
        let activeLi = document.querySelector('.tabs li.active');

        // 4) remove active class
        activeLi.classList.remove('active');

        // 5) find next li
        let nextLi = activeLi.nextElementSibling;

        // 6) add active class to next li
        if(nextLi && !nextLi.classList.contains('runner'))
        {
            nextLi.classList.add('active')
        }
        else
        {
            document.querySelector('.tabs li:first-of-type').classList.add('active');
        }
        contentChanger();
    }

    function contentChanger()
        {
            // 4) click olunan li-in data-id-i goturmeliyem bir deyisene menimsetmeliyem
            let id = document.querySelector('.tabs li.active').getAttribute('data-id');

            // 5) divlerde active class-i varsa onu silmeliyem
            document.querySelector("div.active").classList.remove('active');

            // 6) data-id id-e beraber olan div-i secmeliyem
            let content =document.querySelector(`div[data-id="${id}"]`);

            // 7) hemin dive active class-i elave etmeliyem
            content.classList.add('active');
            runner();
        }

    function runner()
    {
        // 1) runner find
        let runner = document.querySelector('.runner');

        // 2) active li find
        let activeLi = document.querySelector('.tabs li.active');
        
        

        // 3) tabs find
        let tabs = document.querySelectorAll('.tabs li');

        // 4) tabs loop 
        let left = 0;
        for(let i = 0; i < tabs.length; i++)
        {
            // 5) if(!activeLi){left+=li.width}
            let li = tabs[i];
            
            if(li != activeLi)
            {
                left += parseFloat(getComputedStyle(li).width);
                
            }
            else
            {
                break;
            }
        }
        
        runner.style.left = left + 'px';            
        runner.style.width = getComputedStyle(activeLi).width;
    }

    window.onload = function()
    {
        loader.classList.add('d-none');
        setTimeout(() =>
        {
            loader.style.display = 'none';

        }, 3000);

        let tabs = document.querySelectorAll('.tabs li');
        let randomIndex = Math.round(Math.random() * (tabs.length - 1));

        tabs[randomIndex].classList.add('active');
        document.querySelectorAll('.div')[randomIndex].classList.add('active');
    }
// Task 3

// 1) li-lerin hamisini secib loop-a salmaliyam
// [...document.querySelectorAll('li')].map(li =>
//     {
//         // 2) li-e click edende hemin li-in background-un goturmek ve variable menimsetmek
//         li.onclick = function()
//         {
//             let color = getComputedStyle(this).backgroundColor;

//             // 3) box-u secib varaible teyin etmek

//             let box = document.querySelector('.box');
            
//             // 4) box-un background-a variable menimsetmek
//             box.style.backgroundColor = color;
//             box.style.width = '100%';
//         }
//     })





