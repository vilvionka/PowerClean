
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