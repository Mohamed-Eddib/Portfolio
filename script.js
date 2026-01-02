const LightDarkMode = document.getElementById("light-dark-mode");
const DarkLightSwitch = document.getElementById("light-dark-icon");
LightDarkMode.onclick = () => {
       document.documentElement.style.setProperty('--key-color', 'hsl(0, 0%, 0%)');
       document.documentElement.style.setProperty('--text-color', 'hsl(0, 100%, 100%)');
    }
    
