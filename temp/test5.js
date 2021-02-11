<!DOCTYPE html>

<head>
    <title>FireworksKK</title>
    <meta charset="utf-8">
    <script src="./dist/lib/jquery.min.js"></script>
    <script src="./dist/lib/aframe.min.js"></script>
    <script src="./dist/kksMagic/kksMagic.js"></script>
    <script src="./dist/kksFireWorks/kksFireWorks.js"></script>
    <script src="./dist/kksSnow/kksSnow.js"></script>
</head>

<body>
    <a-scene>
        <a-entity id='snow' position='-2 2 -15' kks-magic='preset:snow;options:{color:"#FFFFFF"}'></a-entity>
//        <a-entity position='0 -30 -100' kks-magic='preset:fireworks;options:{eColor:"#FF3333"}'></a-entity>
        <a-sky color='#222'></a-sky>
    </a-scene>
    <script src="./index.js"></script>
</body>
