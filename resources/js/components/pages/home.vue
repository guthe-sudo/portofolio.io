<template>
  <div class="container mx-auto mt-3">
    <section class="flex">
      <div class="text-center p-2 w-full">
        <h2 class="text-4xl my-2">
          Belajar Apapun Tentang Pemrograman,
          menggunakan <b>LINUX</b>
        </h2>
        <img
          class="block mx-auto"
          :src="`images/logo1.png`"
          width="500"
          alt=""
        />
        <h4 class="text-gray-700 mt-3">
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Ad illo cum
          repudiandae veniam, tempore pariatur enim nisi asperiores laborum
          molestias similique sunt itaque, reiciendis ipsa sapiente deserunt?
          Laborum, iusto nam.
        </h4>
      </div>
      
    </section>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showMenu: false,
    };
  },
  methods: {
    toggleNavbar: function () {
      this.showMenu = !this.showMenu;
    },
  },
};
</script>
