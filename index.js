const container = document.querySelector('.container');
const upBtn = document.querySelector('.up-btn');
const tasks = document.querySelector('.tasks');
const addBtn = document.querySelector('.addBtn');
const clearBtn = document.querySelector('.clearBtn')

function checkOverflow(){
    if (tasks.scrollTop > 0) {
        upBtn.classList.add('active');
    }
    else{
        upBtn.classList.remove('active');
    }
}

addBtn.addEventListener('click',()=>{
    let input = document.querySelector('.inputfield');
    if (input && input.value !== '') {   
        taskDiv = document.createElement('div');
        taskDiv.className = 'task-item';

        let checkButton = document.createElement('input');
        checkButton.type = 'checkbox';
        checkButton.name = 'tasks'; // Group name for radio buttons
        checkButton.className = 'task-check';

        let label = document.createElement('label');
        label.textContent = input.value;
        label.className = 'task-label';

        taskDiv.appendChild(checkButton);
        taskDiv.appendChild(label);
 
        tasks.append(taskDiv);
        input.value = '';
        if (tasks.children.length>0) {
            clearBtn.classList.add('active')
        }
        if (document.querySelector('.task-check').checked()){
            label.textContent.strike()
        }
    } 
    else{
        alert('Please enter a task.');
    }
});
document.querySelector('.inputfield').addEventListener('keypress',(event)=>{
    if (event.key=='Enter') {
        addBtn.click();
    }
});

upBtn.addEventListener('click',()=>{
    tasks.scrollTo({
        top: 0,
        behavior: "smooth"
    })
});

clearBtn.addEventListener('click',()=>{
    tasks.innerHTML=''
    clearBtn.classList.remove('active')
});

tasks.addEventListener('scroll', checkOverflow);
checkOverflow();