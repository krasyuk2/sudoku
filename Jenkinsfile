pipeline {
    agent any
    stages {
        stage('Set Docker Context') {
            steps {
                script {
                    // Убедитесь, что используете правильный контекст
                    sh 'docker context use default'
                }
            }
        }
        stage('Docker Login') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub_creds') {
                        echo "Attempting to log in to Docker Hub"
                    }
                }
            }
        }
        stage('Build-and-Tag') {
            steps {
                script {
                    def app = docker.build("krasyuk2/sudoku")
                    echo "Built Docker image: ${app.id}"
                }
            }
        }
        stage('Post-to-dockerhub') {
            steps {
                script {
                    docker.withRegistry('https://registry.hub.docker.com', 'dockerhub_creds') {
                        app.push("latest")
                        echo "Pushed Docker image to Docker Hub"
                    }
                }
            }
        }
        stage('Pull-image-server') {
            steps {
                sh 'docker-compose down'
                sh 'docker-compose up -d'
            }
        }
    }
}
