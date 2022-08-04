const fill = document.querySelector('.fill')
const empties = document.querySelectorAll('.empty')

fill.addEventListener('dragstart', dragStart)
fill.addEventListener('dragend', dragEnd)

for(const empty of empties) {
  empty.addEventListener('dragover', dragOver)
  empty.addEventListener('dragenter', dragEnter)
  empty.addEventListener('dragleave', dragLeave)
  empty.addEventListener('drop', dragDrop)
}


function dragStart () {
  this.className += ' hold'
  setTimeout(() => this.className = 'invisible', 0)
}

function dragEnd () {
  this.className = 'fill'
}

function dragEnter() {
  console.log('enter');
}

function dragOver () {
  console.log('Over');
}

function dragLeave () {
 console.log('leave'); 
}

function dragDrop () {
  console.log('drop');
}