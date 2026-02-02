do{
    let n = parseInt(prompt("Nhập N số"))

        let select = parseInt(prompt(`
                        Nhập lựa chọn:
                        1.Kiểm tra số chẵn hay lẻ
                        2.Kiểm tra xem số âm hay dương
                        3.In từ 1 đến: ${n}
                        4.FizzBuzz(Không cần n)
                        `)
                    )

        switch (select) {
            case 1:
                alert(`Số ${n} là số ${n%2 == 0? "chẵn":"lẻ"}`)
                break;
            case 2:
                alert(`Số ${n} là số ${n%2 < 0? "âm":"dương"}`)
                break;
            case 3:
                if (n > 0){
                    for(let i = 0;i <= n;i++){
                        console.log(`Lặp đến: ${i}`);
                    }
                }else {
                    alert("Giá trị n không hợp lệ để tạo dãy số");
                }
                break;
            case 4:
                for (i = 1;i <=50;i++){
                    if((i % 3 == 0) && (i % 5 == 0)){
                        console.log("FizzBuzz");
                    } else if(i % 3 == 0){
                        console.log("Fizz");
                    } else if (i % 5 == 0){
                        console.log("Buzz");
                    }
                }
            default:
                break;
        }
}while(true)