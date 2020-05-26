var article=document.getElementsByTagName("article")[0];
var str="";
for(var i=0;i<source.length;i++){
	var h4=source[i].name;
	str+="<section><h4>"+h4+"</h4>";
	for(var j=0;j<source[i].content.length;j++){
		var value=source[i].content[j];
		var temp=value.split("：");
		var name=temp[0];
		var url=temp[1];
		str+='<a target="_bank" href="'+url+'"title="'+name+'"><nobr>'+name+'</nobr></a>';
	}
	str+="</section>";
}
article.innerHTML+=str;