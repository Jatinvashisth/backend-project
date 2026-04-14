pipeline {
    agent any

    environment {
        EC2_HOST = "23.20.85.68"
        EC2_USER = "ubuntu"
        APP_DIR = "/home/ubuntu/backend-project"
    }

    stages {

        stage('Checkout') {
            steps {
                git branch: 'main',
                    url: 'https://github.com/Jatinvashisth/backend-project.git'
            }
        }

        stage('Build & Test') {
            steps {
                sh '''
                npm install
                npm test
                npm run lint
                '''
            }
        }

        stage('Deploy to EC2') {
            steps {
                sshagent(['ec2-ssh-key']) {
                    sh """
                    ssh -o StrictHostKeyChecking=no ${EC2_USER}@${EC2_HOST} '
                        if [ ! -d "${APP_DIR}" ]; then
                            git clone https://github.com/Jatinvashisth/backend-project.git ${APP_DIR};
                        fi

                        cd ${APP_DIR}
                        git pull origin main
                        npm install
                        pm2 restart app || pm2 start index.js --name app
                    '
                    """
                }
            }
        }
    }
}