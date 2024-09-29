const inputs = document.querySelectorAll(".control input");

function handleInput() {
    const suffix = this.dataset.sizing || '';
    console.log(this.name)
    document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
}

inputs.forEach(input => input.addEventListener('input', handleInput));