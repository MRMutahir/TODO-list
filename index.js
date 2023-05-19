let inputvalue = document.getElementById('inputvalue');
// console.log(inputvalue);
let addBtn = document.getElementById('addBtn');
// console.log(addBtn);
let listName = document.querySelector('.listName');
// console.log(listName)
let li = document.querySelector('li');
// console.log(li);
let screen1 = document.querySelector('.screen1');
// console.log(screen1);
addBtn.addEventListener('click', () => {
    if (inputvalue.value == ' ') {
        alert('sorry')

    } else {
        // span.innerText = screen1;

        let li = document.createElement('li');
        li.innerHTML = inputvalue.value;
        listName.appendChild(li).className = ' lisingleValue'
       
        let span = document.createElement('span');
        li.appendChild(span)
        span.appendChild(li.firstChild)
        let delet = document.createElement('button');
        delet.innerText = 'delet';
        li.appendChild(delet).className = ' dBtn';
        delet.className += ' same'
        delet.addEventListener('click', () => {
            // delet.className += ' same'
            li.innerText = ''
        })
        let edit = document.createElement('button');
        edit.innerText = 'Edit';
        li.appendChild(edit).className = ' eBtn'
        edit.className += ' same'
        edit.addEventListener('click', () => {
            // console.log(li);
            // span.innerText = screen1.innerHTML
            // console.log(span)
            // li = screen1.innerHTML
            // li.firstChild = inputvalue.style.backgroundColor = "green"
            // li.firstChild = inputvalue.style.backgroundColor = "green"
            // var a_li = li
            inputvalue.value  = span.innerText;
        //    span.innerHTML = span.innerText
        if (inputvalue.value == span.innerText) {
            li.innerHTML = ''
            addBtn.innerText = 'Edit'
            addBtn.style.color = "blue"
            // console.log('hi')
            // inputvalue.value  = span.innerHTML;
            // edit.addEventListener('click',()=>{

            // })
            
            
        }else{
            // inputvalue.value = span.innerText
            // addBtn.innerText="ADD"
            console.log('hi')
        }


        })
        inputvalue.value = ' '
    }

})




    // console.log(delet)
    // console.log(edit)
