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

/**
 * 渲染aqi-table表格
 */
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

/**
 * 点击add-btn时的处理逻辑
 * 获取用户输入，更新数据，并进行页面呈现的更新
 */
function addBtnHandle() {
  addAqiData();
  renderAqiList();
}

/**
 * 点击各个删除按钮的时候的处理逻辑
 * 获取哪个城市数据被删，删除数据，更新表格显示
 */
function delBtnHandle(city) {
  // do sth.
  delete aqiData[city]
  renderAqiList();
}

function init() {

  // 在这下面给add-btn绑定一个点击事件，点击时触发addBtnHandle函数
  document.getElementById("add-btn").addEventListener("click", _ => {
    addBtnHandle()
  })
  // 想办法给aqi-table中的所有删除按钮绑定事件，触发delBtnHandle函数
  document.getElementById("aqi-table").addEventListener("click", function(e){
    if(e.target.nodeName.toLowerCase() === 'button') {
      delBtnHandle(e.target.dataset.cityname);
    }
  })

}

init();
