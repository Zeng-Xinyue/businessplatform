//创建一个可以执行简单动画的函数
            /* 
            obj 要执行动画的对象
            attr 要执行动画的样式 left ,top,width,height
            target 执行动画的目标位置
            speed 移动的速度（正数向右，负数向左）【就传正值】
            callback 回调函数，将会在动画执行完毕以后执行
            */
            export function move(obj,attr,target,speed,callback){
                clearInterval(obj.timer);
                /* 
                判断速度的正负，从0向800，则speed为正
                从800向0，则speed为负
                */
               //获取元素目前的位置
                var oldvalue = window.getComputedStyle(obj,null)[attr];
                oldvalue = parseInt(oldvalue);
                if(oldvalue > target) speed = -speed;
                //向执行动画的对象中添加一个timer属性，用来保存它自己的定时器的标识
                obj.timer = setInterval(function(){
                    oldvalue = window.getComputedStyle(obj,null)[attr];
                    oldvalue = parseInt(oldvalue);
                    var newvalue = oldvalue + speed;
                    if(speed > 0 && newvalue > target){
                        newvalue = target;
                    }else if(speed < 0 && newvalue < target){
                        newvalue = target;
                    }
                    obj.style[attr] = newvalue +"px"; 
                    if(newvalue == target){
                        clearInterval(obj.timer);
                        //动画执行完毕，调用回调函数
                        callback && callback();
                    }
                },30);
            };

function setA(index){
             for( var i = 0; i<allA.length;i++){
                 allA[i].style.backgroundColor = "";//内联样式的优先级更高，会覆盖之前的a：hover,所以去掉内联样式，自然样式表生效
             }
             //修改正在选中的a
             allA[index].style.backgroundColor = "black";
            };
            
