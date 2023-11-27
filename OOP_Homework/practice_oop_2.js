/**
 * Sở giao thông cần theo dõi việc đăng ký xe của người dân.
 * Dựa vào dung tích xylanh của xe, sở giao thông sẽ tính
 * mức thuế phải đóng trước bạ khi mua xe như sau:
 * 
 * - Dưới 100cc, 1% giá trị của xe
 * - Từ 100 đến 200 cc, 3% giá trị của xe
 * - Trên 20cc, 5% giá trị của xe
 * 
 * Hãy thiết kế class `Vehicle` với các thông tin như sau:
 * - Thuộc tính: tên chủ xe, loại xe, dung tích, trị giá
 * - Constructor khởi tạo các thuộc tính thông qua params
 * - Hàm tính giá trị thuế trước bạ dựa vào dung tích xylanh
 * - Hàm showInfo in ra các thông tin của xe: tên chủ xe,
 * loại xe, dung tích, trị giá, thuế phải nộp
 * 
 * Khởi tạo các đối tượng Vehicle và in ra các thông tin
 * tương ứng của các đội tượng được khởi tạo
 */
class Vehicle {
    constructor(owner, type, capacity, price) {
      this.owner = owner;
      this.type = type;
      this.capacity = capacity;
      this.price = price;
    }
  
    getTaxAmount() {
      if(this.capacity < 100) {
        return this.price * 0.01;
      } else if(this.capacity <= 200) {
        return this.price * 0.03; 
      } else {
        return this.price * 0.05;
      }
    }
  
    showInfo() {
      console.log(`Owner: ${this.owner}`);
      console.log(`Type: ${this.type}`);
      console.log(`Capacity: ${this.capacity}cc`);
      console.log(`Price: ${this.price}`);
      console.log(`Tax amount: ${this.getTaxAmount()}`);
    }
  }
  
  const car = new Vehicle('John', 'Sedan', 1600, 20000);
  car.showInfo();
  
  const motorbike = new Vehicle('Mary', 'Sports bike', 400, 8000);
  motorbike.showInfo();