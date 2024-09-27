node('agent1') {
    def app
    stage('Cloning Git') {
        checkout scm
    }
    stage('Build-and-Tag') {
        app = docker.build("krasyuk2/sudoku")
    }
    stage('Post-to-dockerhub') {
        docker.withRegistry('https://registry.hub.docker.com', 'dockerhub_creds') {
            app.push("latest")
        }
    }
    stage('Check Docker and Docker-Compose') {
        // Используем 'bat' вместо 'sh' для Windows
        bat 'docker --version'
        bat 'docker-compose --version'
    }
    stage('Pull-image-server') {
        // Используем 'bat' и правильные команды для Windows
        bat 'docker-compose down'
        bat 'docker-compose up -d'
    }
}
