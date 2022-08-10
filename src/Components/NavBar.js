import React from 'react';

const NavBar = () => {
  return (
    <header class="text-gray-600 body-font">
        <div class="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a class="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <span class="ml-3 text-xl">Quiz Portal</span>
          </a>
          <nav class="md:ml-auto flex flex-wrap items-center text-base justify-center">
            <a class="mr-5 hover:text-gray-900" href='#'>First Link</a>
            <a class="mr-5 hover:text-gray-900" href='#'>Second Link</a>
            <a class="mr-5 hover:text-gray-900" href='#'>Third Link</a>
            <a class="mr-5 hover:text-gray-900" href='#'>Fourth Link</a>
          </nav>
        </div>
      </header>
  )
}

export default NavBar;