<template>
  <div>
    <div id="app" class="bg-gradient-to-br from-rose-700 via-warmGray-400 to-green-700">
      <div class="flex flex-col lg:flex-row">
        <div
          class="flex items-center justify-between px-4 py-3 lg:py-0 border-b border-warmGray-400 lg:border-b-0"
        >
          <div>
            <a href="#" class="uppercase font-semibold text-white">
              <img class="h-8" src="images/logo1.png" />
            </a>
          </div>
          <div>
            <button
              class="focus:outline-none text-white block lg:hidden"
              @click.stop="showMenu"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-5 w-5"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  :class="!isOpen ? 'block' : 'hidden'"
                  fill-rule="evenodd"
                  d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h6a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                  clip-rule="evenodd"
                />
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  class="h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    :class="isOpen ? 'block' : 'hidden'"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </svg>
            </button>
          </div>
        </div>
        <div
          :class="isOpen ? 'block' : 'hidden'"
          class="lg:flex flex-col lg:flex-row justify-between w-full py-3 lg:py-0"
        >
          <div class="flex flex-col lg:flex-row">
            <div>
              <router-link link to="/"
                class="block px-4 py-2 lg:py-5 text-warmGray-100 hover:text-cyan-800"
                >Home</router-link
              >
            </div>
            <div @mouseover="show" @mouseleave="hide">
              <a
                href="#"
                class="block px-4 py-2 lg:py-5 text-warmGray-100 hover:text-cyan-800"
                >Artikel</a
              >
              <div
                v-show="isVisible"
                class="lg:absolute normal-case font-semibold bg-gradient-to-br from-rose-400 via-warmGray-300 to-green-400 shadow-md rounded-lg overflow-hidden border w-full"
                style="left: 0px"
              >
                <div class="flex px-10 py-3">
                  <ul class="w-1/2">
                    <li class="mb-3">
                      <a href="#" class="flex group items-center">
                        <img class="h-8 font" src="images/kali.svg" />
                        <span class="ml-2">
                          <span
                            class="block uppercase font-extrabold group-hover:text-cyan-800"
                            >Kali Linux</span
                          >
                          <span
                            class="block text-sm font-extralight group-hover:text-cyan-800"
                            >Belajar tentang Kali Linux</span
                          >
                        </span>
                      </a>
                    </li>
                    <li class="mb-3 items-center">
                      <a href="#" class="flex group items-center">
                        <img class="h-7 ml-2" src="images/v.svg" />
                        <span class="ml-3">
                          <span
                            class="block uppercase font-bold group-hover:text-cyan-800"
                            >Ethical Hacking</span
                          >
                          <span
                            class="block text-sm font-extralight group-hover:text-cyan-800"
                            >Belajar tentang Etichal Hacking</span
                          >
                        </span>
                      </a>
                    </li>
                  </ul>
                  <ul class="w-1/2">
                    <li class="mb-3">
                      <a href="#" class="flex group items-center">
                        <img class="h-7 ml-2" src="images/vuejs.svg" />
                        <span class="ml-2">
                          <span
                            class="block uppercase font-bold group-hover:text-cyan-800"
                            >Vue.Js</span
                          >
                          <span
                            class="block text-sm font-extralight group-hover:text-cyan-800"
                            >Belajar tentang Vue.js</span
                          >
                        </span>
                      </a>
                    </li>
                    <li class="mb-3">
                      <a href="#" class="flex group items-center">
                        <img class="h-7 ml-2" src="images/laravel.png" />
                        <span class="ml-2">
                          <span
                            class="block uppercase font-bold group-hover:text-cyan-800"
                            >Laravel</span
                          >
                          <span
                            class="block text-sm font-extralight group-hover:text-cyan-800"
                            >Belajar tentang Laravel</span
                          >
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div @mouseover="tampil" @mouseleave="sembunyi">
              <a
                href=""
                class="block px-4 py-2 lg:py-5 text-warmGray-100 hover:text-cyan-800"
                >About</a
              >
              <div
                v-show="isShow"
                class="lg:absolute normal-case font-semibold bg-gradient-to-br from-rose-400 via-warmGray-300 to-green-400 shadow-md rounded-lg overflow-hidden border w-full"
                style="left: 0px"
              >
                <div class="flex px-10 py-3">
                  <ul class="w-1/2">
                    <li class="mb-3">
                      <router-link link to="biodata" class="flex group items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M5.121 17.804A13.937 13.937 0 0112 16c2.5 0 4.847.655 6.879 1.804M15 10a3 3 0 11-6 0 3 3 0 016 0zm6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                          />
                        </svg>
                        <span class="px-2">
                          <span
                            class="block uppercase font-bold group-hover:text-cyan-800"
                            >Profil</span
                          >
                          <span
                            class="block text-sm font-extralight group-hover:text-cyan-800"
                            >Biodata Penulis</span
                          >
                        </span>
                      </router-link>
                    </li>
                  </ul>
                  <ul class="w-1/2 px-5">
                    <li class="mb-3">
                      <a href="#" class="flex group items-center">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          class="h-6 w-6 group-hover:text-cyan-800"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253"
                          />
                        </svg>
                        <span class="px-2">
                          <span
                            class="block uppercase font-bold group-hover:text-cyan-800"
                            >Info
                          </span>
                          <span
                            class="block text-sm font-extralight group-hover:text-cyan-800"
                            >Info lainya</span
                          >
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
            <div>
              <a
                href=""
                class="block px-4 py-2 lg:py-5 text-warmGray-100 hover:text-cyan-800"
                >Gallery</a
              >
            </div>
          </div>

          <div class="flex flex-col lg:flex-row">
            <a
              href="#"
              class="block px-4 py-2 lg:py-5 text-warmGray-100 hover:text-cyan-800"
              >Login</a
            >
          </div>
        </div>
      </div>
    </div>
    <router-view></router-view>
    <div class="pt-12">
      <div id="footer" class="relative pt-12">
        <div
          class="py-5 flex flex-col justify-center items-center bg-gradient-to-tl from-green-700 via-warmGray-400 to-rose-700"
        >
          <img class="h-8" src="images/logo1.png" />
          <p class="mt-3 text-xs lg:text-sm leading-none text-white">
            teguhPrayitno@{{ new Date().getFullYear() }}
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      setIsOpen: false,
      isOpen: false,
      isVisible: false,
      isShow: false,
    };
  },
  methods: {
    showMenu() {
      this.isOpen = !this.isOpen;
    },
    show() {
      this.isVisible = true;
    },
    hide() {
      this.isVisible = false;
    },
    tampil() {
      this.isShow = true;
    },
    sembunyi() {
      this.isShow = false;
    },
  },
};
</script>