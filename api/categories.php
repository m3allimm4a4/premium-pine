<?php
require_once('headers.php');
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "premium-pine";

try {
  $conn = new PDO("mysql:host=$servername;dbname=$dbname", $username, $password);
  $conn->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);

  // GET /categories
  if ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $query = "SELECT * FROM categories";
    $stmt = $conn->prepare($query);
    $stmt->execute();
    $stmt->setFetchMode(PDO::FETCH_ASSOC);
    $result = $stmt->fetchAll();

    echo json_encode($result);
  }

  // DELETE /categories?id=
  if ($_SERVER['REQUEST_METHOD'] === 'DELETE') {
    if (isset($_REQUEST['id'])) {
      $query = "DELETE FROM categories WHERE categories.id = {$_REQUEST['id']}";
      $stmt = $conn->prepare($query);
      $stmt->execute();
    }
  }

  // POST /categories
  if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    $query = "INSERT INTO categories(name) VALUES ('{$data->name}')";
    $stmt = $conn->prepare($query);
    $stmt->execute();
  }

  // PUT /categories
  if ($_SERVER['REQUEST_METHOD'] === 'PUT') {
    $json = file_get_contents('php://input');
    $data = json_decode($json);

    $query = "UPDATE categories SET name = '{$data->name}' WHERE id = {$data->id}";
    $stmt = $conn->prepare($query);
    $stmt->execute();
  }

} catch (PDOException $e) {
  echo "Connection failed: " . $e->getMessage();
}
?>