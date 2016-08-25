function btnHandle() {
	
	var oname1 = document.getElementById('name');
	var oname2 = document.getElementById('name-1');

    var Regchinese = /[\u4E00-\u9FA5]/g;
    var regochinese = /[^\u4E00-\u9FA5\uf900-\ufa2d]/g;
    var Regblank = /^\s+|\s+$/g; 

    var source = oname1.value;
    var otemp = source.replace(Regblank,'').replace(Regchinese, '');
    var itxt = otemp.length;

    var temp = source.replace(Regblank,'').replace(regochinese,''); 
    var txt = temp.length;

    var otxt = txt + itxt;

	if (otxt==0) {
		oname1.style.border = "solid 2px #DE0012";
		oname2.innerHTML = "姓名不能为空";
		oname2.style.color = "#DE0012";
	}else {
		if (otxt>=4 && otxt<=16) {
			oname1.style.borderColor = "green";
 		    oname2.innerHTML = "名称格式正确";
 		    oname2.style.color = "green";
		
	}else{	
 		oname2.innerHTML = "必填，长度为4~16个字符";
		oname1.style.border = "solid 2px #DE0012";
		oname2.style.color = "#DE0012";
        }
	}
}
