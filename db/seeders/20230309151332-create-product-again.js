"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */

    await queryInterface.bulkInsert("products", [
      {
        product_name: "asrock motherboard asrock b550m-hdv full06 fmzpj8ju",
        product_image:
          "asrock_motherboard_asrock_b550m-hdv_full06_fmzpj8ju.png",
        category_id: 9,
        price: 2200000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "Asus strix B450 frog gaming II B450",
        product_image: "asus-strix-b450-frog-gaming-II-B450F.jpg",
        category_id: 9,
        price: 4145000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "harddisk internal seagate 1tb",
        product_image: "harddisk-internal-seagate-1tb.jpg",
        category_id: 10,
        price: 655000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "intel core i5 12400F 44GHZ 6C 12T LGA",
        product_image: "intel-corei5-12400F-44GHZ-6C-12T-LGA.jpg",
        category_id: 11,
        price: 5000000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "motherboard asus h81m k socket 1150 h81mk",
        product_image: "motherboard-asus-h81m-k-socket-1150-h81mk.jpg",
        category_id: 9,
        price: 800000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "motherboard intel asrock B560 prod4 1200 B560 DDR4",
        product_image: "motherboard-intel-asrock-B560-prod4-1200-B560-DDR4.jpg",
        category_id: 9,
        price: 2508000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name:
          "intel Core i7 10700K 38Ghz Up to 51Ghz Cache 16MB LGA 12000 Gen 10",
        product_image:
          "intel-Core-i7-10700K-38Ghz-Up-To-51Ghz-Cache-16MB-LGA-12000-GEN-10.jpg",
        category_id: 11,
        price: 4800000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "WD Blue 1TB harddisk internal",
        product_image: "wd-blue-1tb-harddisk-internal_1.webp",
        category_id: 10,
        price: 693000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "MEMORY CORSAIR 8GB DDR4 LONGDIMM CMK8GX4M1A2400",
        product_image: "MEMORY-CORSAIR-8GB-DDR4-LONGDIMM-CMK8GX4M1A2400.png",
        category_id: 12,
        price: 529000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name:
          "Corsair Vengeance RGB PRO 16GB (2x8) DDR4 2666MHz RAM Memory",
        product_image:
          "Corsair-Vengeance-RGB-PRO-16GB-(2x8)-DDR4-2666MHz-RAM-Memory.png",
        category_id: 12,
        price: 2510000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "Gigabyte GeForce GTX 1650 4GB DDR5 OC - GV-N1650OC-4GD",
        product_image:
          "Gigabyte-GeForce-GTX-1650-4GB-DDR5-OC-GV-N1650OC-4GD.png",
        category_id: 13,
        price: 4420000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "Asus Geforce GTX 1050 Ti 4GB DDR5 - Strix",
        product_image: "asus-geforce-gtx-1050-ti-4gb-ddr5-strix.png",
        category_id: 13,
        price: 3550000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "VGA MSI GeForce RTX 3060 12G GAMING X",
        product_image: "VGA-MSI-GeForce-RTX-3060-12G-GAMING-X.png",
        category_id: 13,
        price: 8000000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "Monitor PC Samsung C32R500 32 inch Curved",
        product_image: "Monitor-PC-Samsung-C32R500-32-inch-Curved.jpg",
        category_id: 5,
        price: 3500000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "Monitor LED BenQ MOBIUZ EX2710 IPS 144Hz",
        product_image: "Monitor-LED-BenQ-MOBIUZ-EX2710-IPS-144Hz.jpg",
        category_id: 5,
        price: 5680000,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "ASUS VGA geforce RTX 3080 TI OC12 gaming gddr6x",
        product_image:
          "asus_vga_asus_rog_strix_geforce_rtx_3080_ti_oc_o12g_gaming_gddr6x_hdmi_dp_full01_j1fn28ni.jpg",
        price: 20000000,
        category_id: 13,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name:
          "SanDisk 2TB/1TB Extreme SSD Portable USB Type C 3.1 UpTo 550Mbps - E61 500GB 1050M",
        product_image: "sandisk-ssd-portablr-usb-typec-2tb.png",
        price: 1265000,
        category_id: 14,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "CASING PC SIMBADDA SIM V BARU",
        product_image: "casing-pc-simbadda-simv.jpg",
        price: 265000,
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "Nzxt H5 Flow High Airflow Gaming PC Case - Hitam",
        product_image: "Nzxt-H5-Flow-High-Airflow-Gaming-PC-Case-Hitam.jpg",
        price: 1350000,
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "Cooler Master MASTERBOX Q300L MATX Gaming Case",
        product_image: "Cooler-Master-MASTERBOX-Q300L-MATX-Gaming-Case.jpg",
        price: 609000,
        category_id: 6,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "mechanical keyboard apollo 61",
        product_image: "keyboard-mechanical-apollo-61.jpg",
        price: 1000000,
        category_id: 15,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "WD Blue SSD 500GB Sata III ",
        product_image: "wd-blue-ssd-500gb-sata3_800_800.jpg",
        price: 700000,
        category_id: 18,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "mouse logitech B100",
        product_image: "mouse-logitech-b100.jpg",
        price: 60000,
        category_id: 16,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name:
          "SEGOTEP Becool 120S PC CPU Cooler 120mm Mute Fan LED Rainbow Light PWM",
        product_image:
          "SEGOTEP-Becool-120S-PC-CPU-Cooler-120mm-Mute-Fan-LED-Rainbow-Light-PWM.png",
        price: 459000,
        category_id: 17,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "VGEN RAM DDR4 16GB",
        product_image: "vgen-ram-ddr4-16GB.jfif",
        price: 668000,
        category_id: 12,
        created_at: new Date(),
        updated_at: new Date(),
      },
      {
        product_name: "Gainward RTX 3070 phoenix LHR",
        product_image: "gainward-rtx-3070-phoenix-lhr.jpg",
        price: 7800000,
        category_id: 13,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete("products", null, {});
  },
};
