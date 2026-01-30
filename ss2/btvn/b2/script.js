let quantity = Number(prompt("Số sách trong thư viện"));

let libraryStatus;

if (quantity <= 10) {
    libraryStatus = "Thư viện còn ít sách";
} else if ((quantity >= 10) && (quantity <= 20)) {
    libraryStatus = "Thư viện có số lượng sách vừa đủ"
} else {
    libraryStatus = "Thư viện có nhiều sách"
}

console.log(libraryStatus);