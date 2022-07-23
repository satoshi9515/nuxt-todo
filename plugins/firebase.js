import firebase from 'firebase'

const config = {
    projectId: 'nuxt-todo-70bf6'
 }

if(!firebase.apps.length) {
    firebase.initializeApp(config)

}

export default firebase