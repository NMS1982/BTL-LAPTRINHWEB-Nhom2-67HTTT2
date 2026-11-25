 const display = document.getElementById('display');

        // Thêm số hoặc dấu phép tính vào màn hình
        function appendValue(value){
            display.value += value
        }

        // Xóa toàn bộ màn hình (nút C)
        function clearDisplay() {
            display.value = '';
        }

        // Xóa 1 ký tự cuối cùng (nút ⌫)
        function deleteLast() {
            display.value = display.value.slice(0, -1);
        }

        // Tính toán kết quả (nút 😊
        function calculate() {
            try {
                display.value = eval(display.value);
            } catch (error) {
                display.value = 'Lỗi';
            }
        }