
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
      if ( window.innerWidth < 550) {
        startMove();
      }
    }
    difElemWidtch();
    window.addEventListener('resize', difElemWidtch);

    function goLeft() {
      if (num < numElem) {
        item.style.left = leftNum - arr[num]  + 'px';
        leftNum = leftNum - arr[num];
        num = num + 1;
      }
    }

    function goRight() {
      if (num > 0) {
        item.style.left = leftNum + arr[num - 1]  + 'px';
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
      if ( window.innerWidth < 550) {
        startMove();
      }
    }
    difElemWidtch();
    window.addEventListener('resize', difElemWidtch);

    function goLeft() {
      if (num < numElem) {
        item.style.left = leftNum - arr[num]  + 'px';
        leftNum = leftNum - arr[num];
        num = num + 1;
      }
    }

    function goRight() {
      if (num > 0) {
        item.style.left = leftNum + arr[num - 1]  + 'px';
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


//touchmove price_table
(() => {
  let box = document.querySelector('.price_table_box');
  let item = document.querySelector('.price_table');
  let elem = document.querySelectorAll('.price_table .coll');
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
      if ( window.innerWidth < 800) {
        startMove();
      }
    }
    difElemWidtch();
    window.addEventListener('resize', difElemWidtch);

    function goLeft() {
      if (num < numElem) {
        item.style.left = leftNum - arr[num]  + 'px';
        leftNum = leftNum - arr[num];
        num = num + 1;
      }
    }

    function goRight() {
      if (num > 0) {
        item.style.left = leftNum + arr[num - 1]  + 'px';
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