// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {
    const ads = [
      {
        link: "https://yourwebsite.com/ad1",
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif",
        alt: "Ad One: Offer Coca Cola Jobs"
      },
      {
        link: "https://yourwebsite.com/ad2",
        image: "https://via.placeholder.com/728x90?text=Ad+2",
        alt: "Ad Two: Promo"
      },
      {
        link: "https://yourwebsite.com/ad3",
        image: "https://via.placeholder.com/728x90?text=Ad+3",
        alt: "Ad Three: Discount"
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
        setInterval(showAd, 30000); // ৩০ সেকেন্ড পরপর পরিবর্তন
      }
    }, 3000);
  });
  