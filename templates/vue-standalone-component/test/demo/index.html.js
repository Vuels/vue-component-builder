module.exports = projectName => `
<!DOCTYPE html>
<html>
<head>
    <meta charset="utf-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Component ${projectName} Testing Page</title>
    <meta name="viewport" content="width=device-width, initial-scale=1">
</head>
<body>
    <div id="app">
        
    </div>
    <script src="https://unpkg.com/vue"></script>
    <script src="./${projectName}.js"></script>
    <script>new Vue({ el: '#app' })</script>
</body>
</html>
`