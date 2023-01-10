<?php
require_once('headers.php');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "premium-pine";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT p.id, p.name, p.price, p.oldPrice, p.cardImageUrl, 
                     p.cardHoverImageUrl, p.mainImageUrl, p.description, 
                     p.createdDate, 
                     categories.id as categoryId, categories.name as categoryName,
                     brands.id as brandId, brands.name as brandName
              FROM products p
              INNER JOIN categories ON categories.id = p.categoryId 
              INNER JOIN brands ON brands.id = p.brandId
              ";
    // GET /products?category=&brand=&search=&trending=
    if (isset($_GET['category']) || isset($_GET['brand']) || isset($_GET['search']) || isset($_GET['trending'])) {
      if (isset($_GET['category'])) {
        $query .= "WHERE categories.id = " . $_GET['category'];
      }
      if (isset($_GET['brand'])) {
        if (str_contains($query, 'WHERE')) {
          $query .= " AND ";
        } else {
          $query .= "WHERE ";
        }
        $query .= "brands.id = " . $_GET['brand'];
      }
      if (isset($_GET['search'])) {
        if (str_contains($query, 'WHERE')) {
          $query .= " AND ";
        } else {
          $query .= "WHERE ";
        }
        $query .= "p.name LIKE '%" . $_GET['search'] . "%'";
      }
      if (isset($_GET['trending'])) {
        if (str_contains($query, 'WHERE')) {
          $query .= " AND ";
        } else {
          $query .= "WHERE ";
        }
        $query .= "p.trending = " . $_GET['trending'];
      }
    } else if (isset($_GET['newProducts'])) {
      // GET /products?newProducts
      $query .= "ORDER BY p.createdDate DESC LIMIT 3";
    }

    $stmt = $conn->prepare($query);
    $stmt->execute();
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $products = $stmt->fetchAll();
    $result = array();
    foreach ($products as $product) {
      $p = [
        'id' => $product['id'],
        'name' => $product['name'],
        'price' => $product['price'],
        'oldPrice' => $product['oldPrice'],
        'cardImageUrl' => $product['cardImageUrl'],
        'cardHoverImageUrl' => $product['cardHoverImageUrl'],
        'mainImageUrl' => $product['mainImageUrl'],
        'description' => $product['description'],
        'createdDate' => $product['createdDate'],
        'category' => ['id' => $product['categoryId'], 'name' => $product['categoryName']],
        'brand' => ['id' => $product['brandId'], 'name' => $product['brandName']],
      ];
      array_push($result, $p);
    }
    echo json_encode($result);
  }

  // DELETE /products?id=
  if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    if (isset($_REQUEST['id'])) {
      $query = "DELETE FROM products WHERE id = {$_REQUEST['id']}";
      $stmt = $conn->prepare($query);
      $stmt->execute();
    }
  }

  // POST /products
  if ($_SERVER['REQUEST_METHOD'] === 'POST' && !isset($_GET['id'])) {
    $mainImagePath = moveTempFile($_FILES['mainImage']['tmp_name'], $_FILES['mainImage']['name']);
    $cardImagePath = moveTempFile($_FILES['cardImage']['tmp_name'], $_FILES['cardImage']['name']);
    $cardHoverImagePath = moveTempFile($_FILES['cardHoverImage']['tmp_name'], $_FILES['cardHoverImage']['name']);

    $query = "INSERT INTO `products` (`name`, `price`, `oldPrice`, `cardImageUrl`, `cardHoverImageUrl`, `mainImageUrl`, `description`, `createdDate`, `trending`, `categoryId`, `brandId`) VALUES ('{$_POST['name']}', {$_POST['price']}, {$_POST['oldPrice']}, '{$cardImagePath}', '{$cardHoverImagePath}', '{$mainImagePath}', '{$_POST['description']}', {$_POST['createdDate']}, {$_POST['trending']}, {$_POST['categoryId']}, {$_POST['brandId']})";
    $stmt = $conn->prepare($query);
    $stmt->execute();
  }

  // /products?id=
  if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_GET['id'])) {
    $id = $_GET['id'];
    // Delete old images
    $query1 = "SELECT * FROM products WHERE id = {$id}";
    $stmt1 = $conn->prepare($query1);
    $stmt1->execute();
    $stmt1->setFetchMode(PDO::FETCH_ASSOC);
    $product = $stmt1->fetch();

    deleteImageFile($product['mainImageUrl']);
    deleteImageFile($product['cardImageUrl']);
    deleteImageFile($product['cardHoverImageUrl']);

    // Upload new images
    $mainImagePath = moveTempFile($_FILES['mainImage']['tmp_name'], $_FILES['mainImage']['name']);
    $cardImagePath = moveTempFile($_FILES['cardImage']['tmp_name'], $_FILES['cardImage']['name']);
    $cardHoverImagePath = moveTempFile($_FILES['cardHoverImage']['tmp_name'], $_FILES['cardHoverImage']['name']);

    $query2 = "UPDATE products SET name = '{$_POST['name']}' , price = {$_POST['price']} , oldPrice = {$_POST['oldPrice']} , cardImageUrl = '{$cardImagePath}' , cardImageHoverUrl = '{$cardHoverImagePath}' , mainImageUrl = '{$mainImagePath}' , description = '{$_POST['description']}' , createdDate = {$_POST['createdDate']} , trending = {$_POST['trending']} , categoryId = {$_POST['categoryId']} , brandId = {$_POST['brandId']} WHERE id = {$id}";
    $stmt2 = $conn->prepare($query2);
    $stmt2->execute();
  }

} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}

function moveTempFile(string $tempPath, string $fileName): string
{
  $tmp = explode('.', $fileName);
  $file_ext = strtolower(end($tmp));
  $file = 'images/' . uniqid() . '.' . $file_ext;
  if (move_uploaded_file($tempPath, $file)) {
    return 'http://localhost/api/' . $file;
  }
  return '';
}

function deleteImageFile(string $imageUrl): void
{
  $path = explode('/', $imageUrl);
  $filePath = "images/" . end($path);
  unlink($filePath);
}
?>