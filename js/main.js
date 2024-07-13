
(() => {

  let btnFisik = document.querySelector('.js_header_bottom_link_fisik');
  let Cntcatalog = document.querySelector('.js_header_bottom_linkBox_fisik');

  if (btnFisik) {
    btnFisik.addEventListener('click', function () {
      if (Cntcatalog.classList.contains('active')) {
        Cntcatalog.classList.remove('active');
      } else {
        Cntcatalog.classList.add('active');
      }
    })


    document.addEventListener('click', (e) => {
      const lkEl = e.composedPath().includes(btnFisik);
      const gambLk = e.composedPath().includes(Cntcatalog);
      if (!lkEl && !gambLk) {
        Cntcatalog.classList.remove('active');
      }

    })
  }

})();

(() => {

  let btnFisik = document.querySelector('.js_header_bottom_link_legal');
  let Cntcatalog = document.querySelector('.js_header_bottom_linkBox_legal');

  if (btnFisik) {
    btnFisik.addEventListener('click', function () {
      if (Cntcatalog.classList.contains('active')) {
        Cntcatalog.classList.remove('active');
      } else {
        Cntcatalog.classList.add('active');
      }
    })


    document.addEventListener('click', (e) => {
      const lkEl = e.composedPath().includes(btnFisik);
      const gambLk = e.composedPath().includes(Cntcatalog);
      if (!lkEl && !gambLk) {
        Cntcatalog.classList.remove('active');
      }

    })
  }

})();

(() => {

  let btnAbout = document.querySelector('.js_header_bottom_link_about');
  let Cntcatalog = document.querySelector('.js_header_bottom_about_box');

  if (btnAbout) {
    btnAbout.addEventListener('click', function () {
      if (Cntcatalog.classList.contains('active')) {
        Cntcatalog.classList.remove('active');
      } else {
        Cntcatalog.classList.add('active');
      }
    })


    document.addEventListener('click', (e) => {
      const lkEl = e.composedPath().includes(btnAbout);
      const gambLk = e.composedPath().includes(Cntcatalog);
      if (!lkEl && !gambLk) {
        Cntcatalog.classList.remove('active');
      }

    })
  }

})();


(() => {

  let btnGamburg = document.querySelector('.js_header_gamburg');
  let CntGamburg = document.querySelector('.js_gamburg_box');

  if (btnGamburg) {
    btnGamburg.addEventListener('click', function () {
      if (CntGamburg.classList.contains('active')) {
        CntGamburg.classList.remove('active');
        this.classList.remove('active');
      } else {
        CntGamburg.classList.add('active');
        this.classList.add('active');
      }
    })


    document.addEventListener('click', (e) => {
      const lkEl = e.composedPath().includes(btnGamburg);
      const gambLk = e.composedPath().includes(CntGamburg);
      if (!lkEl && !gambLk) {
        CntGamburg.classList.remove('active');
        btnGamburg.classList.remove('active');
      }

    })
  }

})();

(() => {
  let fis = document.querySelector('.js_main_service_fis');
  let leg = document.querySelector('.js_main_service_leg');

  function editText() {
    if (window.innerWidth < 1000 && fis) {
      fis.innerHTML = 'Для физ. лиц'
      leg.innerHTML = 'Для юр. лиц'
    }
    if (window.innerWidth > 1000 && fis) {
      fis.innerHTML = 'Для физических лиц'
      leg.innerHTML = 'Для юридических лиц'
    }
  }
  editText();
  window.addEventListener('resize', editText)

})();


//touchmove price_trigger
(() => {
  let box = document.querySelector('.js_slide_mobile_trigger_price');
  let item = document.querySelector('.js_main_service_header_tab_price');
  let elem = document.querySelectorAll('.price .main_service_header_tab_item');
  let numElem = null;
  let leftNum = 0;
  let num = 0;
  let arr = [];
  if (box) {

    function difElemWidtch() {
      for (let i = 0; i < elem.length; i++) {
        arr.push(elem[i].offsetWidth);
      }
      numElem = elem.length - 1;
      let boxW = box.offsetWidth;
      let itemW = item.offsetWidth;
      if (window.innerWidth < 550) {
        startMove();
      }
    }
    difElemWidtch();
    window.addEventListener('resize', difElemWidtch);

    function goLeft() {
      if (num < numElem) {
        item.style.left = leftNum - arr[num] + 'px';
        leftNum = leftNum - arr[num];
        num = num + 1;
      }
    }

    function goRight() {
      if (num > 0) {
        item.style.left = leftNum + arr[num - 1] + 'px';
        leftNum = leftNum + arr[num - 1];
        num = num - 1;
      }
    }

    function startMove() {
      box.addEventListener('touchstart', handleTouchStart, false);
      box.addEventListener('touchmove', handleTouchMove, false);
    }
    box.addEventListener('touchstart', handleTouchStart, false);
    box.addEventListener('touchmove', handleTouchMove, false);

    let x1 = null;
    let y1 = null;

    function handleTouchStart(e) {
      const firstTouch = e.touches[0];
      x1 = firstTouch.clientX;
      y1 = firstTouch.clientY;

    }

    function handleTouchMove(e) {
      if (!x1 || !y1) {
        return false;
      }
      let x2 = e.touches[0].clientX;
      let y2 = e.touches[0].clientY;
      let xDif = x2 - x1;
      let yDif = y2 - y1;

      if (Math.abs(xDif) > Math.abs(yDif)) {
        if (xDif > 0) {
          goRight();
        }
        else {
          goLeft();
        }
      }
      x1 = null;
      y1 = null;
    }


  }

})();


//touchmove price_trigger
(() => {
  let box = document.querySelector('.js_slide_mobile_trigger_question');
  let item = document.querySelector('.js_main_service_header_tab_question');
  let elem = document.querySelectorAll('.question .main_service_header_tab_item');
  let numElem = null;
  let leftNum = 0;
  let num = 0;
  let arr = [];
  if (box) {

    function difElemWidtch() {
      for (let i = 0; i < elem.length; i++) {
        arr.push(elem[i].offsetWidth);
      }
      numElem = elem.length - 1;
      let boxW = box.offsetWidth;
      let itemW = item.offsetWidth;
      if (window.innerWidth < 550) {
        startMove();
      }
    }
    difElemWidtch();
    window.addEventListener('resize', difElemWidtch);

    function goLeft() {
      if (num < numElem) {
        item.style.left = leftNum - arr[num] + 'px';
        leftNum = leftNum - arr[num];
        num = num + 1;
      }
    }

    function goRight() {
      if (num > 0) {
        item.style.left = leftNum + arr[num - 1] + 'px';
        leftNum = leftNum + arr[num - 1];
        num = num - 1;
      }
    }

    function startMove() {
      box.addEventListener('touchstart', handleTouchStart, false);
      box.addEventListener('touchmove', handleTouchMove, false);
    }
    box.addEventListener('touchstart', handleTouchStart, false);
    box.addEventListener('touchmove', handleTouchMove, false);

    let x1 = null;
    let y1 = null;

    function handleTouchStart(e) {
      const firstTouch = e.touches[0];
      x1 = firstTouch.clientX;
      y1 = firstTouch.clientY;

    }

    function handleTouchMove(e) {
      if (!x1 || !y1) {
        return false;
      }
      let x2 = e.touches[0].clientX;
      let y2 = e.touches[0].clientY;
      let xDif = x2 - x1;
      let yDif = y2 - y1;

      if (Math.abs(xDif) > Math.abs(yDif)) {
        if (xDif > 0) {
          goRight();
        }
        else {
          goLeft();
        }
      }
      x1 = null;
      y1 = null;
    }


  }

})();




//more service_page about block
(() => {
  let btn = document.querySelector('.js_more_service_about');
  let box = document.querySelector('.js_service_about_box_item');

  if (btn) {
    btn.addEventListener('click', moreFunc);
  }
  function moreFunc() {
    if (box.classList.contains('active')) {
      btn.innerHTML = 'Читать полностью';
      btn.classList.remove('active');
      box.classList.remove('active');
    } else {
      btn.innerHTML = 'Закрыть';
      btn.classList.add('active');
      box.classList.add('active');
    }
  }

})();

//delete advertising block
(() => {
  let box = document.querySelector('.js_advertising');
  let but = document.querySelector('.js_advertising_close');

  if(box){
    but.addEventListener('click', function(){
      box.classList.add('remove');
    })
  }


})();

//touchmove other service
(() => {
  let box = document.querySelector('.js_other_services_box_wrap');
  let item = document.querySelector('.js_other_services_box');
  let elem = document.querySelectorAll('.js_other_services_box_item');
  let numElem = null;
  let leftNum = 0;
  let num = 0;
  let arr = [];
  if (box) {

    function difElemWidtch() {
      for (let i = 0; i < elem.length; i++) {
        arr.push(elem[i].offsetWidth);
      }
      numElem = elem.length - 1;
      let boxW = box.offsetWidth;
      let itemW = item.offsetWidth;
      if (window.innerWidth < 780) {
        startMove();
      }
    }
    difElemWidtch();
    window.addEventListener('resize', difElemWidtch);

    function goLeft() {
      if (num < numElem) {
        item.style.left = leftNum - arr[num] - 10 + 'px';
        leftNum = leftNum - arr[num] - 10;
        num = num + 1;
      }
    }

    function goRight() {
      if (num > 0) {
        item.style.left = leftNum + arr[num - 1]  + 10 + 'px';
        leftNum = leftNum + arr[num - 1] + 10;
        num = num - 1;
      }
    }

    function startMove() {
      box.addEventListener('touchstart', handleTouchStart, false);
      box.addEventListener('touchmove', handleTouchMove, false);
    }
    box.addEventListener('touchstart', handleTouchStart, false);
    box.addEventListener('touchmove', handleTouchMove, false);

    let x1 = null;
    let y1 = null;

    function handleTouchStart(e) {
      const firstTouch = e.touches[0];
      x1 = firstTouch.clientX;
      y1 = firstTouch.clientY;

    }

    function handleTouchMove(e) {
      if (!x1 || !y1) {
        return false;
      }
      let x2 = e.touches[0].clientX;
      let y2 = e.touches[0].clientY;
      let xDif = x2 - x1;
      let yDif = y2 - y1;

      if (Math.abs(xDif) > Math.abs(yDif)) {
        if (xDif > 0) {
          goRight();
        }
        else {
          goLeft();
        }
      }
      x1 = null;
      y1 = null;
    }


  }

})();