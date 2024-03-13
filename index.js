const web3 = require("@solana/web3.js");
(async () => {
  const solana = new web3.Connection(
    "https://wiser-restless-grass.solana-mainnet.quiknode.pro/fb4ff6c1d115a948a30c455a17d77ebae69e5ee0/"
  );
  console.log(await solana.getLatestBlockhash({ commitment: "confirmed" }));
})();
