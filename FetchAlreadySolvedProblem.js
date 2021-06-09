function extract() {
  let items = document.getElementsByClassName('reactable-data')[0].rows;
  let se = new Set();
  for(let item of items) {
    let problemName = item.childNodes[2].innerText;
    se.add(problemName.trim());
  }
  console.log(se.size)
  for(let p of  se) console.table(p);
}

extract()
