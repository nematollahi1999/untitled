// data/tshirts.js
export const tshirts = [
  // Fit body type
  { body: "fit", neck: "loose", sleeve: "normal", src: "images/Renders/BNLN.jpg" },
  { body: "fit", neck: "loose", sleeve: "long", src: "images/Renders/BNLL.jpg" },
  { body: "fit", neck: "loose", sleeve: "less", src: "images/Renders/BNLS.jpg" },
  { body: "fit", neck: "normal", sleeve: "normal", src: "images/Renders/BNNN.jpg" },
  { body: "fit", neck: "normal", sleeve: "long", src: "images/Renders/BNNL.jpg" },
  { body: "fit", neck: "normal", sleeve: "less", src: "images/Renders/BNNS.jpg" },
  { body: "fit", neck: "mock", sleeve: "normal", src: "images/Renders/BNMN.jpg" },
  { body: "fit", neck: "mock", sleeve: "long", src: "images/Renders/BNML.jpg" },
  { body: "fit", neck: "mock", sleeve: "less", src: "images/Renders/BNMS.jpg" },

  // Oversized body type
  { body: "oversized", neck: "loose", sleeve: "normal", src: "images/Renders/BOLN.jpg" },
  { body: "oversized", neck: "loose", sleeve: "long", src: "images/Renders/BOLL.jpg" },
  { body: "oversized", neck: "loose", sleeve: "less", src: "images/Renders/BOLS.jpg" },
  { body: "oversized", neck: "normal", sleeve: "normal", src: "images/Renders/BONN.jpg" },
  { body: "oversized", neck: "normal", sleeve: "long", src: "images/Renders/BONL.jpg" },
  { body: "oversized", neck: "normal", sleeve: "less", src: "images/Renders/BONS.jpg" },
  { body: "oversized", neck: "mock", sleeve: "normal", src: "images/Renders/BOMN.jpg" },
  { body: "oversized", neck: "mock", sleeve: "long", src: "images/Renders/BOML.jpg" },
  { body: "oversized", neck: "mock", sleeve: "less", src: "images/Renders/BOMS.jpg" },
];

export const Items = [
  {
    title: "نوع یقه",
    header: "انتخاب نوع یقه",
    detail:
      "نوع یقه برحسب سلیقه کاربر روی راحتی و انعطاف حرکتی گردن تاثیر مستقیم دارد.",
    samples: "/",
    options: [
      {
        title: "یقه لوس",
        subtitle: "یقه عادی یک سانتی",
        img: "/images/neck.jpg",
        neck: "loose",
      },
      {
        title: "یقه نرمال",
        subtitle: "یقه عادی یک سانتی",
        img: "/images/neck.jpg",
        neck: "normal",
      },
      {
        title: "یقه ماک",
        subtitle: "یقه عادی یک سانتی",
        img: "/images/neck.jpg",
        neck: "mock",
      },
    ],
  },
  {
    title: "نوع تنه",
    header: "انتخاب نوع تنه",
    detail: "تفاوت تنه فیت و اورسایز برحسب سلیقه و میزان راحتی آن می باشد.",
    samples: "/",
    options: [
      {
        title: "نرمال فیت",
        subtitle: "فیت عادی و نرمال",
        img: "/images/neck.jpg",
        body: "fit",
      },
      {
        title: "اورسایز",
        subtitle: "فیت گشادتر و راحت تر ",
        img: "/images/neck.jpg",
        body: "oversized",
      },
    ],
  },
  {
    title: "نوع آستین",
    header: "انتخاب نوع آستین",
    detail:
      "نوع آستین برحسب سلیقه کاربر روی راحتی و انعطاف حرکتی گردن تاثیر مستقیم دارد.",
    samples: "/",
    options: [
      {
        title: "آستین نرمال",
        subtitle: "آستین با طول یه ربع",
        img: "/images/neck.jpg",
        sleeve: "normal",
      },
      {
        title: "آستین لانگ",
        subtitle: "آستین با طول دو ربع",
        img: "/images/neck.jpg",
        sleeve: "long",
      },
      {
        title: "آستین حلقه ای",
        subtitle: "بدون آستین",
        img: "/images/neck.jpg",
        sleeve: "less",
      },
    ],
  },
  
];

export const bodyItems = [
  {
    title: "نوع تنه",
    header: "انتخاب نوع تنه",
    detail: "تفاوت تنه فیت و اورسایز برحسب سلیقه و میزان راحتی آن می باشد.",
    samples: "/",
    options: [
      {
        title: "نرمال فیت",
        subtitle: "فیت عادی و نرمال",
        img: "/images/neck.jpg",
        body: "fit",
      },
      {
        title: "اورسایز",
        subtitle: "فیت گشادتر و راحت تر ",
        img: "/images/neck.jpg",
        body: "oversized",
      },
    ],
  },
  
];

export const sleeveItems = [
  {
    title: "نوع آستین",
    header: "انتخاب نوع آستین",
    detail:
      "نوع آستین برحسب سلیقه کاربر روی راحتی و انعطاف حرکتی گردن تاثیر مستقیم دارد.",
    samples: "/",
    options: [
      {
        title: "آستین نرمال",
        subtitle: "آستین با طول یه ربع",
        img: "/images/neck.jpg",
        sleeve: "normal",
      },
      {
        title: "آستین لانگ",
        subtitle: "آستین با طول دو ربع",
        img: "/images/neck.jpg",
        sleeve: "long",
      },
      {
        title: "آستین حلقه ای",
        subtitle: "بدون آستین",
        img: "/images/neck.jpg",
        sleeve: "less",
      },
    ],
  },
  // {
  //   title: "دوخت آستین",
  //   header: "تعیین دوخت آستین",
  //   detail: "نوع دوخت روی ایستایی و زیبایی آستین تاثیرگذار است.",
  //   samples: "/",
  //   options: [
  //     {
  //       title: "تک نخه",
  //       subtitle: "دوخت عادی با ایستایی نرمال",
  //       img: "/images/neck.jpg",
  //       stitch: "single",
  //     },
  //     {
  //       title: "دو نخه",
  //       subtitle: "دوخت دو نخه با ایستایی بالا",
  //       img: "/images/neck.jpg",
  //       stitch: "double",
  //     },
  //     {
  //       title: "دوخت مخفی",
  //       subtitle: "دوخت مخفی با ایستایی نرمال",
  //       img: "/images/neck.jpg",
  //       stitch: "hidden",
  //     },
  //   ],
  // },
];
