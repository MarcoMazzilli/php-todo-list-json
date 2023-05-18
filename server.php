<?php
    #Ricevo
    $result = file_get_contents('db.json');
    #Traduco in php
    $phpDecode = json_decode($result);

    #Qui devo modificare l'array prima di restituirlo.


    #Specifico il "formato" delle informazioni
    header('Content_Type: application/json');
    #Codifico in formato json
    $jsonEncode = json_encode($phpDecode);
    #Ristampo il db.
    echo $jsonEncode;
    
    file_put_contents('db.json', $jsonEncode);