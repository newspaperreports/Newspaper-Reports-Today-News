// First Top Ads Newspaper Reports
// পেজ পুরোপুরি লোড হওয়ার পর স্ক্রিপ্ট চালু হবে
window.addEventListener("load", function () {
  
    // আপনার সব অ্যাডের লিংক ও ছবি এখানে লিস্ট হিসেবে রাখা হলো
    const ads = [
      {
        type: "image",
        link: "https://yourwebsite.com/ad1", // প্রথম অ্যাডে ক্লিক করলে এই লিংকে যাবে
        image: "https://i.pinimg.com/736x/01/44/71/014471c2a1c6b6617e5fa3c5c5ca6009.jpg", // প্রথম অ্যাডের ছবি
        alt: "AS"
      },
      {
        type: "image",
        link: "https://yourwebsite.com/ad2", // দ্বিতীয় অ্যাড লিংক
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEg5uqIH9PKP52VDw47ue8iDavZC1CFeXCgSIZboDz0KWLyM9RFS47bqRyJcK-DYb8_uVOu1ewPMpwob54itd2JHVK9ve_TQ-d5tMYI2AapG5ZKLeGiHiDduhKo9s66iV3nLDrDBzJ2f90LWc5U3nhHbqCDKoPMtAKB0bbytmLM2lEkyy-bdsM5yngRYvoNY/s16000/npr_ads.gif", // দ্বিতীয় অ্যাডের ছবি
        alt: "Ad Two: Summer Promo"
      },
      {
        type: "image",
        link: "https://yourwebsite.com/ad3", // তৃতীয় অ্যাড লিংক
        image: "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEj3Choc93l7uI7Fd75WzRcwcLXqxfnzolk-8EIJH2VkMJYO-5CdmTz_h5MwWeLASu_c2YBHIDDEVP4mMWoBsfyRzLQutnd9By_k8VBMqVVvKCO31YJf8PCbnHnCR5RuGO7pAJwGnqQnNsA8U9Id0F-ICtfp8LIZUKxJUNS6Bc2bM-8YwpjDaH67TdklTgoB/s16000/npr_ads_coca_cola_2.gif", // তৃতীয় অ্যাডের ছবি
        alt: "Limited Time: Coca-Cola Deal"
      }
    ];
  
    let index = 0; // কোন অ্যাডটি এখন দেখানো হবে, তার ইনডেক্স
  
    const adContainer = document.getElementById("asTpBackup-ads"); // যেখানে অ্যাড দেখাবেন সেই div
  
    // এই ফাংশনটি একটি অ্যাড দেখাবে
    function showAd() {
      if (adContainer) {
        adContainer.innerHTML = `
          <a href="${ads[index].link}" target="_blank">
            <img src="${ads[index].image}" alt="${ads[index].alt}" style="max-width:100%; display="block";" />
          </a>
        `;
        index = (index + 1) % ads.length; // পরবর্তী অ্যাডের জন্য ইনডেক্স বাড়ানো (শেষ হলে আবার ০ থেকে)
      }
    }
  
    // প্রথমে ৩ সেকেন্ড অপেক্ষা করা হবে যেন গুগল অ্যাড লোড হয় কি না দেখা যায়
    setTimeout(function () {
      // যদি অ্যাড কনটেইনার থাকে এবং এর উচ্চতা (height) ০ হয়, অর্থাৎ গুগল অ্যাড আসেনি
      if (adContainer && adContainer.offsetHeight === 0) {
        showAd(); // প্রথম পার্সোনাল অ্যাড দেখাও
        setInterval(showAd, 30000); // প্রতি ৩০ সেকেন্ডে অ্যাড পরিবর্তন করো
      }
    }, 3000); // গুগল অ্যাড আসার জন্য ৩ সেকেন্ড সময় দেওয়া হলো
  });
