window.onload = function () {
    //移入移出显示隐藏左右箭头
    var leftarrow = document.querySelector('.arrow a:first-child');
    var rightarrow = document.querySelector('.arrow a:last-child');
    var box = document.querySelector('.container')
    box.onmouseenter = function () {
        leftarrow.style.display = 'block';
        rightarrow.style.display = 'block';
        clearInterval(timer);
    }
    box.onmouseleave = function () {
        leftarrow.style.display = 'none';
        rightarrow.style.display = 'none';
        clearInterval(timer);
         var timer = setInterval(function(){
        rightarrow.onclick();
    },1000)
    }

    //点击圆点切换图片
    var ols = document.querySelectorAll('ol li');
    var ul = document.querySelector('ul');
    var imgWidth = ul.children[0].offsetWidth;
    ul.style.left = -imgWidth + 'px';
    ols.forEach(function (item, index) {
        item.onclick = function () {
            //排他思想
            excl(index)
            // ul.style.left = -imgWidth * index + 'px';
            animate(ul, { left: -imgWidth * (index + 1) });
            //统一索引
            counte = index;
        }
    })
    // 排他封装
    function excl(x) {
        ols.forEach(function (i) {
            i.removeAttribute('class');
        })
        ols[x].className = 'current';
    }
    //箭头点击切换
    var counte = 0;
    var flag = true;
    rightarrow.onclick = function () {
        if (flag) {
            flag = false;
            counte++;
            if (counte >= ul.children.length - 2) {
                animate(ul, { left: -imgWidth * (counte + 1) }, function () {
                    ul.style.left = -imgWidth + 'px';
                    counte = 0;
                    flag = true;
                });
                excl(0);
            }
            else {
                animate(ul, { left: -imgWidth * (counte + 1) }, function () {
                    flag = true;
                });
                excl(counte);
            }
        }


    }
    leftarrow.onclick = function () {
        if (flag) {
            flag = false;
            counte--;
            if (counte < 0) {
                animate(ul, { left: -imgWidth * (counte + 1) }, function () {
                    ul.style.left = -imgWidth * (ul.children.length - 2) + 'px';
                    counte = ul.children.length - 2;
                    flag = true;
                });
                excl(5);
            } else {
                animate(ul, { left: -imgWidth * (counte + 1) }, function () {
                    flag = true;
                });
                excl(counte);
            }
        }
    }

    //开启定时器
    var timer = setInterval(function(){
        rightarrow.onclick();
    },1000)
}   