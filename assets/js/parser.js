window.addEventListener('DOMContentLoader', () => {
  const body = document.querySelector('body');

  function recursy (element) {
    element.childNodes.forEach(node => {
        console.log(node);
        if (element.childNodes.lenght > 1) {
          recursy(node);
        }
    });
  }

});
