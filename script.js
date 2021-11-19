function update() {

  tit = document.getElementById('taskname').value;
  des = document.getElementById('taskdescription').value;

  if (localStorage.getItem('itemsJson') == null) {
    itemsArr = [];
    if (tit != '' || des != '') itemsArr.push([tit, des]);
    localStorage.setItem('itemsJson', JSON.stringify(itemsArr));
  }
  else {
    itemsArrstr = localStorage.getItem('itemsJson');
    itemsArr = JSON.parse(itemsArrstr);
    if (tit != '' || des != '') itemsArr.push([tit, des]);
    localStorage.setItem('itemsJson', JSON.stringify(itemsArr));
  }

  tablebody = document.getElementById('tablebody');
  let str = "";
  itemsArr.forEach((element, index) => {
    str += `
                    <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td> 
                    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
                    </tr>`;
  });
  tablebody.innerHTML = str;

}

function upd() {
  if (localStorage.getItem('itemsJson') == null) {
    itemsArr = [];
    //if(tit != '' || des != '') itemsArr.push([tit, des]);
    localStorage.setItem('itemsJson', JSON.stringify(itemsArr));
  }
  else {
    itemsArrstr = localStorage.getItem('itemsJson');
    itemsArr = JSON.parse(itemsArrstr);
    //if(tit != '' || des != '') itemsArr.push([tit, des]);
    localStorage.setItem('itemsJson', JSON.stringify(itemsArr));
  }

  tablebody = document.getElementById('tablebody');
  let str = "";
  itemsArr.forEach((element, index) => {
    str += `
                    <tr>
                    <th scope="row">${index + 1}</th>
                    <td>${element[0]}</td>
                    <td>${element[1]}</td> 
                    <td><button class="btn btn-sm btn-primary" onclick="deleted(${index})">Delete</button></td> 
                    </tr>`;
  });
  tablebody.innerHTML = str;

}
update();

function deleted(itemIndex) {
  itemsArrStr = localStorage.getItem('itemsJson')
  itemsArr = JSON.parse(itemsArrStr);
  // Delete itemIndex element from the array
  itemsArr.splice(itemIndex, 1);
  localStorage.setItem('itemsJson', JSON.stringify(itemsArr));
  upd();

}

function clearstr() {
  if (confirm("Do you really want to clear?")) {
    localStorage.clear();
    upd();
  }
}

setInterval(showdate, 1000);

function showdate() {
  let d = new Date();
  document.getElementById("timedate").innerHTML = d.toLocaleString() + ' ' + '(IST)';
}

function genq(){


  let quotes = 
  [
    '"I have always believed that each man makes his own happiness and is responsible for his own problems. It is a simple philosophy." - Ray Kroc',
    '"Anger is the ultimate destroyer of your own peace of mind" - Dalai Lama',
    '"A man should have the aim and the determination to be honest and upright and sincere in all that he undertakes. If he adds persistency to this he can hardly help being successful" - L. R. Ellert',
    '"Do not be afraid. Be focused. Be determined. Be hopeful. Be empowered." - Michelle Obama',
    '"Congratulations! today is your day. You are off to Great Places! You are off and away." -  Dr. Seuss',
    '"Appreciate those early influences and what they have done for you." - Willie Davis',
    '"The true wealth of a nation lies not in the gold or silver but in the learning, wisdom and in the uprightness of its sons." - Kahlil Gibran', 
    '"If you want to see a rainbow you have to learn to see the rain." - Paulo Coelho',
    '"Remember to focus on goals that are within your control." - Tony Dungy',
    '"In any project, the important factor is your belief. Without belief there can be no successful outcome." - William James', 
    '"Imagine all of us living in peace, its too beautiful to just be a dream." - John Lennon',
  ];

  let randquote = quotes[Math.floor(Math.random() * quotes.length)];
  document.getElementById('quote').innerHTML = randquote;
}