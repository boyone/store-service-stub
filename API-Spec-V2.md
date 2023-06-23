# API Spec V.2

## API: Login

### URL : /api/auth/login

### METHOD: POST

##### Header

- Accept: application/json
- Content-Type: application/json

##### Body

```json
{
  "user": "john",
  "password": "password"
}
```

#### Response

##### Header

- Content-Type: application/json

##### Body

```json
status code : 200
{
    "token": "<token>"
}
```

## API: Product List

### คำอธิบาย

สำหรับไว้แสดงรายการสินค้า

### URL: /api/v2/product

### METHOD: GET

##### Header

- Accept: application/json
- Authorization: Bearer \<token>

#### Response

##### Header

- Content-Type: application/json

##### Body

```json
status code : 200
{
    "total": 2,
    "products": [
        {
            "id": 1,
            "product_name": "Balance Training Bicycle",
            "product_price": 119.95,
            "product_image": "/Balance_Training_Bicycle.png"
        },
        {
            "id": 2,
            "product_name": "43 Piece dinner Set",
            "product_price": 12.95,
            "product_image": "/43_Piece_dinner_Set.png"
        }
    ]
}
```

| **Name**      | **Type** | **Description** |
| ------------- | -------- | --------------- |
| total         | int      | จำนวนสินค้า     |
| id            | int      | รหัสสินค้า      |
| product_name  | string   | ชื่อสินค้า      |
| product_price | decimal  | ราคาสินค้า      |
| product_image | string   | รูปภาพสินค้า    |

## API: Product Detail

### คำอธิบาย

สำหรับแสดงข้อมูลของสินค้าชิ้นนั้น

### URL: /api/v2/product/:id

> Example: /api/v2/product/2

### METHOD: GET

##### Header

- Accept: application/json
- Authorization: Bearer \<token>

#### Response

##### Body

```json
status code : 200
{
    "id": "2",
    "product_name": "43 Piece dinner Set",
    "product_price": 12.95,
    "product_image": "/43_Piece_dinner_Set.png",
    "quantity": "10",
    "product_brand": "CoolKidz"
}
```

| **Name**         | **Type** | **Description** |
| ---------------- | -------- | --------------- |
| product_name     | string   | ชื่อสินค้า      |
| product_price    | decimal  | ราคาสินค้า      |
| product_quantity | int      | จำนวนสินค้า     |
| product_brand    | string   | ยี่ห้อสินค้า    |
| product_image    | string   | รูปภาพสินค้า    |

## API : Submit Order

### คำอธิบาย

ยืนยันการสั่งซื้อสินค้า โดยจะส่งข้อมูลสินค้าและที่อยู่ในการจัดส่ง

### URL : /api/v2/order

### METHOD: POST

##### Header

- Accept: application/json
- Content-Type: application/json
- Authorization: Bearer \<token>

##### Body

```json
{
  "cart": [
    {
      "product_id": 2,
      "quantity": 1
    }
  ],
  "shipping_method": "Kerry",
  "shipping_address": "405/37 ถ.มหิดล",
  "shipping_sub_district": "ท่าศาลา",
  "shipping_district": "เมือง",
  "shipping_province": "เชียงใหม่",
  "shipping_zip_code": "50000",
  "recipient_name": "ณัฐญา ชุติบุตร",
  "recipient_phone_number": "0970809292"
}
```

| **Name**               | **Type** | **Description**   |
| ---------------------- | -------- | ----------------- |
| cart                   | object   | ตะกร้าสินค้า      |
| product_id             | int      | หมายเลขคำสั่งซื้อ |
| quantity               | int      | จำนวนสินค้า       |
| shipping_method        | string   | วิธีการจัดส่ง     |
| shipping_address       | string   | ที่อยู่           |
| shipping_sub_district  | string   | ตำบล              |
| shipping_district      | string   | อำเภอ             |
| shipping_province      | string   | จังหวัด           |
| shipping_zip_code      | string   | รหัสไปรษณีย์      |
| recipient_name         | string   | ชื่อผู้รับ        |
| recipient_phone_number | string   | เบอร์โทรศัพท์     |

#### Response

##### Header

```json
{
  "Content-Type": "application/json"
}
```

##### Body

```json
status code : 200
{
    "order_id": 8004359122,
    "total_price": 14.95
}
```

| **Name**    | **Type** | **Description** |
| ----------- | -------- | --------------- |
| order_id    | int      | รหัสคำสั่งซื้อ  |
| total_price | decimal  | ราคารวม         |

## API : Confirm Payment

### คำอธิบาย

ยืนยันการชำระเงิน โดยจะส่งข้อมูลการชำระเงินเพื่อนำไปตัดเงินที่ธนาคารและส่งข้อมูลที่อยู่ในการจัดส่งให้กับทางขนส่งสินค้า

### URL : /api/v2/confirmPayment

### METHOD: POST

##### Header

- Accept: application/json
- Content-Type: application/json
- Authorization: Bearer \<token>

##### Body

```json
{
  "order_id": 8004359122,
  "payment_type": "credit",
  "type": "visa",
  "card_number": "4719700591590995",
  "cvv": "752",
  "expired_month": 7,
  "expired_year": 20,
  "card_name": "Karnwat Wongudom",
  "total_price": 14.95
}
```

| **Name**      | **Type** | **Description**        |
| ------------- | -------- | ---------------------- |
| order_id      | int      | เลขของออเดอร์          |
| payment_type  | string   | วิธีการชำระเงิน        |
| type          | string   | ประเภทบัตร             |
| card_number   | string   | หมายเลขบัตร            |
| cvv           | string   | ยี่ห้อสินค้า           |
| expired_month | int      | เดือนที่หมดอายุของบัตร |
| expired_year  | int      | ปีที่หมดอายุของบัตร    |
| card_name     | string   | ชื่อผู้ถือบัตร         |
| total_price   | decimal  | ราคารวม                |

#### Response

##### Header

```json
{
  "Content-Type": "application/json"
}
```

##### Body

```json
{
  "payment_date": "1/3/2020 13:30:00",
  "shipping": "Kerry",
  "tracking_id": "1967070808",
  "order_id": 834531601
}
```
