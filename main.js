//初始化数据
var initData = init()
var keys = initData["keys"]
var hash = initData["hash"]

//生成键盘
creatKeys()

//监听键盘事件
listenKey()


//下面是工具函数
function createElem(tagName,attribute){
  var elem = document.createElement(tagName)
  for(var i in attribute){
    elem[i] = attribute[i]
  }
  return elem
}

function creatKeys() {
  var wrapper = document.getElementsByTagName("main")[0].getElementsByClassName("wrapper")[0]
  for(let i = 0; i < keys["length"]; i++) {
    var div = createElem("div",{className:"row"})
    for(let j = 0; j < keys[i].length; j++){
      var key = createElem("kbd")

      var btn1 = createElem("button",{innerHTML:"E"})
      btn1.onclick = function(){
        var newWebsite = prompt("请输入新的网址")
        hash[keys[i][j]] = newWebsite
        localStorage.setItem('hash',JSON.stringify(hash))
        this.parentNode.lastChild.src = "http://"+hash[keys[i][j]]+"/favicon.ico"
      }

      var btn2 = createElem("button",{innerHTML:"D"})
      btn2.onclick = function(){
        hash[keys[i][j]] = undefined
        alert(keys[i][j] + "已经删除")
        localStorage.setItem('hash',JSON.stringify(hash))        
      }

      var span = createElem("span",{innerHTML:keys[i][j]})

      var img = createElem("img")
      if(hash[keys[i][j]]){
        img.src = "http://"+hash[keys[i][j]]+"/favicon.ico"
      }else{
        img.src = "//i.loli.net/2018/05/30/5b0e34f588f19.png"
      }
      img.onerror = function(elment){
        element.target.src = "//i.loli.net/2018/05/30/5b0e34f588f19.png"
      }

      wrapper.appendChild(div)
      key.appendChild(btn1)
      key.appendChild(btn2)
      key.appendChild(span)
      key.appendChild(img)
      div.appendChild(key)
    }
  }
}

function listenKey(){
  document.onkeypress = function(event){
    hash[event.key] != undefined &&　window.open("http://"+hash[event.key])
  }
}

function getFromLocalStorage(name){
  return JSON.parse(localStorage.getItem(name))
}

function init(){
  var keys = {
    0: [1,2,3,4,5,6,7,8,9,0],
    1: ['q','w','e','r','t','y','u','i','o','p'],
    2: ['a','s','d','f','g','h','j','k','l'],
    3: ['z','x','c','v','b','n','m'],
    "length": 4
  }
  var hash = {
    'a': "www.acfun.cn",
    'b': "www.bilibili.com",
    'x': "www.panda.tv"
  }
  if(getFromLocalStorage('hash')){
   hash = getFromLocalStorage('hash')
  }
  return obj = {
    "keys": keys,
    "hash": hash
  }
}