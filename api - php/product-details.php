<?php
require_once('headers.php');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "premium-pine";

try {
  if ($_SERVER['REQUEST_METHOD'] === 'GET') {

    //GET /product-details?id=
    if (isset($_GET['id'])) {
      $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
      $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
      $query = "SELECT p.id, p.name, p.price, p.cardImageUrl, p.cardHoverImageUrl, p.mainImageUrl, 
                     p.description, p.createdDate, 
                     categories.id as categoryId, categories.name as categoryName,
                     brands.id as brandId, brands.name as brandName                     
              FROM products p
              INNER JOIN categories ON categories.id = p.categoryId 
              INNER JOIN brands ON brands.id = p.brandId             
              WHERE p.id = " . $_GET['id'] . "
              LIMIT 1
              ";

      $stmt = $conn->prepare($query);
      $stmt->execute();
      $stmt->setFetchMode(PDO::FETCH_ASSOC);
      $product = $stmt->fetch();
      $result = [
        'id' => $product['id'],
        'name' => $product['name'],
        'price' => $product['price'],
        'cardImageUrl' => $product['cardImageUrl'],
        'cardHoverImageUrl' => $product['cardHoverImageUrl'],
        'mainImageUrl' => $product['mainImageUrl'],
        'description' => $product['description'],
        'createdDate' => $product['createdDate'],
        'category' => ['id' => $product['categoryId'], 'name' => $product['categoryName']],
        'brand' => ['id' => $product['brandId'], 'name' => $product['brandName']],
      ];
      echo json_encode($result);
      return;
    }
  }
} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>