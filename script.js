
const inputs = document.querySelectorAll('.controls input');

function handleUpdate(){
  const suffix = this.dataset.sizing || ''; 
  document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix)
}

inputs.forEach(input => input.addEventListener('change', handleUpdate));
inputs.forEach(input => input.addEventListener('mousemove', handleUpdate));

const reverts = document.getElementById('.restore');

const reset = () => {
  document.documentElement.style.setProperty = ' ';
}

reverts.forEach(revert => revert.addEventListener('onclick', reset))