<?php
    #Ricevo
    $result = file_get_contents('db.json');
    #Traduco in php
    $phpDecode = json_decode($result);

    #Qui devo modificare l'array prima di restituirlo.
    if(isset($_POST['newOne'])){
        $newTask = [
            'message' => $_POST['newOne'],
            'flag' => false
        ];
        $phpDecode[] = $newTask;

            file_put_contents('db.json', json_encode($phpDecode));
    }


    #Specifico il "formato" delle informazioni
    header('Content_Type: application/json');

    #Codifico in formato json
    $jsonEncode = json_encode($phpDecode);

    #Ristampo il db.
    echo $jsonEncode;

    file_put_contents('db.json', $jsonEncode);