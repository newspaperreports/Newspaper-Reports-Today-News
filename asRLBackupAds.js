// First Layout Top Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {
    const ads = [
      {
        link: "https://www.newspaperreports.com",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
        alt: "Ad One: Offer Coca Cola Jobs"
      },
      {
        link: "https://www.newspaperreports.com",
        image: "https://steamuserimages-a.akamaihd.net/ugc/916925691254943202/89CC7CC0689D553C785B9EE9E3D5062BCB8371E6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
        alt: "Global Top Car"
      },
      {
        link: "https://www.newspaperreports.com",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh506D3q4yP_yQPdwMEKEymPMcTQJmTw5gAYejOMUoHZJGlxTe7rRJq4YKAvAcu8-pFzwPOIE9pvxYoy2i_9cibtfFGHqYAgAYLHbcElHquOPl0VtSLr0hxxtaCQzNPfHsT2yPh-V1LSuXVglTFuJzoWtZQNfhRtlG06T46AKGsB3dNz1NFdt6M_H8sLaSt/s16000/npr_coca_cola.gif",
        alt: "Coca Cola"
      },
      {
        link: "https://www.newspaperreports.com",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1aZgcCRdzvPDnH71c6L2k8oCeD_UT4TLpDXbNY6qt1FoW-0HvQIMoSjYZF3Qck4wr_jbutjvYZjw21u4EecH5BpMjRxpARBaIPOLuj6HmF9p6KfHxo4ximsA4wxd4mlchAvIMNo_bLbN5rUKaXkQhF_x9AJNhgqcAG2G3k-whE2oM1HzIcHZ2KjoSZP3H/s16000/newspaper_reports-full-size-png.png",
        alt: "Ad Three: Discount"
      },
      {
        link: "https://www.newspaperreports.com",
        image: "https://i.pinimg.com/736x/7d/7b/d8/7d7bd875000475c05661f370afa1dfdf.jpg",
        alt: "Ad Three: Discount"
      },
      {
        link: "https://www.newspaperreports.com",
        image: "https://i.pinimg.com/736x/2f/15/5b/2f155b49b4c0201aecacc7203ac04c63.jpg",
        alt: "Sports"
      },
      {
        link: "https://www.newspaperreports.com",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPwaUXWX4MOKuXezfNHQAIbjLvK7lCpfbhaRGc_BLc8Lz1zgo5_jKqZqNlcnvI9B7htFOF2HjSDFtLxASxEom76ee8180D8jGWq6ErnnsgpFhYRMXR3pk73ETgtqmnfX0BtIp_6TLRIqoEwlS6ebs8zcnpmz4gtPqzOk-q2UMv41KOE6nM5gtFjwRctQiu/s1600/shopping-discount-30%25.jpg",
        alt: "Shopping Discount Global"
      },
      {
        link: "https://www.newspaperreports.com",
        image: "https://i.pinimg.com/736x/db/20/0a/db200a02819eb485539041a037ba8be1.jpg",
        alt: "Islamic"
      },
      {
        link: "https://www.newspaperreports.com",
        image: "https://i.pinimg.com/736x/19/62/87/196287329f9554c23f147f8123246b55.jpg",
        alt: "Islam"
      },
      {
        link: "https://www.newspaperreports.com",
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
            <img src="${ads[index].image}" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
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
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad One: Offer Coca Cola Jobs"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://steamuserimages-a.akamaihd.net/ugc/916925691254943202/89CC7CC0689D553C785B9EE9E3D5062BCB8371E6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      alt: "Global Top Car"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh506D3q4yP_yQPdwMEKEymPMcTQJmTw5gAYejOMUoHZJGlxTe7rRJq4YKAvAcu8-pFzwPOIE9pvxYoy2i_9cibtfFGHqYAgAYLHbcElHquOPl0VtSLr0hxxtaCQzNPfHsT2yPh-V1LSuXVglTFuJzoWtZQNfhRtlG06T46AKGsB3dNz1NFdt6M_H8sLaSt/s16000/npr_coca_cola.gif",
      alt: "Coca Cola"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1aZgcCRdzvPDnH71c6L2k8oCeD_UT4TLpDXbNY6qt1FoW-0HvQIMoSjYZF3Qck4wr_jbutjvYZjw21u4EecH5BpMjRxpARBaIPOLuj6HmF9p6KfHxo4ximsA4wxd4mlchAvIMNo_bLbN5rUKaXkQhF_x9AJNhgqcAG2G3k-whE2oM1HzIcHZ2KjoSZP3H/s16000/newspaper_reports-full-size-png.png",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/7d/7b/d8/7d7bd875000475c05661f370afa1dfdf.jpg",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2f/15/5b/2f155b49b4c0201aecacc7203ac04c63.jpg",
      alt: "Sports"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPwaUXWX4MOKuXezfNHQAIbjLvK7lCpfbhaRGc_BLc8Lz1zgo5_jKqZqNlcnvI9B7htFOF2HjSDFtLxASxEom76ee8180D8jGWq6ErnnsgpFhYRMXR3pk73ETgtqmnfX0BtIp_6TLRIqoEwlS6ebs8zcnpmz4gtPqzOk-q2UMv41KOE6nM5gtFjwRctQiu/s1600/shopping-discount-30%25.jpg",
      alt: "Shopping Discount Global"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/db/20/0a/db200a02819eb485539041a037ba8be1.jpg",
      alt: "Islamic"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/19/62/87/196287329f9554c23f147f8123246b55.jpg",
      alt: "Islam"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2c/ec/8d/2cec8d67f07779a8e34b8f63186de062.jpg",
      alt: "Shopping"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-2");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
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
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad One: Offer Coca Cola Jobs"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://steamuserimages-a.akamaihd.net/ugc/916925691254943202/89CC7CC0689D553C785B9EE9E3D5062BCB8371E6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      alt: "Global Top Car"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh506D3q4yP_yQPdwMEKEymPMcTQJmTw5gAYejOMUoHZJGlxTe7rRJq4YKAvAcu8-pFzwPOIE9pvxYoy2i_9cibtfFGHqYAgAYLHbcElHquOPl0VtSLr0hxxtaCQzNPfHsT2yPh-V1LSuXVglTFuJzoWtZQNfhRtlG06T46AKGsB3dNz1NFdt6M_H8sLaSt/s16000/npr_coca_cola.gif",
      alt: "Coca Cola"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1aZgcCRdzvPDnH71c6L2k8oCeD_UT4TLpDXbNY6qt1FoW-0HvQIMoSjYZF3Qck4wr_jbutjvYZjw21u4EecH5BpMjRxpARBaIPOLuj6HmF9p6KfHxo4ximsA4wxd4mlchAvIMNo_bLbN5rUKaXkQhF_x9AJNhgqcAG2G3k-whE2oM1HzIcHZ2KjoSZP3H/s16000/newspaper_reports-full-size-png.png",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/7d/7b/d8/7d7bd875000475c05661f370afa1dfdf.jpg",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2f/15/5b/2f155b49b4c0201aecacc7203ac04c63.jpg",
      alt: "Sports"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPwaUXWX4MOKuXezfNHQAIbjLvK7lCpfbhaRGc_BLc8Lz1zgo5_jKqZqNlcnvI9B7htFOF2HjSDFtLxASxEom76ee8180D8jGWq6ErnnsgpFhYRMXR3pk73ETgtqmnfX0BtIp_6TLRIqoEwlS6ebs8zcnpmz4gtPqzOk-q2UMv41KOE6nM5gtFjwRctQiu/s1600/shopping-discount-30%25.jpg",
      alt: "Shopping Discount Global"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/db/20/0a/db200a02819eb485539041a037ba8be1.jpg",
      alt: "Islamic"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/19/62/87/196287329f9554c23f147f8123246b55.jpg",
      alt: "Islam"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2c/ec/8d/2cec8d67f07779a8e34b8f63186de062.jpg",
      alt: "Shopping"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-3");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
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
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad One: Offer Coca Cola Jobs"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://steamuserimages-a.akamaihd.net/ugc/916925691254943202/89CC7CC0689D553C785B9EE9E3D5062BCB8371E6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      alt: "Global Top Car"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh506D3q4yP_yQPdwMEKEymPMcTQJmTw5gAYejOMUoHZJGlxTe7rRJq4YKAvAcu8-pFzwPOIE9pvxYoy2i_9cibtfFGHqYAgAYLHbcElHquOPl0VtSLr0hxxtaCQzNPfHsT2yPh-V1LSuXVglTFuJzoWtZQNfhRtlG06T46AKGsB3dNz1NFdt6M_H8sLaSt/s16000/npr_coca_cola.gif",
      alt: "Coca Cola"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1aZgcCRdzvPDnH71c6L2k8oCeD_UT4TLpDXbNY6qt1FoW-0HvQIMoSjYZF3Qck4wr_jbutjvYZjw21u4EecH5BpMjRxpARBaIPOLuj6HmF9p6KfHxo4ximsA4wxd4mlchAvIMNo_bLbN5rUKaXkQhF_x9AJNhgqcAG2G3k-whE2oM1HzIcHZ2KjoSZP3H/s16000/newspaper_reports-full-size-png.png",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/7d/7b/d8/7d7bd875000475c05661f370afa1dfdf.jpg",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2f/15/5b/2f155b49b4c0201aecacc7203ac04c63.jpg",
      alt: "Sports"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPwaUXWX4MOKuXezfNHQAIbjLvK7lCpfbhaRGc_BLc8Lz1zgo5_jKqZqNlcnvI9B7htFOF2HjSDFtLxASxEom76ee8180D8jGWq6ErnnsgpFhYRMXR3pk73ETgtqmnfX0BtIp_6TLRIqoEwlS6ebs8zcnpmz4gtPqzOk-q2UMv41KOE6nM5gtFjwRctQiu/s1600/shopping-discount-30%25.jpg",
      alt: "Shopping Discount Global"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/db/20/0a/db200a02819eb485539041a037ba8be1.jpg",
      alt: "Islamic"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/19/62/87/196287329f9554c23f147f8123246b55.jpg",
      alt: "Islam"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2c/ec/8d/2cec8d67f07779a8e34b8f63186de062.jpg",
      alt: "Shopping"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-4");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
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
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad One: Offer Coca Cola Jobs"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://steamuserimages-a.akamaihd.net/ugc/916925691254943202/89CC7CC0689D553C785B9EE9E3D5062BCB8371E6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      alt: "Global Top Car"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh506D3q4yP_yQPdwMEKEymPMcTQJmTw5gAYejOMUoHZJGlxTe7rRJq4YKAvAcu8-pFzwPOIE9pvxYoy2i_9cibtfFGHqYAgAYLHbcElHquOPl0VtSLr0hxxtaCQzNPfHsT2yPh-V1LSuXVglTFuJzoWtZQNfhRtlG06T46AKGsB3dNz1NFdt6M_H8sLaSt/s16000/npr_coca_cola.gif",
      alt: "Coca Cola"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1aZgcCRdzvPDnH71c6L2k8oCeD_UT4TLpDXbNY6qt1FoW-0HvQIMoSjYZF3Qck4wr_jbutjvYZjw21u4EecH5BpMjRxpARBaIPOLuj6HmF9p6KfHxo4ximsA4wxd4mlchAvIMNo_bLbN5rUKaXkQhF_x9AJNhgqcAG2G3k-whE2oM1HzIcHZ2KjoSZP3H/s16000/newspaper_reports-full-size-png.png",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/7d/7b/d8/7d7bd875000475c05661f370afa1dfdf.jpg",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2f/15/5b/2f155b49b4c0201aecacc7203ac04c63.jpg",
      alt: "Sports"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPwaUXWX4MOKuXezfNHQAIbjLvK7lCpfbhaRGc_BLc8Lz1zgo5_jKqZqNlcnvI9B7htFOF2HjSDFtLxASxEom76ee8180D8jGWq6ErnnsgpFhYRMXR3pk73ETgtqmnfX0BtIp_6TLRIqoEwlS6ebs8zcnpmz4gtPqzOk-q2UMv41KOE6nM5gtFjwRctQiu/s1600/shopping-discount-30%25.jpg",
      alt: "Shopping Discount Global"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/db/20/0a/db200a02819eb485539041a037ba8be1.jpg",
      alt: "Islamic"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/19/62/87/196287329f9554c23f147f8123246b55.jpg",
      alt: "Islam"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2c/ec/8d/2cec8d67f07779a8e34b8f63186de062.jpg",
      alt: "Shopping"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-5");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
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
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad One: Offer Coca Cola Jobs"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://steamuserimages-a.akamaihd.net/ugc/916925691254943202/89CC7CC0689D553C785B9EE9E3D5062BCB8371E6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      alt: "Global Top Car"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh506D3q4yP_yQPdwMEKEymPMcTQJmTw5gAYejOMUoHZJGlxTe7rRJq4YKAvAcu8-pFzwPOIE9pvxYoy2i_9cibtfFGHqYAgAYLHbcElHquOPl0VtSLr0hxxtaCQzNPfHsT2yPh-V1LSuXVglTFuJzoWtZQNfhRtlG06T46AKGsB3dNz1NFdt6M_H8sLaSt/s16000/npr_coca_cola.gif",
      alt: "Coca Cola"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1aZgcCRdzvPDnH71c6L2k8oCeD_UT4TLpDXbNY6qt1FoW-0HvQIMoSjYZF3Qck4wr_jbutjvYZjw21u4EecH5BpMjRxpARBaIPOLuj6HmF9p6KfHxo4ximsA4wxd4mlchAvIMNo_bLbN5rUKaXkQhF_x9AJNhgqcAG2G3k-whE2oM1HzIcHZ2KjoSZP3H/s16000/newspaper_reports-full-size-png.png",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/7d/7b/d8/7d7bd875000475c05661f370afa1dfdf.jpg",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2f/15/5b/2f155b49b4c0201aecacc7203ac04c63.jpg",
      alt: "Sports"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPwaUXWX4MOKuXezfNHQAIbjLvK7lCpfbhaRGc_BLc8Lz1zgo5_jKqZqNlcnvI9B7htFOF2HjSDFtLxASxEom76ee8180D8jGWq6ErnnsgpFhYRMXR3pk73ETgtqmnfX0BtIp_6TLRIqoEwlS6ebs8zcnpmz4gtPqzOk-q2UMv41KOE6nM5gtFjwRctQiu/s1600/shopping-discount-30%25.jpg",
      alt: "Shopping Discount Global"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/db/20/0a/db200a02819eb485539041a037ba8be1.jpg",
      alt: "Islamic"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/19/62/87/196287329f9554c23f147f8123246b55.jpg",
      alt: "Islam"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2c/ec/8d/2cec8d67f07779a8e34b8f63186de062.jpg",
      alt: "Shopping"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-6");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
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
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad One: Offer Coca Cola Jobs"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://steamuserimages-a.akamaihd.net/ugc/916925691254943202/89CC7CC0689D553C785B9EE9E3D5062BCB8371E6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      alt: "Global Top Car"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh506D3q4yP_yQPdwMEKEymPMcTQJmTw5gAYejOMUoHZJGlxTe7rRJq4YKAvAcu8-pFzwPOIE9pvxYoy2i_9cibtfFGHqYAgAYLHbcElHquOPl0VtSLr0hxxtaCQzNPfHsT2yPh-V1LSuXVglTFuJzoWtZQNfhRtlG06T46AKGsB3dNz1NFdt6M_H8sLaSt/s16000/npr_coca_cola.gif",
      alt: "Coca Cola"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1aZgcCRdzvPDnH71c6L2k8oCeD_UT4TLpDXbNY6qt1FoW-0HvQIMoSjYZF3Qck4wr_jbutjvYZjw21u4EecH5BpMjRxpARBaIPOLuj6HmF9p6KfHxo4ximsA4wxd4mlchAvIMNo_bLbN5rUKaXkQhF_x9AJNhgqcAG2G3k-whE2oM1HzIcHZ2KjoSZP3H/s16000/newspaper_reports-full-size-png.png",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/7d/7b/d8/7d7bd875000475c05661f370afa1dfdf.jpg",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2f/15/5b/2f155b49b4c0201aecacc7203ac04c63.jpg",
      alt: "Sports"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPwaUXWX4MOKuXezfNHQAIbjLvK7lCpfbhaRGc_BLc8Lz1zgo5_jKqZqNlcnvI9B7htFOF2HjSDFtLxASxEom76ee8180D8jGWq6ErnnsgpFhYRMXR3pk73ETgtqmnfX0BtIp_6TLRIqoEwlS6ebs8zcnpmz4gtPqzOk-q2UMv41KOE6nM5gtFjwRctQiu/s1600/shopping-discount-30%25.jpg",
      alt: "Shopping Discount Global"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/db/20/0a/db200a02819eb485539041a037ba8be1.jpg",
      alt: "Islamic"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/19/62/87/196287329f9554c23f147f8123246b55.jpg",
      alt: "Islam"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2c/ec/8d/2cec8d67f07779a8e34b8f63186de062.jpg",
      alt: "Shopping"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-7");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
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
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad One: Offer Coca Cola Jobs"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://steamuserimages-a.akamaihd.net/ugc/916925691254943202/89CC7CC0689D553C785B9EE9E3D5062BCB8371E6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      alt: "Global Top Car"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh506D3q4yP_yQPdwMEKEymPMcTQJmTw5gAYejOMUoHZJGlxTe7rRJq4YKAvAcu8-pFzwPOIE9pvxYoy2i_9cibtfFGHqYAgAYLHbcElHquOPl0VtSLr0hxxtaCQzNPfHsT2yPh-V1LSuXVglTFuJzoWtZQNfhRtlG06T46AKGsB3dNz1NFdt6M_H8sLaSt/s16000/npr_coca_cola.gif",
      alt: "Coca Cola"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1aZgcCRdzvPDnH71c6L2k8oCeD_UT4TLpDXbNY6qt1FoW-0HvQIMoSjYZF3Qck4wr_jbutjvYZjw21u4EecH5BpMjRxpARBaIPOLuj6HmF9p6KfHxo4ximsA4wxd4mlchAvIMNo_bLbN5rUKaXkQhF_x9AJNhgqcAG2G3k-whE2oM1HzIcHZ2KjoSZP3H/s16000/newspaper_reports-full-size-png.png",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/7d/7b/d8/7d7bd875000475c05661f370afa1dfdf.jpg",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2f/15/5b/2f155b49b4c0201aecacc7203ac04c63.jpg",
      alt: "Sports"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPwaUXWX4MOKuXezfNHQAIbjLvK7lCpfbhaRGc_BLc8Lz1zgo5_jKqZqNlcnvI9B7htFOF2HjSDFtLxASxEom76ee8180D8jGWq6ErnnsgpFhYRMXR3pk73ETgtqmnfX0BtIp_6TLRIqoEwlS6ebs8zcnpmz4gtPqzOk-q2UMv41KOE6nM5gtFjwRctQiu/s1600/shopping-discount-30%25.jpg",
      alt: "Shopping Discount Global"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/db/20/0a/db200a02819eb485539041a037ba8be1.jpg",
      alt: "Islamic"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/19/62/87/196287329f9554c23f147f8123246b55.jpg",
      alt: "Islam"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2c/ec/8d/2cec8d67f07779a8e34b8f63186de062.jpg",
      alt: "Shopping"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-8");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
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
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
      alt: "Ad One: Offer Coca Cola Jobs"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://steamuserimages-a.akamaihd.net/ugc/916925691254943202/89CC7CC0689D553C785B9EE9E3D5062BCB8371E6/?imw=5000&imh=5000&ima=fit&impolicy=Letterbox&imcolor=%23000000&letterbox=false",
      alt: "Global Top Car"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh506D3q4yP_yQPdwMEKEymPMcTQJmTw5gAYejOMUoHZJGlxTe7rRJq4YKAvAcu8-pFzwPOIE9pvxYoy2i_9cibtfFGHqYAgAYLHbcElHquOPl0VtSLr0hxxtaCQzNPfHsT2yPh-V1LSuXVglTFuJzoWtZQNfhRtlG06T46AKGsB3dNz1NFdt6M_H8sLaSt/s16000/npr_coca_cola.gif",
      alt: "Coca Cola"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEh1aZgcCRdzvPDnH71c6L2k8oCeD_UT4TLpDXbNY6qt1FoW-0HvQIMoSjYZF3Qck4wr_jbutjvYZjw21u4EecH5BpMjRxpARBaIPOLuj6HmF9p6KfHxo4ximsA4wxd4mlchAvIMNo_bLbN5rUKaXkQhF_x9AJNhgqcAG2G3k-whE2oM1HzIcHZ2KjoSZP3H/s16000/newspaper_reports-full-size-png.png",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/7d/7b/d8/7d7bd875000475c05661f370afa1dfdf.jpg",
      alt: "Ad Three: Discount"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2f/15/5b/2f155b49b4c0201aecacc7203ac04c63.jpg",
      alt: "Sports"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhPwaUXWX4MOKuXezfNHQAIbjLvK7lCpfbhaRGc_BLc8Lz1zgo5_jKqZqNlcnvI9B7htFOF2HjSDFtLxASxEom76ee8180D8jGWq6ErnnsgpFhYRMXR3pk73ETgtqmnfX0BtIp_6TLRIqoEwlS6ebs8zcnpmz4gtPqzOk-q2UMv41KOE6nM5gtFjwRctQiu/s1600/shopping-discount-30%25.jpg",
      alt: "Shopping Discount Global"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/db/20/0a/db200a02819eb485539041a037ba8be1.jpg",
      alt: "Islamic"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/19/62/87/196287329f9554c23f147f8123246b55.jpg",
      alt: "Islam"
    },
    {
      link: "https://www.newspaperreports.com",
      image: "https://i.pinimg.com/736x/2c/ec/8d/2cec8d67f07779a8e34b8f63186de062.jpg",
      alt: "Shopping"
    }
  ];
  
  let index = 0;
  const adContainer = document.getElementById("asRlBackup-ads-9");

  function showAd() {
    if (adContainer) {
      adContainer.innerHTML = `
        <a href="${ads[index].link}" target="_blank" rel="noopener">
          <img src="${ads[index].image}" alt="${ads[index].alt}" style="width: 100%; max-width: 728px;" />
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
