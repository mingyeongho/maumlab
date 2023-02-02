module.exports = {
  env: {
    NEXT_PUBLIC_APIKEY: "AIzaSyCyYwF49kqCNWcWdcq-Ixb6_nauv5Qtpwg",
    NEXT_PUBLIC_AUTHDOMAIN: "maumlab-347c4.firebaseapp.com",
    NEXT_PUBLIC_PROJECTID: "maumlab-347c4",
    NEXT_PUBLIC_STORAGEBUCKET: "maumlab-347c4.appspot.com",
    NEXT_PUBLIC_MESSAGINGSENDERID: "604894212044",
    NEXT_PUBLIC_APPID: "1:604894212044:web:66524178a9a69b8c417769",
  },
  webpack: (config, { isServer }) => {
    if (!isServer) {
      config.target = "electron-renderer";
    }

    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"],
    });

    return config;
  },
};
