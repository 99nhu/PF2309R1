/**
 * Hãy tạo một lớp `Rectangle` gồm có:
 * - Thuộc tính: chiều dài, chiều rộng hình chữ nhật
 * - Constructor nhận vào các thông tin khởi tạo thuộc tính
 * - Phương thức tính diện tích, chu vi
 * - Phương thức showInfo() log ra các thông tin dài, rộng,
 * diện tích, chu vi
 * 
 * Tạo ra các object hình chữ nhật từ Class Rectangle và
 * in ra thông tin của các object vừa tạo
 */
class Rectangle {
  constructor(length, width) {
    this.length = length;
    this.width = width;
  }

  getArea() {
    return this.length * this.width;
  }

  getPerimeter() {
    return 2 * (this.length + this.width);
  }
  
  showInfo() {
    console.log(`Length: ${this.length}`); 
    console.log(`Width: ${this.width}`);
    console.log(`Area: ${this.getArea()}`); 
    console.log(`Perimeter: ${this.getPerimeter()}`);
  }
}

const rect1 = new Rectangle(5, 3);
rect1.showInfo();

const rect2 = new Rectangle(10, 5); 
rect2.showInfo();
