import React from 'react'

export default function Footer() {
  return (
    <div>


<footer class="bg-green-500 dark:bg-gray-900">
    <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
              <a href="/Home" class="flex items-center">
                  <img src="data:image/jpeg;base64,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" class="h-14 me-3" alt="logo is missing" />
                  <span class="self-center  text-green-900 text-2xl font-semibold whitespace-nowrap dark:text-white">Food Lovers</span>
              </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
              <div>
                  <h2 class="mb-6 text-sm font-semibold uppercase dark:text-white text-white ">pizza hut</h2>
                  <ul class="  text-green-900 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://www.allrecipes.com/recipe/228222/breakfast-pizza/" class="hover:underline">breakfast pizza</a>
                      </li>
                      <li>
                          <a href="https://www.allrecipes.com/recipe/23123/stromboli/" class="hover:underline">calzones</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold  text-white  uppercase dark:text-white">pizza inn</h2>
                  <ul class="  text-green-900 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://www.allrecipes.com/chicken-parmesan-pizza-recipe-7369199" class="hover:underline ">chicken pizza</a>
                      </li>
                      <li>
                          <a href="https://www.allrecipes.com/recipe/231771/true-cheeseburger-pizza/" class="hover:underline">beef pizza</a>
                      </li>
                  </ul>
              </div>
              <div>
                  <h2 class="mb-6 text-sm font-semibold text-white  uppercase dark:text-white">dominos</h2>
                  <ul class="  text-green-900 dark:text-gray-400 font-medium">
                      <li class="mb-4">
                          <a href="https://www.allrecipes.com/recipe/268466/detroit-style-pizza/" class="hover:underline">Pepperoni pizza</a>
                      </li>
                      <li>
                          <a href="https://www.allrecipes.com/recipe/15022/veggie-pizza/" class="hover:underline">veggie pizza</a>
                      </li>
                  </ul>
              </div>
          </div>
      </div>
      <hr class="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
      <div class="sm:flex sm:items-center sm:justify-between">
          <span class="text-sm  text-green-900 sm:text-center dark:text-gray-400">© 2024 <a href="https://flowbite.com/" class="hover:underline">Simon Mwaura and Shadrack Ngeno™</a>. All Rights Reserved.
          </span>
          <div class="flex mt-4 sm:justify-center sm:mt-0">
              <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 8 19">
                        <path fill-rule="evenodd" d="M6.135 3H8V0H6.135a4.147 4.147 0 0 0-4.142 4.142V6H0v3h2v9.938h3V9h2.021l.592-3H5V3.591A.6.6 0 0 1 5.592 3h.543Z" clip-rule="evenodd"/>
                    </svg>
                  <span class="sr-only">Facebook page</span>
              </a>
              <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 21 16">
                        <path d="M16.942 1.556a16.3 16.3 0 0 0-4.126-1.3 12.04 12.04 0 0 0-.529 1.1 15.175 15.175 0 0 0-4.573 0 11.585 11.585 0 0 0-.535-1.1 16.274 16.274 0 0 0-4.129 1.3A17.392 17.392 0 0 0 .182 13.218a15.785 15.785 0 0 0 4.963 2.521c.41-.564.773-1.16 1.084-1.785a10.63 10.63 0 0 1-1.706-.83c.143-.106.283-.217.418-.33a11.664 11.664 0 0 0 10.118 0c.137.113.277.224.418.33-.544.328-1.116.606-1.71.832a12.52 12.52 0 0 0 1.084 1.785 16.46 16.46 0 0 0 5.064-2.595 17.286 17.286 0 0 0-2.973-11.59ZM6.678 10.813a1.941 1.941 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.919 1.919 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Zm6.644 0a1.94 1.94 0 0 1-1.8-2.045 1.93 1.93 0 0 1 1.8-2.047 1.918 1.918 0 0 1 1.8 2.047 1.93 1.93 0 0 1-1.8 2.045Z"/>
                    </svg>
                  <span class="sr-only">Discord community</span>
              </a>
              <a href="#" class="text-white  hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 17">
                    <path fill-rule="evenodd" d="M20 1.892a8.178 8.178 0 0 1-2.355.635 4.074 4.074 0 0 0 1.8-2.235 8.344 8.344 0 0 1-2.605.98A4.13 4.13 0 0 0 13.85 0a4.068 4.068 0 0 0-4.1 4.038 4 4 0 0 0 .105.919A11.705 11.705 0 0 1 1.4.734a4.006 4.006 0 0 0 1.268 5.392 4.165 4.165 0 0 1-1.859-.5v.05A4.057 4.057 0 0 0 4.1 9.635a4.19 4.19 0 0 1-1.856.07 4.108 4.108 0 0 0 3.831 2.807A8.36 8.36 0 0 1 0 14.184 11.732 11.732 0 0 0 6.291 16 11.502 11.502 0 0 0 17.964 4.5c0-.177 0-.35-.012-.523A8.143 8.143 0 0 0 20 1.892Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Twitter page</span>
              </a>
              <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                        <path fill-rule="evenodd" d="M10 .333A9.911 9.911 0 0 0 6.866 19.65c.5.092.678-.215.678-.477 0-.237-.01-1.017-.014-1.845-2.757.6-3.338-1.169-3.338-1.169a2.627 2.627 0 0 0-1.1-1.451c-.9-.615.07-.6.07-.6a2.084 2.084 0 0 1 1.518 1.021 2.11 2.11 0 0 0 2.884.823c.044-.503.268-.973.63-1.325-2.2-.25-4.516-1.1-4.516-4.9A3.832 3.832 0 0 1 4.7 7.068a3.56 3.56 0 0 1 .095-2.623s.832-.266 2.726 1.016a9.409 9.409 0 0 1 4.962 0c1.89-1.282 2.717-1.016 2.717-1.016.366.83.402 1.768.1 2.623a3.827 3.827 0 0 1 1.02 2.659c0 3.807-2.319 4.644-4.525 4.889a2.366 2.366 0 0 1 .673 1.834c0 1.326-.012 2.394-.012 2.72 0 .263.18.572.681.475A9.911 9.911 0 0 0 10 .333Z" clip-rule="evenodd"/>
                  </svg>
                  <span class="sr-only">GitHub account</span>
              </a>
              <a href="#" class="text-white hover:text-gray-900 dark:hover:text-white ms-5">
                  <svg class="w-4 h-4" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 20 20">
                    <path fill-rule="evenodd" d="M10 0a10 10 0 1 0 10 10A10.009 10.009 0 0 0 10 0Zm6.613 4.614a8.523 8.523 0 0 1 1.93 5.32 20.094 20.094 0 0 0-5.949-.274c-.059-.149-.122-.292-.184-.441a23.879 23.879 0 0 0-.566-1.239 11.41 11.41 0 0 0 4.769-3.366ZM8 1.707a8.821 8.821 0 0 1 2-.238 8.5 8.5 0 0 1 5.664 2.152 9.608 9.608 0 0 1-4.476 3.087A45.758 45.758 0 0 0 8 1.707ZM1.642 8.262a8.57 8.57 0 0 1 4.73-5.981A53.998 53.998 0 0 1 9.54 7.222a32.078 32.078 0 0 1-7.9 1.04h.002Zm2.01 7.46a8.51 8.51 0 0 1-2.2-5.707v-.262a31.64 31.64 0 0 0 8.777-1.219c.243.477.477.964.692 1.449-.114.032-.227.067-.336.1a13.569 13.569 0 0 0-6.942 5.636l.009.003ZM10 18.556a8.508 8.508 0 0 1-5.243-1.8 11.717 11.717 0 0 1 6.7-5.332.509.509 0 0 1 .055-.02 35.65 35.65 0 0 1 1.819 6.476 8.476 8.476 0 0 1-3.331.676Zm4.772-1.462A37.232 37.232 0 0 0 13.113 11a12.513 12.513 0 0 1 5.321.364 8.56 8.56 0 0 1-3.66 5.73h-.002Z" clip-rule="evenodd"/>
                </svg>
                  <span class="sr-only">Dribbble account</span>
              </a>
          </div>
      </div>
    </div>
</footer>

    </div>
  )
}
