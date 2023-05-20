<?php
    #Specifico il "formato" delle informazioni
    header('Content_Type: application/json');
    
    #Ricevo
    $result = file_get_contents('db.json');
    #Traduco in php ?? TRUE??
    $phpDecode = json_decode($result, true);

    #Qui devo modificare l'array prima di restituirlo.
    if(isset($_POST['newOne'])){

        $newTask = [
            'message' => $_POST['newOne'],
            'flag' => false
        ];

        $phpDecode[] = $newTask;

        file_put_contents('db.json', json_encode($phpDecode));
    }

    if (isset($_POST['indexToDelete'])) {
        $index = $_POST['indexToDelete'];
        array_splice($phpDecode, $index , 1);

        file_put_contents('db.json', json_encode($phpDecode));
    }

    if (isset($_POST['indexToChange'])) {
        $indexToCheck = $_POST['indexToChange'];

        $phpDecode[$indexToCheck]['flag'] = !$phpDecode[$indexToCheck]['flag'];
        file_put_contents('db.json', json_encode($phpDecode));
    }



    #Codifico in formato json
    $jsonEncode = json_encode($phpDecode);

    #Ristampo il db.
    echo $jsonEncode;

    // file_put_contents('db.json', $jsonEncode);