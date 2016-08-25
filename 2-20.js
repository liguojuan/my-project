function addAqiData() {
  var aqiCity = document.getElementById('aqi-city-input').value.trim();
  var aqiValue = document.getElementById('aqi-value-input').value.trim();
  if (!aqiCity || !aqiValue || 
      !/^[A-Za-z\u4E00-\u9FA5]+$/.test(aqiCity) || /\D/.test(aqiValue)) {
    alert('input invalid');
    return;
  }
  aqiData[aqiCity] = aqiValue;
  document.getElementById('aqi-city-input').value = document.getElementById('aqi-value-input').value = ''
}

function renderAqiList() {
  if (Object.keys(aqiData).length === 0) {
    document.getElementById('aqi-table').innerHTML = '';
    return;
  };
  var tableStr = '<tr><td>城市</td><td>空气质量</td><td>操作</td></tr>';
  for (key in aqiData) {
    tableStr += `<tr><td>${key}</td><td>${aqiData[key]}</td>
      <td><button data-cityname="${key}">删除</button></td></tr>`
  }
  document.getElementById('aqi-table').innerHTML = tableStr;
}


function addBtnHandle() {
  addAqiData();
  renderAqiList();
}


function delBtnHandle(city) {
  // do sth.
  delete aqiData[city]
  renderAqiList();
}

function init() {

  document.getElementById("add-btn").addEventListener("click", _ => {
    addBtnHandle()
  })

  document.getElementById("aqi-table").addEventListener("click", function(e){
    if(e.target.nodeName.toLowerCase() === 'button') {
      delBtnHandle(e.target.dataset.cityname);
    }
  })

}

init();
