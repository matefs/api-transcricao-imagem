document.addEventListener('paste', (event) => {
  const items = event.clipboardData.items;
  for (let i = 0; i < items.length; i++) {
    if (items[i].type.indexOf('image') !== -1) {
      const blob = items[i].getAsFile();
      const reader = new FileReader();
      reader.onload = function (event) {
        const img = document.createElement('img');
        img.src = event.target.result;
        
        // Limpar conteúdo anterior na div
        const contentDiv = document.getElementById('content');
        contentDiv.innerHTML = '';
        
        contentDiv.appendChild(img);
      };
      reader.readAsDataURL(blob);
      
      // Parar o loop após encontrar uma imagem
      break;
    }
  }
});
