import { useEffect } from "react";

export const useMenuEffect = () => {
  useEffect(() => {
    const sideLinks = document.querySelectorAll('.sidebar .side-menu li a:not(.logout)');

    const handleClick = (e) => {
      sideLinks.forEach(i => i.parentElement.classList.remove('active'));
      e.currentTarget.parentElement.classList.add('active');
    };

    sideLinks.forEach(item => item.addEventListener('click', handleClick));

    const menuBar = document.querySelector('.content nav .bx.bx-menu');
    const sideBar = document.querySelector('.sidebar');

    const toggleSidebar = () => {
      sideBar.classList.toggle('close');
    };

    menuBar.addEventListener('click', toggleSidebar);

    const searchBtn = document.querySelector('.content nav form .form-input button');
    const searchBtnIcon = document.querySelector('.content nav form .form-input button .bx');
    const searchForm = document.querySelector('.content nav form');

    const handleSearchBtnClick = (e) => {
      if (window.innerWidth < 576) {
        e.preventDefault();
        searchForm.classList.toggle('show');
        searchBtnIcon.classList.toggle('bx-x');
        searchBtnIcon.classList.toggle('bx-search');
      }
    };

    searchBtn.addEventListener('click', handleSearchBtnClick);

    const handleResize = () => {
      if (window.innerWidth < 768) {
        sideBar.classList.add('close');
      } else {
        sideBar.classList.remove('close');
      }
      if (window.innerWidth > 576) {
        searchBtnIcon.classList.replace('bx-x', 'bx-search');
        searchForm.classList.remove('show');
      }
    };

    window.addEventListener('resize', handleResize);  

    const toggler = document.getElementById('theme-toggle');

    const handleThemeToggleChange = () => {
      document.body.classList.toggle('dark', toggler.checked);
    };

    toggler.addEventListener('change', handleThemeToggleChange);

    return () => {
      sideLinks.forEach(item => item.removeEventListener('click', handleClick));
      menuBar.removeEventListener('click', toggleSidebar);
      searchBtn.removeEventListener('click', handleSearchBtnClick);
      window.removeEventListener('resize', handleResize);
      toggler.removeEventListener('change', handleThemeToggleChange);
    };
  }, []);
};

export default useMenuEffect;
