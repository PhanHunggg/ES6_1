const jumpText = () => {
  let text = document.querySelector(".heading").innerHTML;

  let char = [...text];

  let html = char.reduce((total, element) => {
    total += `
        <span>${element}</span>
        `;
        return total;
  },"");

  document.querySelector(".heading").innerHTML = html;
};
jumpText();
