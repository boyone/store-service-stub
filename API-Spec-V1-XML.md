# API Spec V.1

- [Product List](#api-product-list)
- [Product Detail](#api-product-detail)
- [Submit Order](#api--submit-order)
- [Confirm Payment](#api--confirm-payment)

---

## API: Product List

### คำอธิบาย

สำหรับไว้แสดงรายการสินค้า

### URL: /api/v1/product

### METHOD: GET

##### Header

- Accept: text/xml

#### Response

##### Header

- Content-Type: text/xml

##### Body

```xml
status code : 200
<root>
    <total>2</total>
    <products>
        <product>
            <id>1</id>
            <product_name>Balance Training Bicycle</product_name>
            <product_price>119.95</product_price>
            <product_image>/Balance_Training_Bicycle.png</product_image>
        </product>
        <product>
            <id>2</id>
            <product_name>43 Piece dinner Set</product_name>
            <product_price>12.95</product_price>
            <product_image>/43_Piece_dinner_Set.png</product_image>
        </product>
    </products>
</root>
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

### URL: /api/v1/product/:id

> Example: /api/v1/product/1

### METHOD: GET

##### Header

- Accept: text/xml

#### Response

##### Body

```xml
status code : 200
<product>
    <id>2</id>
    <product_name>43 Piece dinner Set</product_name>
    <product_price>12.95</product_price>
    <product_image>/43_Piece_dinner_Set.png</product_image>
    <quantity>10</quantity>
    <product_brand>CoolKidz</product_brand>
</product>
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

### URL : /api/v1/order

### METHOD: POST

##### Header

- Accept: text/xml
- Content-Type: text/xml

##### Body

```xml
<orders>
	<carts>
		<cart>
			<product_id>2</product_id>
			<quantity>1</quantity>
		</cart>
	</carts>
	<shipping_method>Kerry</shipping_method>
	<shipping_address>405/37 ถ.มหิดล</shipping_address>
	<shipping_sub_district>ท่าศาลา</shipping_sub_district>
	<shipping_district>เมือง</shipping_district>
	<shipping_province>เชียงใหม่</shipping_province>
	<shipping_zip_code>50000</shipping_zip_code>
	<recipient_name>ณัฐญา ชุติบุตร</recipient_name>
	<recipient_phone_number>097080929</recipient_phone_number>
</orders>
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

- Content-Type: text/xml

##### Body

```xml
status code : 200
<order>
    <order_id>881437525</order_id>
    <total_price>14.95</total_price>
</order>
```

| **Name**    | **Type** | **Description** |
| ----------- | -------- | --------------- |
| order_id    | int      | รหัสคำสั่งซื้อ  |
| total_price | decimal  | ราคารวม         |

## API : Confirm Payment

### คำอธิบาย

ยืนยันการชำระเงิน โดยจะส่งข้อมูลการชำระเงินเพื่อนำไปตัดเงินที่ธนาคารและส่งข้อมูลที่อยู่ในการจัดส่งให้กับทางขนส่งสินค้า

### URL : /api/v1/confirmPayment

### METHOD: POST

##### Header

- Accept: text/xml
- Content-Type: text/xml

##### Body

```xml
<confirm_payment>
	<order_id>{{order_id}}</order_id>
	<payment_type>credit</payment_type>
	<type>visa</type>
	<card_number>4719700591590995</card_number>
	<cvv>752</cvv>
	<expired_month>7</expired_month>
	<expired_year>20</expired_year>
	<card_name>Karnwat Wongudom</card_name>
	<total_price>14.9</total_price>
</confirm_payment>
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

- Content-Type: text/xml

##### Body

```xml
// Success (status code: 200)
<notify_message>
    <payment_date>9/3/2025 18:19:43</payment_date>
    <order_id>881437525</order_id>
    <shipping>Kerry</shipping>
    <tracking_id>1045252449</tracking_id>
</notify_message>
```

| **Name**     | **Type** | **Description**      |
| ------------ | -------- | -------------------- |
| payment_date | date     | วันเวลาการชำระเงิน   |
| order_id     | string   | หมายเลขเลขของออเดอร์ |
| shipping     | string   | ผู้ขนส่ง             |
| tracking_id  | string   | หมายเลขการจัดส่ง     |
