// First Layout Top Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {
    const ads = [
      {
        link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
        alt: "Ad One: Offer Coca Cola Jobs"
      },
      {
        link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
        image: "https://steamuserimages-a.akamaihd.net/ugc/916925691254943202/89CC7CC0689D553C785B9EE9E3D5062BCB8371E6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        alt: "Global Top Car"
      },
      {
        link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh506D3q4yP_yQPdwMEKEymPMcTQJmTw5gAYejOMUoHZJGlxTe7rRJq4YKAvAcu8-pFzwPOIE9pvxYoy2i_9cibtfFGHqYAgAYLHbcElHquOPl0VtSLr0hxxtaCQzNPfHsT2yPh-V1LSuXVglTFuJzoWtZQNfhRtlG06T46AKGsB3dNz1NFdt6M_H8sLaSt/s16000/npr_coca_cola.gif",
        alt: "Coca Cola"
      },
      {
        link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1aZgcCRdzvPDnH71c6L2k8oCeD_UT4TLpDXbNY6qt1FoW-0HvQIMoSjYZF3Qck4wr_jbutjvYZjw21u4EecH5BpMjRxpARBaIPOLuj6HmF9p6KfHxo4ximsA4wxd4mlchAvIMNo_bLbN5rUKaXkQhF_x9AJNhgqcAG2G3k-whE2oM1HzIcHZ2KjoSZP3H/s16000/newspaper_reports-full-size-png.png",
        alt: "Ad Three: Discount"
      },
      {
        link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
        image: "https://i.pinimg.com/736x/7d/7b/d8/7d7bd875000475c05661f370afa1dfdf.jpg",
        alt: "Ad Three: Discount"
      },
      {
        link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
        image: "https://i.pinimg.com/736x/2f/15/5b/2f155b49b4c0201aecacc7203ac04c63.jpg",
        alt: "Sports"
      },
      {
        link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPwaUXWX4MOKuXezfNHQAIbjLvK7lCpfbhaRGc_BLc8Lz1zgo5_jKqZqNlcnvI9B7htFOF2HjSDFtLxASxEom76ee8180D8jGWq6ErnnsgpFhYRMXR3pk73ETgtqmnfX0BtIp_6TLRIqoEwlS6ebs8zcnpmz4gtPqzOk-q2UMv41KOE6nM5gtFjwRctQiu/s1600/shopping-discount-30%25.jpg",
        alt: "Shopping Discount Global"
      },
      {
        link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
        image: "https://i.pinimg.com/736x/db/20/0a/db200a02819eb485539041a037ba8be1.jpg",
        alt: "Islamic"
      },
      {
        link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
        image: "https://i.pinimg.com/736x/19/62/87/196287329f9554c23f147f8123246b55.jpg",
        alt: "Islam"
      },
      {
        link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
        image: "https://i.pinimg.com/736x/2c/ec/8d/2cec8d67f07779a8e34b8f63186de062.jpg",
        alt: "Shopping"
      }
    ];
    
    let index = 0;
    const adContainer = document.getElementById("asRlBackup-ads");
  
    function showAd() {
      if (adContainer) {
        adContainer.innerHTML = `
          <a href="${ads[index].link}" target="_blank" rel="noopener">
            <img src="${ads[index].image}" loading="lazy" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
          </a>
        `;
        index = (index + 1) % ads.length;
      }
    }
  
    // গুগল অ্যাড লোড হয়েছে কি না চেক করা
    setTimeout(function () {
      const googleAds = adContainer.querySelector("ins.adsbygoogle");
      if (!googleAds || googleAds.offsetHeight === 0) {
        showAd(); // ব্যাকআপ অ্যাড দেখাও
        setInterval(showAd, 15000); // ৩০ সেকেন্ড পরপর পরিবর্তন
      }
    }, 3000);
  });
  

// Second Layout Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {
  const ads = [
    {
      link: "https://www.profitableratecpm.com/junpv4y1u?key=94522a98f7d2ff6a4aa1f6081d9bb29a",
      image: "https://i.pinimg.com/736x/df/70/09/df70092cfbae42bc277b500f87b0b8ec.jpg",
      alt: "Beautiful Girl in the World"
    },
    {
      link: "https://www.profitableratecpm.com/junpv4y1u?key=94522a98f7d2ff6a4aa1f6081d9bb29a",
      image: "https://i.pinimg.com/736x/ae/b5/0f/aeb50fc3c32e652f2cf9597d4aa4edcb.jpg",
      alt: "Traditional Chinese Dresses - Elegant Cheongsam and Qipao Styles"
    },
    {
      link: "https://www.profitableratecpm.com/junpv4y1u?key=94522a98f7d2ff6a4aa1f6081d9bb29a",
      image: "https://i.pinimg.com/736x/5e/3a/47/5e3a4789b6b8ccae7434ba15f1b171d2.jpg",
      alt: "Global Top Beautiful Dress"
    },
    {
      link: "https://www.profitableratecpm.com/junpv4y1u?key=94522a98f7d2ff6a4aa1f6081d9bb29a",
      image: "https://i.pinimg.com/736x/f5/d6/15/f5d615f9023be5e30d2507c9554769fe.jpg",
      alt: "Most top 10 beautiful watch"
    },
    {
      link: "https://www.profitableratecpm.com/junpv4y1u?key=94522a98f7d2ff6a4aa1f6081d9bb29a",
      image: "https://i.pinimg.com/736x/16/f2/4f/16f24f489ef1b3163c39d0d6d49989fd.jpg",
      alt: "Latest Science News and Discoveries - Explore Innovations and Research"
    },
    {
      link: "https://www.profitableratecpm.com/junpv4y1u?key=94522a98f7d2ff6a4aa1f6081d9bb29a",
      image: "https://i.pinimg.com/736x/16/92/45/1692456d45f1d5874c7c5d1d707ec006.jpg",
      alt: "Global Muslim Lover"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPwaUXWX4MOKuXezfNHQAIbjLvK7lCpfbhaRGc_BLc8Lz1zgo5_jKqZqNlcnvI9B7htFOF2HjSDFtLxASxEom76ee8180D8jGWq6ErnnsgpFhYRMXR3pk73ETgtqmnfX0BtIp_6TLRIqoEwlS6ebs8zcnpmz4gtPqzOk-q2UMv41KOE6nM5gtFjwRctQiu/s1600/shopping-discount-30%25.jpg",
      alt: "Shopping Discount Global"
    },
    {
      link: "https://www.profitableratecpm.com/junpv4y1u?key=94522a98f7d2ff6a4aa1f6081d9bb29a",
      image: "https://i.pinimg.com/736x/bb/81/fa/bb81fae62ee9b52ae0d5a3bb6f8ade6f.jpg",
      alt: "A Mother Love Never Fades - Inspirational Quotes and Stories"
    },
    {
      link: "https://www.profitableratecpm.com/junpv4y1u?key=94522a98f7d2ff6a4aa1f6081d9bb29a",
      image: "https://i.pinimg.com/736x/5c/b9/5d/5cb95dd311bbbd2b7fa30b7a472f1d77.jpg",
      alt: "Trusted Health Advice from Doctors - Expert Tips and Care Guides"
    },
    {
      link: "https://www.profitableratecpm.com/junpv4y1u?key=94522a98f7d2ff6a4aa1f6081d9bb29a",
      image: "https://i.pinimg.com/736x/1f/3f/a4/1f3fa4984d0667d83aca1dbb538c419b.jpg",
      alt: "Shop Trendy Dresses Online - Latest Fashion for Every Occasion"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-2");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" loading="lazy" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
        </a>
      `;
      index = (index + 1) % ads.length;
    }
  }

  // গুগল অ্যাড লোড হয়েছে কি না চেক করা
  setTimeout(function () {
    const googleAds = adContainer.querySelector("ins.adsbygoogle");
    if (!googleAds || googleAds.offsetHeight === 0) {
      showAd(); // ব্যাকআপ অ্যাড দেখাও
      setInterval(showAd, 15000); // ৩০ সেকেন্ড পরপর পরিবর্তন
    }
  }, 3000);
});

// 3d Layout Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {
  const ads = [
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/3a/b1/02/3ab102f3f4eb7c8fef0a2182eb4cbab4.jpg",
      alt: "Nobia Neo 3GT 5G"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/f1/60/85/f16085e104e66b739c1e3b97f44354cc.jpg",
      alt: "Doctor Lab Services - Accurate Tests and Fast Results"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/4d/e6/ce/4de6ce0075abdf2e414d3e14b868a0e1.jpg",
      alt: "The Rise of Superbabies in Silicon Valley"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1aZgcCRdzvPDnH71c6L2k8oCeD_UT4TLpDXbNY6qt1FoW-0HvQIMoSjYZF3Qck4wr_jbutjvYZjw21u4EecH5BpMjRxpARBaIPOLuj6HmF9p6KfHxo4ximsA4wxd4mlchAvIMNo_bLbN5rUKaXkQhF_x9AJNhgqcAG2G3k-whE2oM1HzIcHZ2KjoSZP3H/s16000/newspaper_reports-full-size-png.png",
      alt: "Newspaper Reports Today News"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/f9/c7/c4/f9c7c40c4ddf149b62ee1719b9df85b1.jpg",
      alt: "World Top Actress Fation Style"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/1f/bb/1e/1fbb1e2aab8af526fe8998460087d299.jpg",
      alt: "Worldwide New Famale Dress Style"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/29/34/51/293451d2cf9be696438081297b515910.jpg",
      alt: "BMW World"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/46/d8/f9/46d8f9c60aafa73a91f30be1dd29e78f.jpg",
      alt: "Islamic"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/0f/5e/af/0f5eafc6ead85b3bdfd581057e4fffa3.jpg",
      alt: "Islam"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/f2/be/bc/f2bebc702fe204e263ebc4a1b25d4a6d.jpg",
      alt: "Shopping Flower"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-3");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" loading="lazy" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
        </a>
      `;
      index = (index + 1) % ads.length;
    }
  }

  // গুগল অ্যাড লোড হয়েছে কি না চেক করা
  setTimeout(function () {
    const googleAds = adContainer.querySelector("ins.adsbygoogle");
    if (!googleAds || googleAds.offsetHeight === 0) {
      showAd(); // ব্যাকআপ অ্যাড দেখাও
      setInterval(showAd, 15000); // ৩০ সেকেন্ড পরপর পরিবর্তন
    }
  }, 3000);
});

// Four Layout Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {
  const ads = [
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/d6/f8/b3/d6f8b339724b88a7cae2d47f74e6daed.jpg",
      alt: "Islamic Faith - Beliefs, Practices, and Values"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/6b/1c/82/6b1c82006dee23e9b9e98969f4fe86bf.jpg",
      alt: "Ma Amar Jan Islamic Knowladge"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/b2/07/f0/b207f09d9f2a2a91eaa4a9d908ba32e1.jpg",
      alt: "Global AI Power"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/d7/2c/94/d72c94679265982325e49ac4cfebd78a.jpg",
      alt: "Global Islam"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/ad/3d/37/ad3d37195dfd3e760004034ef4b193a6.jpg",
      alt: "Islamic Life - Prayer, Charity, and Spiritual Growth"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/fa/af/11/faaf110245cefed4be64709fe04869f1.jpg",
      alt: "I Love You Allah"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPwaUXWX4MOKuXezfNHQAIbjLvK7lCpfbhaRGc_BLc8Lz1zgo5_jKqZqNlcnvI9B7htFOF2HjSDFtLxASxEom76ee8180D8jGWq6ErnnsgpFhYRMXR3pk73ETgtqmnfX0BtIp_6TLRIqoEwlS6ebs8zcnpmz4gtPqzOk-q2UMv41KOE6nM5gtFjwRctQiu/s1600/shopping-discount-30%25.jpg",
      alt: "Learn About Islam - Faith, History, and Teachings"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/a1/22/06/a1220622f7ecfefe51070d3fa60d8ceb.jpg",
      alt: "The Five Pillars of Islam - A Complete Guide"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/9f/b1/3d/9fb13d7996ada7d74e387ef393bed041.jpg",
      alt: "Quran and Sunnah - The Heart of Islamic Life"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/cf/bd/a5/cfbda5beeec4685dad6f016d5324663d.jpg",
      alt: "Islamic Dress"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-4");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" loading="lazy" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
        </a>
      `;
      index = (index + 1) % ads.length;
    }
  }

  // গুগল অ্যাড লোড হয়েছে কি না চেক করা
  setTimeout(function () {
    const googleAds = adContainer.querySelector("ins.adsbygoogle");
    if (!googleAds || googleAds.offsetHeight === 0) {
      showAd(); // ব্যাকআপ অ্যাড দেখাও
      setInterval(showAd, 15000); // ৩০ সেকেন্ড পরপর পরিবর্তন
    }
  }, 3000);
});

// Five Layout Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {
  const ads = [
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/c2/c4/23/c2c423fe79b837da160cc9107f27b528.jpg",
      alt: "Shop Stylish Watches - Latest Designs for All"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/56/f4/a2/56f4a262f28d5c091219ee623a4933e4.jpg",
      alt: "Luxury Watches Online - Elegant and Timeless"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/2d/09/67/2d09678c84efd58130f0e03721afd3fa.jpg",
      alt: "Shopping Online Islamic Dress"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/f7/47/6d/f7476de08594ac0535be175e88c2a622.jpg",
      alt: "Islamic Teachings on Love - Faith and Compassion"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/a7/01/33/a70133a177c51134423d5c27ae3b41e2.jpg",
      alt: "Love in Islam - Mercy, Respect, and Kindness"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/f1/2d/8d/f12d8d4af12c9f9b3319f0def841636c.jpg",
      alt: "eBaby Shopping Stor"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/19/30/e8/1930e8a68eb7e1df2fe4b86bc0b0748e.jpg",
      alt: "Islam and Love - A Path to True Happiness"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/b7/ac/c1/b7acc16b4d738dcdd0f07a30e3efb700.jpg",
      alt: "Love for Allah and His Creation in Islam"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/83/52/71/835271c3d0bdf11dc08844dd35d1b384.jpg",
      alt: "Beautiful Islamic Quotes About Love"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/af/b9/a3/afb9a30de220cd154dca160e2eac3c80.jpg",
      alt: "Love you Islam"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-5");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" loading="lazy" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
        </a>
      `;
      index = (index + 1) % ads.length;
    }
  }

  // গুগল অ্যাড লোড হয়েছে কি না চেক করা
  setTimeout(function () {
    const googleAds = adContainer.querySelector("ins.adsbygoogle");
    if (!googleAds || googleAds.offsetHeight === 0) {
      showAd(); // ব্যাকআপ অ্যাড দেখাও
      setInterval(showAd, 15000); // ৩০ সেকেন্ড পরপর পরিবর্তন
    }
  }, 3000);
});

// Six Layout Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {
  const ads = [
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/a0/49/73/a049734bace68cc219c2d6772d2b37b6.jpg",
      alt: "Latest Car Models - Reviews, Specs, and Prices"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/b0/f4/5f/b0f45f42b3008c3777ddf1a655fe8e15.jpg",
      alt: "Best Motorcycles for Every Rider - Sport, Cruiser, and More"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/1f/ce/86/1fce86debe00fc641d20294b73468867.jpg",
      alt: "The Beauty of Islam - Faith, Peace, and Purpose"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/87/b1/99/87b199ba081eee149d6c773c7c2a85ee.jpg",
      alt: "Islamic Quotes - Words of Faith and Wisdom"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/ff/05/35/ff0535ed01f78d7d25bdc3249028187f.jpg",
      alt: "Islamic Life - Faith in Everyday Practice"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/e6/7f/85/e67f85a37f9a54f10d2b411250cccc67.jpg",
      alt: "Islam for Beginners - Start Your Journey of Knowledge"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/4d/a5/6d/4da56d48563329cb4baea99cc136b14a.jpg",
      alt: " Islamic Morals and Values - A Way of Life"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/c3/79/94/c3799446653e7e0e37a74dc19fea07db.jpg",
      alt: "Top Watch Brands - Shop Stylish Timepieces"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/fa/76/8c/fa768c6ba003f75d15cda55a7edb9add.jpg",
      alt: "Luxury Watches - Timeless Style and Quality"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/f0/e0/59/f0e0591e15ccbeb9422ace43137e0424.jpg",
      alt: "Modest Fashion for Muslim Women - Abayas, Hijabs & More"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-6");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" loading="lazy" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
        </a>
      `;
      index = (index + 1) % ads.length;
    }
  }

  // গুগল অ্যাড লোড হয়েছে কি না চেক করা
  setTimeout(function () {
    const googleAds = adContainer.querySelector("ins.adsbygoogle");
    if (!googleAds || googleAds.offsetHeight === 0) {
      showAd(); // ব্যাকআপ অ্যাড দেখাও
      setInterval(showAd, 15000); // ৩০ সেকেন্ড পরপর পরিবর্তন
    }
  }, 3000);
});

// Seven Layout Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {
  const ads = [
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/b0/e6/1e/b0e61e287ee8a69b943e0f51fb268712.jpg",
      alt: "Luxury Homes Dream Houses"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/9d/58/30/9d58308e70d859422ff05c3d6fa10c25.jpg",
      alt: "Islamic Beliefs - Faith in One God and Good Deeds"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/df/e3/bb/dfe3bb26c6938e4c6228fa988bd8bc84.jpg",
      alt: "The Message of Islam - Unity, Mercy, and Justice"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/74/80/46/7480462b387bff8be64166e0d076e7ff.jpg",
      alt: "Daily Islamic Practices - Live with Faith"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/52/a3/71/52a371a33ba4c8aed4a5bdaabdba1d32.jpg",
      alt: "Inspiring Life Stories - Real People, Real Change"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/d5/ed/64/d5ed64dfb90917b87445016fc3a0d904.jpg",
      alt: "Balancing Work and Life - Tips for Success"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/30/f2/3b/30f23b5f0de1e515bfe087e19f1a938d.jpg",
      alt: "Mastering Work-Life Balance - Achieve Your Goals"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/cc/10/09/cc10098f1090b4fbb7a6a1219269e79b.jpg",
      alt: "Young Doctors in Healthcare - Challenges and Triumphs"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/09/22/da/0922dadf04965b21293296f64190b3b9.jpg",
      alt: "Racing Hours - Latest Race Schedules and Timings"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/90/30/4c/90304c206ef248c611d86a9fbb667b96.jpg",
      alt: "Modern Sharee Styles - Fashionable and Comfortable"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-7");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" loading="lazy" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
        </a>
      `;
      index = (index + 1) % ads.length;
    }
  }

  // গুগল অ্যাড লোড হয়েছে কি না চেক করা
  setTimeout(function () {
    const googleAds = adContainer.querySelector("ins.adsbygoogle");
    if (!googleAds || googleAds.offsetHeight === 0) {
      showAd(); // ব্যাকআপ অ্যাড দেখাও
      setInterval(showAd, 15000); // ৩০ সেকেন্ড পরপর পরিবর্তন
    }
  }, 3000);
});

// Eight Layout Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {
  const ads = [
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/bc/45/f5/bc45f575db260d004a0f4fdff37060b0.jpg",
      alt: "Artificial intelligence car"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/0d/e7/ed/0de7edc7533260cd84898a71a053b5e4.jpg",
      alt: "Top Motorcycles for Sale - Fast, Reliable, and Affordable"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/94/27/b3/9427b3d4e5f5827162a5a554298a3e78.jpg",
      alt: "Electric Motorcycles - Ride the Future"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/88/fc/57/88fc57f9b3c373a67e8c44278a6ad412.jpg",
      alt: "Best Motorcycles for Beginners - Ride with Confidence"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/73/0f/56/730f564a6e000aa5a938ebd3c546d156.jpg",
      alt: "Dynamic Watches - Stylish and Functional Timepieces"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/4a/2e/eb/4a2eebcf52e3098284cb34f0cad1452c.jpg",
      alt: "Ali Express"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/ed/b7/f2/edb7f28d042cb34865a83e0afd75a040.jpg",
      alt: "Latest in Science - Innovations and Breakthroughs"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/e5/99/64/e599646c7f5043827fa3f1ed63d3c69a.jpg",
      alt: "The Future of Science - Trends and Discoveries"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/aa/b3/ba/aab3ba60efe6642c3158caad7744a124.jpg",
      alt: "Islamic Life"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/70/c1/02/70c1020ae7a0669026f30dd4b167316a.jpg",
      alt: "Muslim Dresses for Women - Celebrate Your Style and Faith"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-8");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" loading="lazy" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
        </a>
      `;
      index = (index + 1) % ads.length;
    }
  }

  // গুগল অ্যাড লোড হয়েছে কি না চেক করা
  setTimeout(function () {
    const googleAds = adContainer.querySelector("ins.adsbygoogle");
    if (!googleAds || googleAds.offsetHeight === 0) {
      showAd(); // ব্যাকআপ অ্যাড দেখাও
      setInterval(showAd, 15000); // ৩০ সেকেন্ড পরপর পরিবর্তন
    }
  }, 3000);
});

// Nine Layout Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {
  const ads = [
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/e3/6c/5d/e36c5ddea9af7ce168eb960893626e34.jpg",
      alt: "Fashionable Muslim Wear - Stylish Dresses for Every Occasion"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/27/b6/b4/27b6b441fb375568dc1dc945eaa90092.jpg",
      alt: "Halal Work"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/7e/08/d6/7e08d614188f0ee659ff4f7dcbeca8dd.jpg",
      alt: "No one understands the pain of a single mother."
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/93/cc/06/93cc0694d1f4b1682ec1eba6b89c25cd.jpg",
      alt: "Top Doctors in Your Area - Reliable Medical Care"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/ce/29/7c/ce297c105d0d5a968d881b2d231669c7.jpg",
      alt: "AI Working"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/6e/e7/9f/6ee79f86b0ac630ae65729276ae8ec13.jpg",
      alt: "Doctor Services - Comprehensive Health Solutions"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/5d/eb/8e/5deb8e7b64416b820baf045e63bbec29.jpg",
      alt: "Amazing Islam"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/6a/e4/59/6ae459e41fced5082e51e95c26f30dd6.jpg",
      alt: "Smoking Celebrity"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/a5/b0/0b/a5b00b1c5d2af35f36cd1078580335e7.jpg",
      alt: "Health All Time Mother to Doter"
    },
    {
      link: "https://www.profitableratecpm.com/iyumgfnjqw?key=37e84e1250c19578419afe637601d5ef",
      image: "https://i.pinimg.com/736x/ab/61/72/ab6172422a880ce9be4a49cac3c04f2c.jpg",
      alt: "Best Amazing Photos"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-9");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" loading="lazy" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
        </a>
      `;
      index = (index + 1) % ads.length;
    }
  }

  // গুগল অ্যাড লোড হয়েছে কি না চেক করা
  setTimeout(function () {
    const googleAds = adContainer.querySelector("ins.adsbygoogle");
    if (!googleAds || googleAds.offsetHeight === 0) {
      showAd(); // ব্যাকআপ অ্যাড দেখাও
      setInterval(showAd, 15000); // ৩০ সেকেন্ড পরপর পরিবর্তন
    }
  }, 3000);
});
