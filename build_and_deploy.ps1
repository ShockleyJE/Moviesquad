#Keep the root directory remembered
$rootdir = pwd

# Make sure prod axios config is active
Copy-Item -Path .\client\src\api\axios-prod.js -Destination .\client\src\api\axios.js 

# Npm Build
cd .\client 
npm run build

cd $rootdir

# Copy the build output to the server
Copy-Item -Path .\client\build -Destination .\server\client -Recurse -Force

# Build the server dockerfile and push to the hub
cd .\server
docker build . -t shockleyje/moviesquad-server
docker push shockleyje/moviesquad-server:latest

# Update fly secrets
$secrets = Get-Content -Path .\config\prod.env
$secrets_string = ""
ForEach ($secret in $secrets){
     $secrets_string += $secret + " "
}
echo $secrets_string
flyctl secrets set $secrets_string

# deploy
fly deploy -a moviesquad -i shockleyje/moviesquad-server:latest

# Set back dev environment
cd $rootdir
Copy-Item -Path .\client\src\api\axios-dev.js -Destination .\client\src\api\axios.js 