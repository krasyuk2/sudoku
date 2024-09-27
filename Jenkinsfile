pipeline{
    agent any
    stages {
        stage('Cloning Git') {
            steps {
                checkout scm
            }
        }
        stage('SAST') {
            steps {
                echo "echo SAST stage"
            }
        }
        stage('Build-and-Tag') {
            steps {
                echo "echo Build-and-Tah"
            }
        }
    }
}