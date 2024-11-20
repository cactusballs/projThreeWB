const inputs = document.querySelectorAll('.controls input');
    const restoreButton = document.getElementById('restoreButton');

    const defaults = {
      spacing: '10',
      blur: '5',
      base: '#160a6a'
    };


    function handleUpdate() {
      const suffix = this.dataset.sizing || ''; 
      document.documentElement.style.setProperty(`--${this.name}`, this.value + suffix);
    }

    
    function restoreDefaults() {
      inputs.forEach(input => {
        const name = input.name;
        input.value = defaults[name]; // Restore input value
        const suffix = input.dataset.sizing || ''; // Handle 'px' suffix
        document.documentElement.style.setProperty(`--${name}`, defaults[name] + suffix);
      });
    }

    // Attach event listeners
    inputs.forEach(input => input.addEventListener('input', handleUpdate));
    restoreButton.addEventListener('click', restoreDefaults);