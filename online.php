<!DOCTYPE html>
<html lang="pl-PL">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="CSS/styl2.css">
    <link rel="icon" type="image/png" href="ikona.png" sizes="32x32">
    <title>ONLINE (BY: Xilip)</title>
</head>
<body>
    <div id="nag">
        <div id="tryb_div">
            <label><b>Gotowy?</b></label>
            <input type="checkbox" value="1" onclick="start(2)">
        </div>
    </div>

    <div id="main">
        <div id="gracz1">
            <h1 id="Player1">GRACZ 1</h1><br>
            <img src="" id="gracz1img"><br><br><br><br><br><br><br><br><br>
            <label id="player1_nick_label" style="color: white;">Twój nick: </label><input type="text" id="player1_nick"><br><br>
            <label id="player1_logo_label" style="color: white;">Twoje logo (link URL): </label><input type="text" id="player1_logo"><br><br>
            <button onclick="logo()">Zapisz</button>
        </div>
        <div id="gracz2">
            <h1 id="Player2">GRACZ 2</h1><br>
            <img src="" id="gracz2img"><br><br><br><br><br><br><br><br><br>
        
        </div>
        <h1 id="slowka">Powodzenia!</h1>
        <table id="plansza" align="center">
            <tr>
                <td id="A1" onclick="gra(1)">
                    <img src="" id="td_1">
                </td>
                <td id="A2" onclick="gra(2)">
                    <img src="" id="td_2">
                </td>
                <td id="A3" onclick="gra(3)">
                    <img src="" id="td_3">
                </td>
            </tr>
            <tr>
                <td id="B1" onclick="gra(4)">
                    <img src="" id="td_4">
                </td>
                <td id="B2" onclick="gra(5)">
                    <img src="" id="td_5">
                </td>
                <td id="B3" onclick="gra(6)">
                    <img src="" id="td_6">
                </td>
            </tr>
            <tr>
                <td id="C1" onclick="gra(7)">
                    <img src="" id="td_7">
                </td>
                <td id="C2" onclick="gra(8)">
                    <img src="" id="td_8">
                </td>
                <td id="C3" onclick="gra(9)">
                    <img src="" id="td_9">
                </td>
            </tr>
        </table>
    </div>
    <script src="JS/online.js"></script>
</body>
</html>