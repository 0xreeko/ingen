/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        amethyst: {
          "50": "rgba(247, 247, 255)",
    "100": "rgba(240, 239, 255)",
    "200": "rgba(217, 214, 255)",
    "300": "rgba(193, 189, 255)",
    "400": "rgba(147, 140, 255)",
    "500": "rgba(101, 91, 255)",
    "600": "rgba(91, 82, 230)",
    "700": "rgba(76, 68, 191)",
    "800": "rgba(61, 55, 153)",
    "900": "rgba(49, 45, 125)"
        },
        aqua: {
          "50": "rgba(242, 253, 255)",
    "100": "rgba(230, 251, 255)",
    "200": "rgba(191, 246, 255)",
    "300": "rgba(153, 240, 255)",
    "400": "rgba(77, 228, 255)",
    "500": "rgba(0, 217, 255)",
    "600": "rgba(0, 195, 230)",
    "700": "rgba(0, 163, 191)",
    "800": "rgba(0, 130, 153)",
    "900": "rgba(0, 106, 125)"
        },
        azure: {
          "50": "rgba(242, 248, 255)",
    "100": "rgba(230, 241, 255)",
    "200": "rgba(191, 221, 255)",
    "300": "rgba(153, 201, 255)",
    "400": "rgba(77, 160, 255)",
    "500": "rgba(0, 119, 255)",
    "600": "rgba(0, 107, 230)",
    "700": "rgba(0, 89, 191)",
    "800": "rgba(0, 71, 153)",
    "900": "rgba(0, 58, 125)"
        },
        jade: {
          "50": "rgba(252, 255, 242)",
    "100": "rgba(248, 255, 230)",
    "200": "rgba(238, 255, 191)",
    "300": "rgba(228, 255, 153)",
    "400": "rgba(207, 255, 77)",
    "500": "rgba(187, 255, 0)",
    "600": "rgba(168, 230, 0)",
    "700": "rgba(140, 191, 0)",
    "800": "rgba(112, 153, 0)",
    "900": "rgba(92, 125, 0)"
        },
        jasper: {
          "50": "rgba(255, 253, 242)",
    "100": "rgba(255, 250, 230)",
    "200": "rgba(255, 243, 191)",
    "300": "rgba(255, 236, 153)",
    "400": "rgba(255, 222, 77)",
    "500": "rgba(255, 208, 0)",
    "600": "rgba(230, 187, 0)",
    "700": "rgba(191, 156, 0)",
    "800": "rgba(153, 125, 0)",
    "900": "rgba(125, 102, 0)"
        },
        kunzite: {
          "50": "rgba(250, 248, 255)",
          "100": "rgba(246, 240, 255)",
          "200": "rgba(232, 218, 255)",
          "300": "rgba(219, 196, 255)",
          "400": "rgba(191, 152, 255)",
          "500": "rgba(164, 108, 255)",
          "600": "rgba(148, 97, 230)",
          "700": "rgba(123, 81, 191)",
          "800": "rgba(98, 65, 153)",
          "900": "rgba(80, 53, 125)"
        },
        moonstone: {
          "50": "rgba(255, 254, 253)",
    "100": "rgba(254, 253, 251)",
    "200": "rgba(253, 249, 244)",
    "300": "rgba(251, 245, 237)",
    "400": "rgba(249, 238, 224)",
    "500": "rgba(246, 231, 210)",
    "600": "rgba(221, 208, 189)",
    "700": "rgba(185, 173, 158)",
    "800": "rgba(148, 139, 126)",
    "900": "rgba(121, 113, 103)"
        },
        peridot: {
          "50": "rgba(246, 255, 242)",
    "100": "rgba(238, 255, 230)",
    "200": "rgba(212, 255, 191)",
    "300": "rgba(185, 255, 153)",
    "400": "rgba(133, 255, 77)",
    "500": "rgba(81, 255, 0)",
    "600": "rgba(73, 230, 0)",
    "700": "rgba(61, 191, 0)",
    "800": "rgba(49, 153, 0)",
    "900": "rgba(40, 125, 0)"
        },
        ruby: {
          "50": "rgba(255, 242, 248)",
    "100": "rgba(255, 230, 240)",
    "200": "rgba(255, 191, 218)",
    "300": "rgba(255, 153, 195)",
    "400": "rgba(255, 77, 151)",
    "500": "rgba(255, 0, 106)",
    "600": "rgba(230, 0, 95)",
    "700": "rgba(191, 0, 80)",
    "800": "rgba(153, 0, 64)",
    "900": "rgba(125, 0, 52)"
        },
        russian: {
          "50": "rgba(243, 243, 244)",
    "100": "rgba(231, 231, 233)",
    "200": "rgba(194, 195, 201)",
    "300": "rgba(158, 159, 169)",
    "400": "rgba(85, 87, 104)",
    "500": "rgba(12, 15, 39)",
    "600": "rgba(11, 14, 35)",
    "700": "rgba(9, 11, 29)",
    "800": "rgba(7, 9, 23)",
    "900": "rgba(6, 7, 19)"
        },
        scarlet: {
          "50": "rgba(255, 242, 244)",
          "100": "rgba(255, 230, 233)",
          "200": "rgba(255, 191, 200)",
          "300": "rgba(255, 153, 167)",
          "400": "rgba(255, 77, 101)",
          "500": "rgba(255, 0, 35)",
          "600": "rgba(230, 0, 32)",
          "700": "rgba(191, 0, 26)",
          "800": "rgba(153, 0, 21)",
          "900": "rgba(125, 0, 17)"
        },
        stratos: {
          "50": "rgba(243, 243, 245)",
    "100": "rgba(231, 231, 236)",
    "200": "rgba(196, 194, 207)",
    "300": "rgba(160, 157, 178)",
    "400": "rgba(89, 84, 120)",
    "500": "rgba(18, 10, 62)",
    "600": "rgba(16, 9, 56)",
    "700": "rgba(14, 8, 47)",
    "800": "rgba(11, 6, 37)",
    "900": "rgba(9, 5, 30)"
        },
        sunstone: {
          "50": "rgba(255, 251, 244)",
    "100": "rgba(255, 246, 233)",
    "200": "rgba(255, 233, 201)",
    "300": "rgba(255, 220, 168)",
    "400": "rgba(255, 194, 102)",
    "500": "rgba(255, 168, 37)",
    "600": "rgba(230, 151, 33)",
    "700": "rgba(191, 126, 28)",
    "800": "rgba(153, 101, 22)",
    "900": "rgba(125, 82, 18)"
        },
        sylver:{
          "50": "rgba(254, 254, 254)",
    "100": "rgba(252, 253, 254)",
    "200": "rgba(248, 249, 251)",
    "300": "rgba(243, 246, 249)",
    "400": "rgba(235, 239, 245)",
    "500": "rgba(226, 232, 240)",
    "600": "rgba(203, 209, 216)",
    "700": "rgba(170, 174, 180)",
    "800": "rgba(136, 139, 144)",
    "900": "rgba(111, 114, 118)"
        },
      },
    },
  },
  plugins: [],
}