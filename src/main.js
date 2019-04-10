[...document.querySelectorAll('.tabs li')].map(li => {
    li.onclick = function()
    {
        //1. Find active li, remove active
        //2. Add active to clicked li
        //3. Find active tab_div, remove active
        //4. Find matching tab_div to clicked li with the of data-index
        //5. Add active class to clicked tab_div

        document.querySelector('.tabs li.active').classList.remove("active");
        this.classList.add("active");   

        TabContentChanger();
    }
})

document.querySelector('.prev').onclick = function(){
    //1. find current active li
    //2. check whether previous element exists
    //3. if exists add active to prev
    //4. else add active to last child

    const activeLi = document.querySelector('.tabs li.active');
    activeLi.classList.remove("active");

    if(activeLi.previousElementSibling)
    {
        activeLi.previousElementSibling.classList.add('active');
    }
    else
    {
        document.querySelector('.tabs li:last-of-type').classList.add('active');
    }

    TabContentChanger();
    
}

document.querySelector('.next').onclick = function(){
    //1. find current active li
    //2. check whether previous element exists
    //3. if exists add active to prev
    //4. else add active to last child

    const activeLi = document.querySelector('.tabs li.active');
    activeLi.classList.remove("active");

    if(activeLi.nextElementSibling && !activeLi.nextElementSibling.classList.contains("runner"))
    {
        activeLi.nextElementSibling.classList.add('active');
    }
    else
    {
        document.querySelector('.tabs').firstElementChild.classList.add('active');
    }
    TabContentChanger();
}

function TabContentChanger()
{
    document.querySelector('.tab_content.active').classList.remove("active");

    const index = document.querySelector('.tabs li.active').getAttribute("data-index");
    const connectedTab = document.querySelector(`.tab_content[data-index="${index}"]`);
    connectedTab.classList.add("active");

    UpdateRunner();
}

window.onload = function()
{
    preloader.classList.add("hide");
    setTimeout(() => {
        preloader.style.display = "none";
    }, 3000);

    const tabs = document.querySelectorAll('.tabs li');
    const randomIndex = Math.round(Math.random() * (tabs.length - 1));

    tabs[randomIndex].classList.add("active");
    document.querySelectorAll('.tab_content')[randomIndex].classList.add("active");
    UpdateRunner();
}

function UpdateRunner()
{
    const runner = document.querySelector('.runner');
    const activeLi = document.querySelector('.tabs li.active');
    const tabs = document.querySelectorAll(".tabs li");
    let left = 0;

    for(let i = 0; i < tabs.length; i++)
    {
        const li = tabs[i];
        if(li != activeLi)
            left += parseFloat(getComputedStyle(li).width);
        else
            break;
    }

    runner.style.left =left + "px";
    runner.style.width = getComputedStyle(activeLi).width;
}