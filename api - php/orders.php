<?php
require_once('headers.php');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "premium-pine";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // POST /orders
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {

    $json = file_get_contents('php://input');
    $data = json_decode($json);

    $query = "INSERT INTO `orders` (`firstName`, `lastName`, `email`, `phone`, `city`, `address1`, `address2`, `subtotal`, `total`, `discount`, `createdDate`) VALUES ('{$data->firstName}', '{$data->lastName}', '{$data->email}', '{$data->phone}', '{$data->city}', '{$data->address1}', '{$data->address2}', '{$data->subtotal}', '{$data->total}', '{$data->discount}', '{$data->createdDate}')";

    $stmt = $conn->prepare($query);
    $stmt->execute();
    $orderId = $conn->lastInsertId();

    $items = $data->items;

    foreach ($items as $item) {
      $query1 = "INSERT INTO `orderproducts` (`productId`, `orderId`, `quantity`, `unitPrice`) VALUES ({$item->product->id}, {$orderId}, {$item->quantity}, {$item->product->price})";

      $stmt1 = $conn->prepare($query1);
      $stmt1->execute();
    }

    echo $orderId;
  }

  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    if (isset($_GET['id'])) {
      $orderId = $_GET['id'];

      $query1 = "SELECT * FROM orders WHERE id = {$orderId}";
      $stmt1 = $conn->prepare($query1);
      $stmt1->execute();
      $stmt1->setFetchMode(PDO::FETCH_ASSOC);
      $order = $stmt1->fetch();

      $query2 = "SELECT 
                    o.quantity,
                    p.id, p.name, p.price, p.oldPrice, p.cardImageUrl, 
                    p.cardHoverImageUrl, p.mainImageUrl, p.description, 
                    p.createdDate, 
                    categories.id as categoryId, categories.name as categoryName,
                    brands.id as brandId, brands.name as brandName
                 FROM orderproducts o
                 INNER JOIN products p ON p.id = o.productId
                 INNER JOIN categories ON categories.id = p.categoryId 
                 INNER JOIN brands ON brands.id = p.brandId
                 WHERE o.orderId = {$orderId}";

      $stmt2 = $conn->prepare($query2);
      $stmt2->execute();
      $stmt2->setFetchMode(PDO::FETCH_ASSOC);
      $orderItems = $stmt2->fetchAll();
      $items = array();

      foreach ($orderItems as $item) {
        $i = [
          'product' => [
            'id' => $item['id'],
            'name' => $item['name'],
            'price' => $item['price'],
            'oldPrice' => $item['oldPrice'],
            'cardImageUrl' => $item['cardImageUrl'],
            'cardHoverImageUrl' => $item['cardHoverImageUrl'],
            'mainImageUrl' => $item['mainImageUrl'],
            'description' => $item['description'],
            'createdDate' => $item['createdDate'],
            'category' => ['id' => $item['categoryId'], 'name' => $item['categoryName']],
            'brand' => ['id' => $item['brandId'], 'name' => $item['brandName']],
          ],
          'quantity' => $item['quantity']
        ];
        array_push($items, $i);
      }

      $result = [
        'id' => $order['id'],
        'firstName' => $order['firstName'],
        'lastName' => $order['lastName'],
        'email' => $order['email'],
        'phone' => $order['phone'],
        'city' => $order['city'],
        'address1' => $order['address1'],
        'address2' => $order['address2'],
        'subtotal' => $order['subtotal'],
        'total' => $order['total'],
        'discount' => $order['discount'],
        'createdDate' => $order['createdDate'],
        'items' => $items
      ];
      echo json_encode($result);

    } else {
      $query = "SELECT * FROM orders";
      $stmt = $conn->prepare($query);
      $stmt->execute();
      $stmt->setFetchMode(PDO::FETCH_ASSOC);
      $result = $stmt->fetchAll();

      echo json_encode($result);
    }
  }

} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>