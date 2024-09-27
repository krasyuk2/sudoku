node('agent1'){
    def app
    stage('Cloning Git') {
        checkout scm
    }
    stage('Build-and-Tag') {
        app = docker.build("krasyuk2/sudoku")
    }
    stage('Post-to-dockerhub'){
         script {
            docker.withRegistry('https://registry.hub.docker.com', 'dockerhub_creds') {
                echo "Attempting to push Docker image to Docker Hub
                app.push("latest")
                echo "Successfully pushed Docker image to Docker Hub"
        }
    }
    stage('Pull-image-server'){
        sh 'docker-compose down'
        sh 'docker-compose up -d'
    }
}
