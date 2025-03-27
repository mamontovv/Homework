<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>

<body>

    <?php

    function outputCycle($tag, $content, $counter)
    {
        for ($i = 0; $i < $counter; $i++) {

            echo "<$tag>$content</$tag>";
        }
    }

    outputCycle('div', 'dfssd', 3)

    ?>


</body>

</html>