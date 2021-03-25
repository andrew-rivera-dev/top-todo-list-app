const pageInit = () => {
    const elements = [];
    
    const title = document.createElement('div');
    title.innerHTML = 'ToDay';
    title.classList.add('title');
    elements.push(title);

    const toolbar = document.createElement('div');
    toolbar.innerHTML = 'Settings';
    toolbar.classList.add('toolbar');
    elements.push(toolbar);

    const sidebar = document.createElement('div');
    sidebar.innerHTML = 'Sidebar';
    sidebar.classList.add('sidebar');
    elements.push(sidebar);

    const main = document.createElement('div');
    main.innerHTML = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';
    main.classList.add('main');
    elements.push(main);
    
    const content = document.getElementById('content');
    elements.forEach(e => content.appendChild(e));
}

export {pageInit}