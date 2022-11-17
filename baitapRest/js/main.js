const domId = (id) => document.getElementById(id);
domId("btnKhoi1").addEventListener("click", () => {
  let math = +domId("inpToan").value;
  let phys = +domId("inpLy").value;
  let chem = +domId("inpHoa").value;
  let point = handelPoint(math, phys, chem);

  domId("tbKhoi1").innerHTML = point;
});

domId("btnKhoi2").addEventListener("click", () => {
  let lit = +domId("inpVan").value;
  let his = +domId("inpSu").value;
  let geo = +domId("inpDia").value;
  let eng = +domId("inpEnglish").value;
  let point = handelPoint(lit, his, geo, eng);

  domId("tbKhoi2").innerHTML = point;
});

const handelPoint = (...restParams) => {
  let total = 0;
  let count = 0;
  for (let i in restParams) {
    total += restParams[i];
    count++;
    console.log(total, count);
  }
  let GPA = total / count;
  return Math.round(GPA * 100) / 100;
};
