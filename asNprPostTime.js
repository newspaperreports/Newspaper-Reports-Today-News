// পোস্টের সময় থেকে কতক্ষণ আগে হয়েছে সেটা হিসাব করে টেক্সট রিটার্ন করে
function timeAgo(postDate) {
    const now = new Date(); // বর্তমান সময়
    const seconds = Math.floor((now - postDate) / 1000); // কত সেকেন্ড পার হয়েছে

    // ১ মিনিটের কম হলে
    if (seconds < 60) return "just now";

    const minutes = Math.floor(seconds / 60); // মিনিট হিসাব
    if (minutes < 60) return `${minutes} minute${minutes > 1 ? 's' : ''} ago`; // মিনিট আগে

    const hours = Math.floor(minutes / 60); // ঘণ্টা হিসাব
    if (hours < 24) return `${hours} hour${hours > 1 ? 's' : ''} ago`; // ঘণ্টা আগে

    const days = Math.floor(hours / 24); // দিন হিসাব
    if (days < 7) return `${days} day${days > 1 ? 's' : ''} ago`; // দিন আগে

    const weeks = Math.floor(days / 7); // সপ্তাহ হিসাব
    if (weeks < 4) return `${weeks} week${weeks > 1 ? 's' : ''} ago`; // সপ্তাহ আগে

    // যদি ১ মাস বা তার বেশি সময় আগে হয়, তাহলে পুরো তারিখ দেখাবে
    return postDate.toLocaleDateString("en-US", {
        year: "numeric",
        month: "long",
        day: "numeric"
    });
}

// সব .postTime এলিমেন্ট খুঁজে সময় আপডেট করে
function updateTimeAgo() {
    const elements = document.querySelectorAll(".postTime"); // সব postTime এলিমেন্ট

    elements.forEach(el => {
        const postTime = new Date(el.getAttribute("data-time")); // এলিমেন্ট থেকে পোস্ট টাইম নেওয়া
        if (!isNaN(postTime)) {
            el.innerText = timeAgo(postTime); // timeAgo ফরম্যাটে রেজাল্ট বসানো
        }
    });
}

// যখন পেজ লোড হবে, তখন প্রথমে টাইম দেখাবে এবং প্রতি ১ মিনিটে আপডেট করবে
document.addEventListener("DOMContentLoaded", () => {
    updateTimeAgo(); // প্রথমে আপডেট করো
    setInterval(updateTimeAgo, 60000); // প্রতি ৬০ সেকেন্ডে আপডেট করো
});
