<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
    <?php

    $a = [1, 3, 4, 6, 2, 7];

    for ($i = 0; $i < count($a); $i++) {

        if($a[$i] % 2 == 0) {
            echo $a[$i];
        }
    }

    ?>
</body>
</html>