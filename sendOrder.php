<?php
if (isset($_POST['nameS']) && isset($_POST['emailS']) && isset($_POST['numberS']) && isset($_POST['locationS']) && isset($_POST['payS'])) {
  $name = $_POST['nameS'];
  $email = $_POST['emailS'];
  $number = $_POST['numberS'];
  
  $to = 't.bekarev@gmail.com'; //	Здесь укажите адресс менеджера заказов
  $subject = 'New form submission';
  $body = "ФИО: $name\Email: $email\nНомер: $number";
  $headers = "From: $email";
  
  if (mail($to, $subject, $body, $headers)) {
    echo 'Заказ принят';
  } else {
    echo 'Отказано в принятии заказа';
  }
}
?>